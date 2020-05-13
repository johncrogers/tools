const rows = [
  ["name1", "city1", "some other info"],
  ["name2", "city2", "more info"],
];
let csvContent =
  "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n");
var encodedUri = encodeURI(csvContent);

rows.forEach(function (rowArray) {
  let row = rowArray.join(",");
  csvContent += row + "\r\n";
});
