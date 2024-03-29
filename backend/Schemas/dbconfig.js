const mongoose = require("mongoose");

const connectionString = `mongodb+srv://yashkhant24:rootY@room402.exgigiu.mongodb.net/attendanceManagement?retryWrites=true&w=majority&appName=room402`;

// Establish the connection to MongoDB Atlas
mongoose
  .connect(connectionString, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    // Start your application logic here
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

module.exports = mongoose;
