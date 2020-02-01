const { readdirSync } = require("fs");
const readline = require("readline");
const workspaces = require("./_workspaces.js");

let task = process.argv[2];
const outputFolder = "output";

function promptCreation() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question(
    `No command or workspace found. Create a new workspace in current directory? (y/n) `,
    function(answer) {
      if (answer === "y") {
        const pwd = process.env.PWD;
        const workspaceName = pwd.split("/").pop();
        workspaces.create(workspaceName, pwd);
        workspaces.open(workspaceName);
      } else {
        console.log("Please try again.");
      }
      rl.close();
    }
  );
}

try {
  workspaces[task]();
  if (task === "create") {
    workspaces.open();
  }
} catch (error) {
  if (
    error instanceof TypeError &&
    readdirSync(`${__dirname}/${outputFolder}`).includes(
      `${task}.code-workspace`
    )
  ) {
    workspaces.open(task);
  } else {
    promptCreation();
  }
}
