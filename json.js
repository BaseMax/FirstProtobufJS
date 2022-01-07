// Import
const fs = require("fs");

// Test Schema
const ali = {};
ali["id"] = 1001;
ali["name"] = "ALI";
ali["salary"] = 50001;
console.log(`Ali name is: ${ali["name"]}`);

// Test Schema
const reza = {};
reza["id"] = 1002;
reza["name"] = "REZA";
reza["salary"] = 50002;
console.log(`Reza name is: ${reza["name"]}`);

// Test Schema
const javad = {};
javad["id"] = 1002;
javad["name"] = "REZA";
javad["salary"] = 50002;
console.log(`Javad name is: ${javad["name"]}`);

// Test Schema
const employees = [];
employees.push(ali);
employees.push(reza);
employees.push(javad);
console.log(`Data: ${employees}`);
const bytes = JSON.stringify(employees);
console.log(`JSON: ${bytes}`);

// Save employees to file
fs.writeFileSync("employees.json", bytes);

// Save employees from a file/or bytes
const load_employees = JSON.parse(bytes);
console.log(`Read data from JSON: ${load_employees.toString()}`);
