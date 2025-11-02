// modules/dateModule.js
function getCurrentDate() {
  const today = new Date();
  return today.toDateString();
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

module.exports = { getCurrentDate, getCurrentTime };
