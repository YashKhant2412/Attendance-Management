const mongooseConnection = require("./dbconfig");
const generateUniqueId = require("./getid");

const attendanceSchema = new mongooseConnection.Schema(
  {
    userId: String,
    date: String,
    checkInTime: String,
    checkOutTime: String,
  },
  {}
);

// Create User model
const Attendance = mongooseConnection.model("attendance", attendanceSchema);

module.exports = Attendance;
