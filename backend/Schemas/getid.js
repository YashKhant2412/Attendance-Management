// getid.js
const generateUniqueId = () => Math.random().toString(36).substr(2, 6); // Function to generate unique ID

module.exports = generateUniqueId;
