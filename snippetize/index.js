const { readFileSync, writeFileSync } = require("fs");
// TODO: Type
// TODO: Move template out to function
// TODO: Ask if should overwrite
writeFileSync(
  `${__dirname}/output/${process.argv[2]}`,
  [
    `"${process.argv[2]}": {`,
    `    "prefix": "",`,
    `    "body": [`,
    readFileSync(`${process.argv[3]}`, { encoding: "utf8" })
      .split("\n")
      .map(
        line =>
          `"${line
            .split("")
            .map(char => {
              if (char === '"') {
                return "'";
              } else {
                return char;
              }
            })
            .join("")}",`
      )
      .join("\n"),
    `    ],`,
    `    "description": ""`,
    `}`
  ].join("\n")
);
