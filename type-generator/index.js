const JsonToTS = require("json-to-ts");
const { readdirSync, writeFileSync } = require("fs");

function generateTypesFromJSONArchive(startPath) {
  function recurse(path) {
    readdirSync(path).forEach((item) => {
      const itemPath = `${path}/${item}`;

      if (!item.includes(".")) {
        recurse(itemPath);
      } else {
        if (item.includes(".json")) {
          writeFileSync(
            `${path}/${item.split(".")[0]}.ts`,
            JsonToTS(require(itemPath))
              .map((typeInfo, index) =>
                index !== 0 ? `\n\nexport ${typeInfo}` : `export ${typeInfo}`
              )
              .join("")
          );
        }
      }
    });
  }

  recurse(startPath);
}

generateTypesFromJSONArchive(process.argv[2]);
// generateTypesFromJSONArchive(`${__dirname}/target`);
