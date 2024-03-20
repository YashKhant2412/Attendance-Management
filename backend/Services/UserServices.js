const User = require("../Schemas/User");
const Cred = require("../Schemas/Crediential");
const generateUniqueId = require("../Schemas/getid");

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
  // const session = await mongoose.connection.startSession();
  // session.startTransaction();

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

    const savedUser = await newUser.save();

    const newCred = new Cred({ userId: savedUser.id, password });
    const savedCred = await newCred.save();
    // console.log(savedCred, "savedCred");

    return {
      status: true,
      message: "user created successfully.",
    };
  } catch (error) {
    // await session.abortTransaction();
    // session.endSession();
    return {
      status: false,
      message: "Error occured.",
      error: error.message,
    };
  }
};

module.exports = { createUser };
