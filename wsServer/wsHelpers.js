import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  AVAILABLE_CATEGORIES,
  AVAILABLE_LOCATIONS,
  loadAvailableLocations,
  DEFAULT_INTRO_MESSAGE,
  INFO_MESSAGE,
  JOKE_RESPONSE,
} from "./constant.js";
import { fetchServices } from "./services.js";

// State
const connectedClients = new Map();
const onlineAgents = new Set();
const userToAgent = new Map();
const userSession = new Map();
const agentToUsers = new Map();
const connectionAttempts = new Map();
const connectionState = new Map();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const leadsFilePath = path.join(__dirname, "leads.json");

// Logging Helper
function logEvent(type, message, data = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    type,
    message,
    ...data,
  };
  console.log(`[${timestamp}] ${type}: ${message}`, data);
  return logEntry;
}

// Agent Management Helpers
function getNextAgent() {
  const agents = Array.from(onlineAgents);
  if (agents.length === 0) return null;

  let minUsers = Infinity;
  let selectedAgent = null;

  for (const agentId of agents) {
    const userCount = agentToUsers.get(agentId)?.size || 0;
    if (userCount < minUsers) {
      minUsers = userCount;
      selectedAgent = agentId;
    }
  }

  return selectedAgent;
}

function handleAgentConnection(agentId, ws) {
  onlineAgents.add(agentId);
  agentToUsers.set(agentId, new Set());

  logEvent("AGENT_CONNECTED", `Agent ${agentId} connected`, {
    agentId,
    totalAgents: onlineAgents.size,
    onlineAgents: Array.from(onlineAgents),
  });

  persistConnectionState(agentId, "agent", agentId);

  ws.send(
    JSON.stringify({
      type: "agent_status",
      message: `You are now online as Agent ${agentId}`,
      agentId,
      senderRole: "agent",
      senderName: `Agent ${agentId}`,
    })
  );
}

// User Management Helpers
function handleUserConnection(userId, ws) {
  logEvent("USER_CONNECTED", `User ${userId} connected`, {
    userId,
    totalClients: connectedClients.size,
  });

  const persistedState = getPersistedConnectionState(userId);
  const assignedAgent = userToAgent.get(userId) || persistedState?.agentId;
  const isReconnecting = !!persistedState;

  if (assignedAgent && onlineAgents.has(assignedAgent)) {
    restoreAgentConnection(userId, assignedAgent, ws);
    persistConnectionState(userId, "user", assignedAgent);
  } else {
    // Only send initial bot message if not reconnecting
    if (!isReconnecting && !connectedClients.has(userId)) {
      ws.send(
        JSON.stringify({
          type: "support_status",
          agentAvailable: false,
          message: "Namaste, How Can I Help You? ",
          senderRole: "bot",
          senderName: "AI Assistant",
        })
      );
    }
    userSession.set(userId, { stage: "category", data: {} });
    persistConnectionState(userId, "user");
  }
}

function restoreAgentConnection(userId, agentId, ws) {
  logEvent(
    "RESTORE_AGENT_CONNECTION",
    `Restoring user ${userId} connection to agent ${agentId}`
  );
  sendClearChat(ws);
  sendAgentStatus(userId, agentId, ws);
  notifyAgentReconnection(userId, agentId);
}

function startWithBot(userId, ws) {
  ws.send(
    JSON.stringify({
      type: "support_status",
      agentAvailable: false,
      message:
        "You're now chatting with our AI assistant 🤖. Please start by typing a category.",
      senderRole: "bot",
      senderName: "AI Assistant",
    })
  );
  userSession.set(userId, { stage: "category", data: {} });
}

// Message Handling Helpers
function sendClearChat(ws) {
  ws.send(
    JSON.stringify({
      type: "clear_chat",
      message: "Switching to agent chat...",
    })
  );
}

function sendAgentStatus(userId, agentId, ws) {
  ws.send(
    JSON.stringify({
      type: "support_status",
      agentAvailable: true,
      agentId,
      message: `You're now connected to Agent ${agentId}`,
      senderRole: "agent",
      senderName: `Agent ${agentId}`,
      clearPrevious: true,
    })
  );
}

function notifyAgentReconnection(userId, agentId) {
  const agent = connectedClients.get(agentId);
  agent?.socket?.send(
    JSON.stringify({
      type: "user_reconnected",
      userId,
    })
  );
}

// Agent Assignment Helpers
function assignUserToAgent(userId, agentId) {
  if (userToAgent.has(userId)) {
    const currentAgent = userToAgent.get(userId);
    if (currentAgent === agentId) {
      logEvent(
        "USER_ALREADY_ASSIGNED",
        `User ${userId} already assigned to agent ${agentId}`
      );
      return false;
    }
    removeFromPreviousAgent(userId, currentAgent);
  }
  assignToNewAgent(userId, agentId);
  return true;
}

function removeFromPreviousAgent(userId, previousAgent) {
  const previousAgentUsers = agentToUsers.get(previousAgent);
  if (previousAgentUsers) {
    previousAgentUsers.delete(userId);
    logEvent(
      "USER_REMOVED_FROM_AGENT",
      `User ${userId} removed from agent ${previousAgent}`
    );
  }
}

