const Project = require("../Schemas/Project");

async function createProject(
  projectName,
  projectStartDate,
  projectEndDate,
  managerUserId
) {
  try {
    const newProject = new Project({
      projectName,
      projectStartDate,
      projectEndDate,
      managerUserId,
    });
    const savedProj = await newProject.save();
    return {
      status: true,
      message: "Project saved successfully.",
    };
  } catch (error) {
    return {
      status: false,
      message: "Error occurred!",
      error: error.message,
    };
  }
}

module.exports = { createProject };
