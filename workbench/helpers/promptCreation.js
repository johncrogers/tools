const workspaces = require("../_workspaces");

module.exports.promptCreation = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    `No command or workspace found. Create a new workspace in current directory? (y/n) `,
    function (answer) {
      if (answer === "y") {
        const pwd = process.env.PWD;
        // Create a workspce name from current directory name
        const workspaceName = pwd.split("/").pop();
        workspaces.create(workspaceName, pwd);
        workspaces.open(workspaceName);
      } else {
        console.log("Please try again.");
      }
      rl.close();
    }
  );
};
