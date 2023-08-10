const net = require("net");
const { IP, PORT, playerName, deathMessage } = require(`./constants`);

const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    process.stdout.write("Successfully connected to game server\n");
    conn.write(`Name: ${playerName}`);
  });
  // Death handling (idle or loss)
  conn.on("data", () => {
    process.stdout.write(`${deathMessage}\n`);
    process.exit();
  });
  return conn;
};

module.exports = { connect };
