// Import net module from node
const net = require("net");
// Import constants
const { IP, PORT, playerName, deathMessage } = require(`./constants`);

const connect = function() {
  // call createConnection method to create connection object based on net library
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // on connection, show client success message and send player name to server
  conn.on("connect", () => {
    process.stdout.write(`Successfully connected to game server.\nWelcome, ${playerName}!\n`);
    conn.write(`Name: ${playerName}`);
  });
  // death handling (idle or loss).
  // show client death message and stop listening for inputs
  conn.on("data", () => {
    process.stdout.write(`${deathMessage}\n`);
    process.exit();
  });
  // return connection object for manipulation elsewhere
  return conn;
};

module.exports = { connect };
