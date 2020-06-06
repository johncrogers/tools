const { buildings } = require("./data");

const unitNumbers = buildings.map(({ units }) => {
  return units.map(({ unitNumber }) => {
    return unitNumber;
  });
});

require("fs").writeFileSync("unitNumbers.json", JSON.stringify(unitNumbers));
