// ---client.js---
// store connection information
const IP = "localhost";
const PORT = "50541";
// store user information
const playerName = "KEN";
// store customizable death message
const deathMessage = "u ded";


// ---input.js---
// declare object with valid move keypresses and their direction
const moveInputs = {
  w: "up",
  a: "left",
  s: "down",
  d: "right",
};
// declare object with message output keypresses and their messages
const messageInputs = {
  q: "Gnarly!",
  e: "Nice!",
  f: "Funny!",
  g: "Good game!",
  h: "Hisssssss",
};


module.exports = {
  IP,
  PORT,
  playerName,
  deathMessage,
  moveInputs,
  messageInputs,
};
