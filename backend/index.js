const User = require("./Schemas/User");
const Attendance = require("./Schemas/Attendance");
const jwt = require("jsonwebtoken");

const { createProject, getProjects } = require("./Services/ProjectServices");
const { createUser, getUser } = require("./Services/UserServices");
const { loginUser } = require("./Services/LoginServices");
const {
  createAttendance,
  getAttendance,
} = require("./Services/AttendanceService");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const secretKey = "402";

const verigyJWT = (req, resp, next) => {
  const bearerToken = req.headers["authorization"];
  if (bearerToken) {
    const token = bearerToken.split(" ")[1];
    jwt.verify(token, secretKey, (err, authdata) => {
      if (err) {
        resp.send({
          message: "invalid token!",
        });
      } else {
        next();
      }
    });
  } else {
    resp.send({
      message: "JWT is expired!",
    });
  }
};

app.post("/addProject", async (req, resp) => {
  let res = await createProject(
    req.body.projectName,
    req.body.projectStartDate,
    req.body.projectEndDate
  );
  resp.send(res);
});

app.get("/getProjects", async (req, resp) => {
  let res = await getProjects();
  resp.send(res);
});

app.post("/createUser", async (req, resp) => {
  let res = await createUser(
    req?.body?.firstName,
    req?.body?.lastName,
    req?.body?.username,
    req?.body?.phone,
    req?.body?.email,
    req?.body?.DOB,
    req?.body?.DOJ,
    req?.body?.projectId,
    req?.body?.role,
    req?.body?.password
  );
  resp.send(res);
});

app.post("/createAttendance", async (req, resp) => {
  let res = await createAttendance(
    req.body.userId,
    req.body.date,
    req.body.checkInTime,
    req.body.checkOutTime
  );
  resp.send(res);
});

app.get("/getAttendance", async (req, resp) => {
  let res = await getAttendance();
  resp.send(res);
});

app.get("/getUser", verigyJWT, async (req, resp) => {
  let res = await getUser(req.body.username);
  resp.send(res);
});

app.post("/login", async (req, resp) => {
  const res = await loginUser(req.body.userId, req.body.password);
  if (res.status) {
    let payload = {
      userId: req.body.userId,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "40s" });
    res.token = token;
  }
  resp.send(res);
});

app.listen(8000);
