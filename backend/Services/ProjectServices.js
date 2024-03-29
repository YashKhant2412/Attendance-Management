const Project = require("../Schemas/Project");

async function createProject(
  projectName,
  projectStartDate,
  projectEndDate,
  managerUserId
) {
  try {
    // Check if project name already exists
    const existingProject = await Project.findOne({ projectName });
    if (existingProject) {
      return {
        status: false,
        message: "Project name already exists.",
      };
    }

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

async function getProjects() {
  try {
    const res = await Project.find({}, { projectName: 1, id: 1, _id: 0 });
    console.log(res);
    return {
      status: true,
      data: res,
      message: "Project fetched successfully.",
    };
  } catch (error) {
    return {
      status: false,
      message: "Error occured!",
      error: error.message,
    };
  }
}

module.exports = { createProject, getProjects };
