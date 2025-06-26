import { WebSocketServer } from "ws";
import {
  connectedClients,
  onlineAgents,
  userToAgent,
  userSession,
  agentToUsers,
  connectionAttempts,
  logEvent,
  getPersistedConnectionState,
  handleConnectionError,
  handleAgentConnection,
  handleUserConnection,
  getNextAgent,
  assignUserToAgent,
  persistConnectionState,
  clearPersistedConnectionState,
  getBotResponse
} from "./wsHelpers.js";

export function startChatServer({ port = 8080, server = null ,path} = {}) {
  const wss = server
    ? new WebSocketServer({ server })
    : new WebSocketServer({ port });

  if (!server) {
    logEvent("SERVER_START", `WebSocket server started on ${server ? "existing HTTP server" : `port ${port}`}`, { port });
    
  }

  wss.on("connection", (ws) => {
    let currentUserId = null;
    let currentRole = null;
    let isReconnecting = false;

    ws.on("message", async (data) => {
      try {
        const payload = JSON.parse(data.toString());

        switch (payload.type) {
          case "login": {
            const { userId, role } = payload;
            if (!userId || !role) {
              logEvent("LOGIN_ERROR", "Missing userId or role", { payload });
              ws.send(
                JSON.stringify({
                  type: "error",
                  message: "Missing userId or role",
                })
              );
              return;
            }

            isReconnecting = !!getPersistedConnectionState(userId);

            if (!connectionAttempts.has(userId)) {
              connectionAttempts.set(userId, { attempts: 0, lastAttempt: Date.now() });
            }

            if (!handleConnectionError(userId, ws)) {
              ws.send(
                JSON.stringify({
                  type: "error",
                  message: "Too many connection attempts. Please try again later.",
                })
              );
              return;
            }

            currentUserId = userId;
            currentRole = role;
            connectedClients.set(userId, { role, socket: ws });

            if (role === "agent") {
              handleAgentConnection(userId, ws);
            } else if (role === "user") {
              handleUserConnection(userId, ws);
            }
            break;
          }

          case "private_message": {
            const senderId = currentUserId;
            const { message, recipientId } = payload;

            if (!message || typeof message !== 'string') {
              logEvent("INVALID_MESSAGE_PAYLOAD", `Invalid message payload from ${senderId}`, {
                senderId,
                payload
              });
              ws.send(
                JSON.stringify({
                  type: "error",
                  message: "Invalid message format. Please try again.",
                })
              );
              return;
            }

            if (currentRole === "user") {
              const agentId = userToAgent.get(senderId);
              const lowerMessage = message.toLowerCase().trim();
              if (agentId && connectedClients.has(agentId) && 
                  (lowerMessage.includes("exit") || 
                   lowerMessage.includes("disconnect") || 
                   lowerMessage.includes("end chat") || 
                   lowerMessage.includes("stop"))) {
                const agentUsers = agentToUsers.get(agentId);
                if (agentUsers) {
                  agentUsers.delete(senderId);
                }
                userToAgent.delete(senderId);
                const agent = connectedClients.get(agentId);
                agent?.socket?.send(
                  JSON.stringify({
                    type: "user_disconnected",
                    userId: senderId,
                    message: "User has ended the chat"
                  })
                );
                ws.send(
                  JSON.stringify({
                    type: "support_status",
                    agentAvailable: false,
                    message: "You've been disconnected from the agent. You're now chatting with our AI assistant 🤖.",
                    senderRole: "bot",
                    senderName: "AI Assistant"
                  })
                );
                userSession.set(senderId, { stage: "category", data: {} });
                logEvent("USER_EXIT_AGENT", `User ${senderId} exited agent chat`, {
                  userId: senderId,
                  agentId
                });
                return;
              }
              if (agentId && connectedClients.has(agentId)) {
                connectedClients.get(agentId).socket.send(
                  JSON.stringify({
                    type: "private_message",
                    senderId,
                    message,
                    senderRole: "user"
                  })
                );
              } else {
                const botReply = await getBotResponse(senderId, message);
                ws.send(
                  JSON.stringify({
                    type: "private_message",
                    senderId: "bot",
                    message: botReply.message,
                    senderRole: botReply.senderRole,
                    senderName: botReply.senderName
                  })
                );
              }
            }

            if (currentRole === "agent" && recipientId) {
              const assignedAgent = userToAgent.get(recipientId);
              if (assignedAgent !== senderId) {
                logEvent("UNAUTHORIZED_ACCESS", `Agent ${senderId} tried to message unassigned user ${recipientId}`, {
                  agentId: senderId,
                  userId: recipientId,
                  assignedAgent
                });
                ws.send(
                  JSON.stringify({
                    type: "error",
                    message: "You are not assigned to this user",
                  })
                );
                return;
              }
              const user = connectedClients.get(recipientId);
              user?.socket?.send(
                JSON.stringify({
                  type: "private_message",
                  senderId,
                  message,
                  senderRole: "agent",
                  senderName: `Agent ${senderId}`
                })
              );
            }
            break;
          }

          default:
            ws.send(
              JSON.stringify({ type: "error", message: "Unknown message type" })
            );
        }
      } catch (e) {
        logEvent("MESSAGE_ERROR", "Error processing message", {
          error: e.message,
          userId: currentUserId,
          role: currentRole,
          payload: data?.toString()
        });
        console.error("❌ Message error:", e);
        ws.send(
          JSON.stringify({ 
            type: "error", 
            message: "Invalid message format. Please try again." 
          })
        );
      }
    });

    ws.on("close", () => {
      if (!currentUserId) return;
      logEvent("CLIENT_DISCONNECTED", `${currentUserId} (${currentRole}) disconnected`, {
        userId: currentUserId,
        role: currentRole,
        totalClients: connectedClients.size - 1
      });
      connectedClients.delete(currentUserId);
      if (currentRole === "agent") {
        onlineAgents.delete(currentUserId);
        const assignedUsers = agentToUsers.get(currentUserId) || new Set();
        logEvent("AGENT_DISCONNECTED", `Agent ${currentUserId} disconnected`, {
          agentId: currentUserId,
          totalAgents: onlineAgents.size,
          onlineAgents: Array.from(onlineAgents),
          affectedUsers: Array.from(assignedUsers)
        });
        clearPersistedConnectionState(currentUserId);
        for (const userId of assignedUsers) {
          const nextAgent = getNextAgent();
          if (nextAgent) {
            assignUserToAgent(userId, nextAgent);
            persistConnectionState(userId, 'user', nextAgent);
          } else {
            userToAgent.delete(userId);
            logEvent("USER_REASSIGNED", `User ${userId} reassigned to AI after agent disconnect`, {
              userId,
              previousAgent: currentUserId
            });
            const user = connectedClients.get(userId);
            user?.socket?.send(
              JSON.stringify({
                type: "support_status",
                agentAvailable: false,
                message: "Your agent disconnected. You're now chatting with our AI assistant 🤖.",
                senderRole: "bot",
                senderName: "AI Assistant"
              })
            );
            userSession.set(userId, { stage: "category", data: {} });
            persistConnectionState(userId, 'user');
          }
        }
        agentToUsers.delete(currentUserId);
      }
      if (currentRole === "user") {
        const assignedAgent = userToAgent.get(currentUserId);
        if (assignedAgent) {
          const agentUsers = agentToUsers.get(assignedAgent);
          if (agentUsers) {
            agentUsers.delete(currentUserId);
          }
        }
        userToAgent.delete(currentUserId);
        userSession.delete(currentUserId);
        clearPersistedConnectionState(currentUserId);
      }
    });

    ws.on("error", (err) => {
      logEvent("WEBSOCKET_ERROR", `WebSocket error for ${currentUserId}`, {
        userId: currentUserId,
        role: currentRole,
        error: err.message
      });
      console.error(`WebSocket error for ${currentUserId}:`, err);
    });

    if (!isReconnecting) {
      ws.send(
        JSON.stringify({
          type: "welcome",
          message: "Connected to WebSocket server",
        })
      );
    }
  });

  return wss;
}
