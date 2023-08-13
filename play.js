// Import required modules
const { connect } = require(`./client`);
const { setupInput } = require(`./input`);
// Inform player of succesful run file, pending connection
console.log("Connecting ...");
// Call connect() to create a connection object
// Pass the returned object from connect into setupInput so inputs can interact with connection
setupInput(connect());
