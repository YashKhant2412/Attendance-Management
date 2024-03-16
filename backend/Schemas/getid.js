function generateUniqueId() {
  return Math.random().toString(36).substr(2, 6); // You can customize this as needed
}

module.exports = generateUniqueId();
