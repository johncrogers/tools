const searchTerm = process.argv[2];
require("child_process").execSync(
  `git branch | grep ${searchTerm} | xargs git checkout`
);
