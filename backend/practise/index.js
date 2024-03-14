const dbconnection = require("./config");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/employee", async (req, resp) => {
  await dbconnection.query("select * from employee", (err, res) => {
    resp.send({
      data: res,
    });
  });
});

app.post("/addemp", async (req, resp) => {
  console.log(req.body);
  await dbconnection.query(
    `insert into Employee set ? `,
    req.body,
    (err, res) => {
      console.log(res, err, "response");
      resp.send({
        message: res,
      });
    }
  );
});

app.put("/updatemp/:name", async (req, resp) => {
  let data = [req.body.salary, req.body.location, req.params.name];
  await dbconnection.query(
    `update employee set salary = ?, location = ? where name = ?`,
    data,
    (err, res) => {
      resp.send({
        message: res,
      });
    }
  );
});

app.delete("/deleteemp/:name", async (req, resp) => {
  console.log(req.params.name);
  await dbconnection.query(
    `DELETE FROM employee WHERE Name = '${req.params.name}'`,
    (err, res) => {
      console.log(err);
      resp.send(res);
    }
  );
});

app.listen(8080);
