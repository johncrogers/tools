const { existsSync, mkdirSync } = require("fs");

module.exports.verifyInstallation = (workspacesDirectory) => {
  if (!existsSync(workspacesDirectory)) {
    console.log(
      "There is no output folder. It appears that this is your first run of wb. Creating an output folder..."
    );
    mkdirSync(workspacesDirectory);
    if (existsSync(workspacesDirectory)) {
      console.log("Success!");
    } else {
      console.log(
        "It looks like there is a problem with your wb installation."
      );
      process.exit(1);
    }
  }
};
