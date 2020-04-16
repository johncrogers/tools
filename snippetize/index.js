const { readFileSync, writeFileSync } = require("fs");
// TODO: Type
// TODO: Move template out to function
// TODO: Ask if should overwrite
const snippetName = process.argv[2];
const inputFilePath = process.argv[3];
const outputDirectory = `${__dirname}/collection/${snippetName}`;

function replaceQuotes(line) {
  return line
    .split("")
    .map((char) => {
      if (char === '"') {
        return "'";
      } else {
        return char;
      }
    })
    .join("");
}

const snippet = [
  `"${snippetName}": {`,
  `    "prefix": "",`,
  `    "body": [`,
  readFileSync(inputFilePath, { encoding: "utf8" })
    .split("\n")
    .map((line) => `"${replaceQuotes(line)}",`)
    .join("\n"),
  `    ],`,
  `    "description": ""`,
  `}`,
].join("\n");

writeFileSync(outputDirectory, snippet);
