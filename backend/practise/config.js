const mysql = require("mysql");

const connection = mysql.createConnection({
  // host: "127.0.0.1",
  // port: 33??06,
  user: "root",
  password: "root",
  //   ssl: "TLS_AES_128_GCM_SHA_256",

  database: "learningnode", // Use a built-in database like "mysql" for the initial connection
});

module.exports = connection;
