const { readdirSync } = require("fs");

const workspaces = require("./_workspaces.js");
const { verifyInstallation, promptCreation } = require("./helpers");

const task = process.argv[2];
const workspaceName = task.includes(".code-workspace")
  ? task
  : `${task}.code-workspace`;
const workspacesDirectory = `${__dirname}/output`;

try {
  // Attempt task
  workspaces[task]();
  if (task === "create") {
    // Open after new workspace creation
    workspaces.open();
  }
} catch (error) {
  verifyInstallation(workspacesDirectory);
  if (
    error instanceof TypeError &&
    readdirSync(workspacesDirectory).includes(workspaceName)
  ) {
    // Open when using shorthand
    workspaces.open(task);
  } else {
    // Installation is good, workspace doesn't exist, do you want to create it?
    promptCreation();
  }
}
