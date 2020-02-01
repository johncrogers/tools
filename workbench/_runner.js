const { readdirSync, existsSync, mkdirSync } = require("fs");
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
  if (!existsSync(`${__dirname}/${outputFolder}`)) {
    console.log(
      "There is no output folder. It appears that this is your first run of wb. Creating an output folder..."
    );
    mkdirSync(`${__dirname}/${outputFolder}`);
    if (existsSync(`${__dirname}/${outputFolder}`)) {
      console.log("Success!");
    } else {
      console.log(
        "It looks like there is a problem with your wb installation."
      );
      process.exit(1);
    }
  }
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
