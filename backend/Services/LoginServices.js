const User = require("../Schemas/User");
const Cred = require("../Schemas/Crediential");

const loginUser = async (userid, cred) => {
  try {
    let isEmail = userid.search("@");
    const res =
      isEmail == -1
        ? await User.findOne({ username: userid })
        : await User.findOne({ email: userid });
    if (res) {
      const userId = res.id;
      console.log(userId);
      const pass = await Cred.findOne(
        { userId: userId },
        { password: 1, _id: 0 }
      );
      console.log(pass);
      const auth = pass.password == cred;
      return auth
        ? {
            status: true,
          }
        : {
            status: false,
          };
    } else {
      return {
        status: false,
        message: `user with given ${
          isEmail == -1 ? "username" : "email"
        } not found`,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      status: false,
      error: "error occured.",
    };
  }
};

module.exports = { loginUser };
