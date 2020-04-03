// require("child_process").execSync(
//   `grep 'FormField' /Users/johnrogers/code/web-application/src/views -rl`,
//   {
//     stdio: "inherit"
//   }
// );

const routeData = require("./routeData.json");
const duplicatePointers = Object.keys(routeData).filter(key => {
  console.log(key);
  return routeData[key].length > 1;
});
const output = duplicatePointers;
console.log(output);
