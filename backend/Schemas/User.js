const mongooseConnection = require("./dbconfig");
const generateUniqueId = require("./getid");

const userSchema = new mongooseConnection.Schema({
  id: {
    type: String,
    unique: true,
    default: generateUniqueId,
    required: true,
  },
  firstName: String,
  lastName: String,
  username: String,
  phone: String,
  email: String,
  DOB: String,
  DOJ: String,
  password: String,
  projectId: String,
  role: {
    type: String,
    default: "normal",
    required: true,
  },
});

// Create User model
const User = mongooseConnection.model("users", userSchema);

module.exports = User;
