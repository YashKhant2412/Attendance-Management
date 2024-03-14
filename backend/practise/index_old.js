const express = require("express");
const dbconnect = require("./dbconnection");
var cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/getdata", async (req, resp) => {
  const dbquery = await dbconnect();
  const res = await dbquery.find({}).toArray();
  console.log(res);
  resp.send({
    data: res,
  });
});

app.post("/addData", async (req, resp) => {
  const dbquery = await dbconnect();
  const res = await dbquery.insertOne(req.body);
  resp.send(res);
});

app.listen(3001);
