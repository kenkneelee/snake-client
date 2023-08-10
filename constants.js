// ---client.js---
const IP = "192.168.2.34";
const PORT = "50541";
const playerName = "KEN";
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
