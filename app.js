const math = require('./modules/mathModule');
const string = require('./modules/stringModule');
const date = require('./modules/dateModule');
const logger = require('./modules/loggerModule');

logger.log("Application started");

// Use math module
const sum = math.add(10, 5);
const product = math.multiply(4, 3);
logger.log(`Sum: ${sum}, Product: ${product}`);

// Use string module
const word = "nodejs";
logger.log(`Capitalized: ${string.capitalize(word)}, Reversed: ${string.reverse(word)}`);

// Use date module
logger.log(`Today is ${date.getCurrentDate()} and the time is ${date.getCurrentTime()}`);

logger.log("Application finished");