function assignToNewAgent(userId, agentId) {
  userToAgent.set(userId, agentId);
  if (!agentToUsers.has(agentId)) {
    agentToUsers.set(agentId, new Set());
  }
  agentToUsers.get(agentId).add(userId);
  const user = connectedClients.get(userId);
  const agent = connectedClients.get(agentId);
  logEvent("USER_ASSIGNED", `User ${userId} assigned to agent ${agentId}`);
  sendClearChat(user?.socket);
  sendAgentStatus(userId, agentId, user?.socket);
  notifyNewUserConnection(userId, agent?.socket);
}

function notifyNewUserConnection(userId, agentWs) {
  agentWs?.send(
    JSON.stringify({
      type: "new_user_connected",
      userId,
    })
  );
}

// Lead Management Helpers
async function saveLead(userId, contact) {
  try {
    if (!fs.existsSync(leadsFilePath)) {
      await fs.promises.writeFile(leadsFilePath, JSON.stringify([], null, 2));
    }
    const data = await fs.promises.readFile(leadsFilePath, "utf8");
    const leads = JSON.parse(data);
    leads.push({
      userId,
      contact,
      timestamp: new Date().toISOString(),
    });
    await fs.promises.writeFile(leadsFilePath, JSON.stringify(leads, null, 2));
    console.log("✅ Lead saved successfully");
  } catch (err) {
    console.error("❌ Error saving lead:", err);
  }
}

// Bot Response Helpers
async function getBotResponse(userId, msg) {
  if (!msg || typeof msg !== "string") {
    logEvent("INVALID_MESSAGE", `Invalid message received from user ${userId}`);
    return {
      message: "I'm sorry, I couldn't understand that. Please try again.",
      senderRole: "bot",
      senderName: "AI Assistant",
    };
  }
  const lower = msg.toLowerCase().trim();
  const session = userSession.get(userId) || {
    stage: "init",
    intent: null,
    data: {},
  };
  if (lower.includes("agent") || lower.includes("talk to human")) {
    return handleAgentRequest(userId, session);
  }
  if (session.stage === "awaiting_contact") {
    return handleContactCollection(userId, msg, session);
  }
  return handleRegularBotResponse(userId, lower, session);
}

function handleAgentRequest(userId, session) {
  const nextAgent = getNextAgent();
  if (!nextAgent) {
    session.stage = "awaiting_contact";
    userSession.set(userId, session);
    return {
      message:
        "No agents are currently available. Please leave your phone number or email so our team can contact you.",
      senderRole: "bot",
      senderName: "AI Assistant",
    };
  }
  const user = connectedClients.get(userId);
  sendClearChat(user?.socket);
  assignUserToAgent(userId, nextAgent);
  return null;
}

async function handleContactCollection(userId, msg, session) {
  const isEmail = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
  const isPhone = /\b\d{10}\b/;
  if (isEmail.test(msg) || isPhone.test(msg)) {
    await saveLead(userId, msg);
    session.stage = "init";
    session.intent = null;
    session.data = {};
    userSession.set(userId, session);
    return {
      message: "✅ Thank you! Our support team will contact you shortly.",
      senderRole: "bot",
      senderName: "AI Assistant",
    };
  }
  return {
    message: "⚠️ Please provide a valid email or 10-digit phone number.",
    senderRole: "bot",
    senderName: "AI Assistant",
  };
}

async function handleRegularBotResponse(userId, lower, session) {
  if (
    lower.includes("book") ||
    lower.includes("vendor") ||
    AVAILABLE_CATEGORIES.some((cat) => lower.includes(cat))
  ) {
    session.intent = "book_vendor";
  } else if (
    (lower.includes("how") && lower.includes("work")) ||
    (lower.includes("what is") && lower.includes("vendor"))
  ) {
    session.intent = "info";
  } else if (lower.includes("joke") || lower.includes("funny")) {
    session.intent = "joke";
  } else {
    session.intent = session.intent || "unknown";
  }
  if (session.intent === "info") {
    return {
      message: INFO_MESSAGE,
      senderRole: "bot",
      senderName: "AI Assistant",
    };
  }
  if (session.intent === "joke") {
    return {
      message: JOKE_RESPONSE,
      senderRole: "bot",
      senderName: "AI Assistant",
    };
  }
  if (session.intent === "book_vendor") {
    return await handleVendorBooking(userId, lower, session);
  }
  userSession.set(userId, {
    stage: "init",
    intent: null,
    data: {},
  });
  return {
    message: DEFAULT_INTRO_MESSAGE,
    senderRole: "bot",
    senderName: "AI Assistant",
  };
}

