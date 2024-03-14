const mongo = require("mongodb");

const client = new mongo.MongoClient("mongodb://localhost:27017");

const dbconnect = async () => {
  const connect = await client.connect();
  const db = connect.db("mongo1301");
  const result = db.collection("phase1");
  return result;
};

module.exports = dbconnect;
