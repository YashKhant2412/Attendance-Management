const mongooseConnection = require("./dbconfig");
const generateUniqueId = require("./getid");

const projectScheama = new mongooseConnection.Schema({
  id: {
    type: String,
    unique: true,
    default: generateUniqueId,
    required: true,
  },
  projectName: {
    type: String,
    unique: true,
    required: true,
  },
  projectStartDate: String,
  projectEndDate: String,
  managerUserId: String,
});

// Create User model
const Project = mongooseConnection.model("project", projectScheama);

module.exports = Project;
