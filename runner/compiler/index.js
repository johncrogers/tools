var { watch, existsSync } = require("fs");
const { execSync } = require("child_process");

const indexPath = `src/index.ts`;
console.group(`Watching: ${indexPath}`);
if (!existsSync(indexPath)) {
  console.log("Could not find source...");
}
console.log("Starting watcher...");
watch(indexPath, { recursive: true }, function(event, filename) {
  try {
    console.log("Attempting to build...");
    execSync(
      `npx tsc src/index.ts --outFile ./output/index.js --module system`,
      {
        cwd: process.cwd(),
        stdio: [0, 1, 2]
      }
    );
    console.log("New build successful!");
  } catch (error) {
    console.error(error);
    console.log("Waiting for file changes to retry...");
  }
});
