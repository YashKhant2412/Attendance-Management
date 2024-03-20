const mongooseConnection = require("./dbconfig");
const generateUniqueId = require("./getid");

const userSchema = new mongooseConnection.Schema({
  id: {
    type: String,
    default: generateUniqueId,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  DOB: String,
  DOJ: String,
  projectId: String,
  role: {
    type: String,
    default: "normal",
    required: true,
  },
});

userSchema.index({ firstName: 1, lastName: 1 }, { unique: true });

// Create User model
const User = mongooseConnection.model("users", userSchema);

module.exports = User;
