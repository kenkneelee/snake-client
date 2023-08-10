// Stores the active TCP connection object.
let connection;

// declare object with valid keypresses and their commands
const validInputs = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
};

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
  // loop through all valid keypresses
  for (const input in validInputs) {
    // toLowerCase to account for capslock
    // check if keypress is a valid one
    if (key.toLowerCase() === input) {
      // send respective move command to connection object
      connection.write(validInputs[key.toLowerCase()]);
    }
  }
};

module.exports = { setupInput };
