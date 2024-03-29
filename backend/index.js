const User = require("./Schemas/User");
const Attendance = require("./Schemas/Attendance");
const { createProject, getProjects } = require("./Services/ProjectServices");
const { createUser } = require("./Services/UserServices");
const {
  createAttendance,
  getAttendance,
} = require("./Services/AttendanceService");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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

app.listen(8000);
