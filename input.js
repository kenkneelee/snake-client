// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // when stdin receives user input, run handleUserInput with keypress as param
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function(key) {
  console.log(key);
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = {setupInput};