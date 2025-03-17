import { createLogger, format, transports } from "winston";
import winston from 'winston';
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, json, printf, colorize } = format;

// Custom formats
const consoleLogFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "warn" : "debug", // Higher level in production
  format: combine(
    winston.format.timestamp(),
    winston.format.json() // Default JSON format for external log aggregation
  ),
  transports: [
    new transports.Console({
      format: process.env.NODE_ENV === "production"
        ? combine(colorize(), consoleLogFormat) // Compact colored logs for production
        : combine(colorize(), consoleLogFormat), // Detailed logs for development
    }),
    new transports.File({
      filename: "logger.log",
      level: "error", // Only log errors to file
    }),
  ],
});

logger.add(
  new DailyRotateFile({
    filename: "logs/application-%DATE%.log", // Log file naming pattern
    datePattern: "YYYY-MM-DD",
    maxSize: "20m", // Maximum log file size
    maxFiles: "14d", // Retain logs for 14 days
    level: "error", // Log level for file rotation
  })
);



export default logger;
