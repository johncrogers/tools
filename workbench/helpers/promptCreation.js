module.exports.promptCreation = () => {
  const { createInterface } = require("readline");
  const { create, open } = require("../_workspaces");
  const { stdin, stdout, env } = process;
  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  rl.question(
    `No command or workspace found. Create a new workspace in current directory? (y/n) `,
    (answer) => {
      if (answer === "y") {
        const pwd = env.PWD;
        // Create a workspce name from current directory name
        const workspaceName = pwd.split("/").pop();
        create(workspaceName, pwd);
        open(workspaceName);
      } else {
        console.log("Please try again.");
      }
      rl.close();
    }
  );
};
