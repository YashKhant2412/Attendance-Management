const User = require("../Schemas/User");
const Cred = require("../Schemas/Crediential");
const generateUniqueId = require("../Schemas/getid");
const mongoose = require("../Schemas/dbconfig");

const createUser = async (
  firstName,
  lastName,
  username,
  phone,
  email,
  DOB,
  DOJ,
  projectId,
  role,
  password
) => {
  const session = await mongoose.connection.startSession();
  session.startTransaction();

  try {
    const newUser = new User({
      firstName,
      lastName,
      username,
      phone,
      email,
      DOB,
      DOJ,
      projectId,
      role,
    });
    // console.log(newUser);

    const savedUser = await newUser.save({ session });
    console.log({ userId: savedUser.id, password }, "cred");
    const newCred = new Cred({ userId: savedUser.id, password });
    const savedCred = await newCred.save({ session });
    // console.log(savedCred, "savedCred");
    await session.commitTransaction();

    return {
      status: true,
      message: "user created successfully.",
    };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    return {
      status: false,
      message: "Error occured.",
      error: error.message,
    };
  } finally {
    session.endSession();
  }
};

const getUser = async (username) => {
  try {
    const res = await User.find({ username });
    console.log(res);
    if (res.length > 0) {
      return res[0];
    }
    return {
      message: "something went wrong!",
    };
  } catch (err) {
    return {
      status: false,
      message: "Error occured.",
      error: error.message,
    };
  }
};

module.exports = { createUser, getUser };
