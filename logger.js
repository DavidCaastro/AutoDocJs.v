/**
 * Logs a message to the console with a timestamp.
 * @param {string} type - The type of log (INFO, ERROR, SUCCESS, etc.).
 * @param {string} message - The log message.
 */
export function logMessage(type, message) {
  const timestamp = new Date().toISOString();
  console.log(`[${type}] ${timestamp} - ${message}`);
}