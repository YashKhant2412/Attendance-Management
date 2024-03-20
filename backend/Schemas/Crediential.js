const mongooseConnection = require("./dbconfig");

const credientialSchema = new mongooseConnection.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
});

// Create User model
const Cred = mongooseConnection.model("credientials", credientialSchema);

module.exports = Cred;
