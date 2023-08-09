const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.2.34", // IP address here,
    port: "50541", // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: KEN")
  });
  return conn;
};

module.exports = connect;
