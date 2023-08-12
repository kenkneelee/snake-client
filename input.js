const { moveInputs, messageInputs } = require(`./constants`);

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  // Store the connection object into top scoped variable
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // when stdin receives user input, run handleUserInput with keypress as param
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

// callback function to run for every keypress
const handleUserInput = function (key) {
  // exit process if ctrl+c detected
  if (key === "\u0003") {
    process.exit();
  }
  // loop through all valid movement keypresses
  for (const input in moveInputs) {
    // toLowerCase to account for capslock
    // check if keypress is a valid movement input
    if (key.toLowerCase() === input) {
      // send respective move command to connection object
      connection.write(`Move: ${moveInputs[key.toLowerCase()]}`);
    }
  }
  // loop through all valid message keypresses
  for (const input in messageInputs) {
    // toLowerCase to account for capslock
    // check if keypress is a valid message input
    if (key.toLowerCase() === input) {
      // issue 'Say:' command to server to send respective message
      connection.write(`Say: ${messageInputs[key.toLowerCase()]}`);
    }
  }
};

module.exports = { setupInput };
