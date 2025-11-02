// modules/loggerModule.js
function log(message) {
  console.log(`[LOG] ${new Date().toISOString()} - ${message}`);
}

module.exports = { log };
