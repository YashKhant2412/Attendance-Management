const Attendance = require("../Schemas/Attendance");

async function createAttendance(userId, date, checkInTime, checkOutTime) {
  try {
    const newAttendance = new Attendance({
      userId,
      date,
      checkInTime,
      checkOutTime,
    });
    const savedAttendance = await newAttendance.save();
    return {
      status: true,
      message: "Attendance saved successfully.",
    };
  } catch (error) {
    return {
      status: false,
      message: "Error occurred!",
      error: error.message,
    };
  }
}

async function getAttendance() {
  try {
    const res = await Attendance.find(
      {},
      { userId: 1, date: 1, checkInTime: 1, checkOutTime: 1, _id: 0 }
    );
    console.log(res);
    return {
      status: true,
      data: res,
      message: "Attendance fetched successfully.",
    };
  } catch (error) {
    return {
      status: false,
      message: "Error occured!",
      error: error.message,
    };
  }
}

module.exports = { createAttendance, getAttendance };