async function handleVendorBooking(userId, lower, session) {
  // Ensure locations are loaded
  if (AVAILABLE_LOCATIONS.length === 0) {
    await loadAvailableLocations();
  }

  if (session.stage === "init" || session.stage === "category") {
    const foundCategory = AVAILABLE_CATEGORIES.find((cat) =>
      lower.includes(cat)
    );
    if (foundCategory) {
      session.data.category = foundCategory;
      session.stage = "location";
      userSession.set(userId, session);
      return {
        message: `Got it! Now tell me your location:\n${AVAILABLE_LOCATIONS.map(
          (l) => `• ${l}`
        ).join("\n")}`,
        senderRole: "bot",
        senderName: "AI Assistant",
      };
    }
    session.stage = "category";
    userSession.set(userId, session);
    return {
      message: `What type of vendor are you looking for?\n${AVAILABLE_CATEGORIES.map(
        (c) => `• ${c}`
      ).join("\n")}`,
      senderRole: "bot",
      senderName: "AI Assistant",
    };
  }
  if (session.stage === "location") {
    const foundLocation = AVAILABLE_LOCATIONS.find((loc) =>
      lower.includes(loc)
    );
    if (foundLocation) {
      session.data.location = foundLocation;
      session.stage = "done";
      userSession.set(userId, session);
      try {
        const { category, location } = session.data;
        const result = await fetchServices({
          service_type: category,
          city: location,
        });
        const services = result.ServiceResult || [];
        if (services.length === 0) {
          userSession.set(userId, { stage: "init", intent: null, data: {} });
          return {
            message: `Sorry, no services found for ${category} in ${location}.`,
            senderRole: "bot",
            senderName: "AI Assistant",
          };
        }
        userSession.set(userId, { stage: "init", intent: null, data: {} });
        return {
          message: JSON.stringify(services, null, 2),
          senderRole: "Database",
          senderName: "AI Assistant",
        };
      } catch (e) {
        console.error("Fetch error:", e);
        userSession.set(userId, { stage: "init", intent: null, data: {} });
        return {
          message:
            e.message ||
            "⚠️ Something went wrong while fetching services. Please try again later.",
          senderRole: "bot",
          senderName: "AI Assistant",
        };
      }
    }
    return {
      message: `Please select a valid location:\n${AVAILABLE_LOCATIONS.map(
        (l) => `• ${l}`
      ).join("\n")}`,
      senderRole: "bot",
      senderName: "AI Assistant",
    };
  }
}

// Connection Management Helpers
function handleConnectionError(userId, ws) {
  const attempts = connectionAttempts.get(userId) || {
    attempts: 0,
    lastAttempt: Date.now(),
  };
  if (attempts.attempts === 0) {
    return true;
  }
  attempts.attempts++;
  attempts.lastAttempt = Date.now();
  connectionAttempts.set(userId, attempts);
  logEvent("CONNECTION_ERROR", `Connection error for user ${userId}`);
  if (Date.now() - attempts.lastAttempt > 5 * 60 * 1000) {
    attempts.attempts = 0;
    connectionAttempts.set(userId, attempts);
  }
  if (attempts.attempts > 5) {
    const waitTime = Math.min(1000 * Math.pow(2, attempts.attempts - 5), 30000);
    setTimeout(() => {
      attempts.attempts = 0;
      connectionAttempts.set(userId, attempts);
    }, waitTime);
    return false;
  }
  return true;
}

function persistConnectionState(userId, role, agentId = null) {
  try {
    if (role === "agent") {
      agentId = userId;
    }
    const state = {
      userId,
      role,
      agentId,
      timestamp: Date.now(),
    };
    connectionState.set(userId, state);
    logEvent(
      "CONNECTION_STATE_PERSISTED",
      `Connection state persisted for ${userId}`
    );
  } catch (error) {
    logEvent(
      "PERSISTENCE_ERROR",
      `Failed to persist connection state for ${userId}`
    );
  }
}

function getPersistedConnectionState(userId) {
  try {
    const state = connectionState.get(userId);
    if (state) {
      if (Date.now() - state.timestamp > 24 * 60 * 60 * 1000) {
        connectionState.delete(userId);
        return null;
      }
      return state;
    }
    return null;
  } catch (error) {
    logEvent(
      "PERSISTENCE_ERROR",
      `Failed to get persisted connection state for ${userId}`
    );
    return null;
  }
}

function clearPersistedConnectionState(userId) {
  try {
    connectionState.delete(userId);
    logEvent(
      "CONNECTION_STATE_CLEARED",
      `Connection state cleared for ${userId}`
    );
  } catch (error) {
    logEvent(
      "PERSISTENCE_ERROR",
      `Failed to clear persisted connection state for ${userId}`
    );
  }
}

export {
  connectedClients,
  onlineAgents,
  userToAgent,
  userSession,
  agentToUsers,
  connectionAttempts,
  connectionState,
  leadsFilePath,
  logEvent,
  getNextAgent,
  handleAgentConnection,
  handleUserConnection,
  restoreAgentConnection,
  startWithBot,
  sendClearChat,
  sendAgentStatus,
  notifyAgentReconnection,
  assignUserToAgent,
  removeFromPreviousAgent,
  assignToNewAgent,
  notifyNewUserConnection,
  saveLead,
  getBotResponse,
  handleAgentRequest,
  handleContactCollection,
  handleRegularBotResponse,
  handleVendorBooking,
  handleConnectionError,
  persistConnectionState,
  getPersistedConnectionState,
  clearPersistedConnectionState,
};
