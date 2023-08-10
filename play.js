const { connect } = require(`./client`);
const { setupInput } = require(`./input`);

console.log("Connecting ...");
// Pass the returned object from connect into setupInput so it can interact
setupInput(connect());
