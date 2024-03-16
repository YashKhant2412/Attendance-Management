const User = require("./Schemas/User");
const Attendance = require("./Schemas/Attendance");
const { createProject } = require("./Services/ProjectServices");
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

app.listen(8080);
