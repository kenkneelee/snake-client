const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.2.34", // IP address here,
    port: "50541", // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", () => {
    console.log("you ded cuz you idled");
    process.exit();
  })
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: KEN");
    // setTimeout(()=> {conn.write("Move: up"), 50})
    // setInterval(()=> {conn.write("Move: up")}, 50);
  });
  return conn;
};

module.exports = {connect};
