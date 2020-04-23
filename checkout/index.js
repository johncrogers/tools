const searchTerm = process.argv[2];
require("child_process").execSync(
  `git branch | grep ${searchTerm} | xargs git checkout`
);
// const directoryToRunCommand = process.cwd();
// /*
//   TODO:
//     Helpers:
//       - Display match list:
//         - ??? > Print all matches: `[${matchIndex}] ${match}`
//       - Prompt desired branch: listIndex: string | number
//         - Input Types:
//           - string:
//             - "new" > prompt new search
//             - "q" > quit
//           - number: parseInt
//             - good:
//               > git checkout branches[branchIndex]
//             - bad:
//               - error "Bad input: input"
//               - Display match list
//               - Prompt desired branch
//       - Prompt search: searchTerm: string
//         - Display match list
//         - Prompt desired branch
//     Script:
//       - Prompt search( process.argv[2] )
//  */
// const { createInterface } = require("readline");
// // const { create, open } = require("../_workspaces");
// const { stdin, stdout, env } = process;
// const rl = createInterface({
//   input: stdin,
//   output: stdout,
// });

// rl.question(
//   `No command or workspace found. Create a new workspace in current directory? (y/n) `,
//   (answer) => {
//     if (answer === "y") {
//       const pwd = env.PWD;
//       // // Create a workspce name from current directory name
//       // const workspaceName = pwd.split("/").pop();
//       // create(workspaceName, pwd);
//       // open(workspaceName);
//     } else {
//       console.log("Please try again.");
//     }
//     rl.close();
//   }
// );
