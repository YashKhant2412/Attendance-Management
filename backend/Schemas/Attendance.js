const mongooseConnection = require("./dbconfig");
const generateUniqueId = require("./getid");

const attendanceSchema = new mongooseConnection.Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    date: {
      type: String,
      unique: true,
      required: true,
    },
    checkInTime: String,
    checkOutTime: String,
  },
  {}
);

// Create User model
const Attendance = mongooseConnection.model("attendance", attendanceSchema);

module.exports = Attendance;
