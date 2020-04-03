const { execSync } = require("child_process");

const appName = process.argv[2];
const cwd = `./${appName}`;

const generateApp = [`npx create-react-app ${appName} --template typescript`];
const installDependencies = [
  "npm install --save typescript @types/node @types/react @types/react-dom @types/jest antd",
  { cwd }
];
const installCypress = ["npm install cypress --save-dev", { cwd }];
const installStorybook = ["npx -p @storybook/cli sb init", { cwd }];

const commands = [
  generateApp,
  installDependencies,
  installCypress,
  installStorybook
];

commands.forEach(([command, options]) => {
  execSync(`sudo ${command}`, { ...options, stdio: "inherit" });
});
