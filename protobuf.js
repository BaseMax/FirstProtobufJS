// Import
const fs = require("fs");
const Schema = require("./employees_pb");

// Test Schema
const ali = new Schema.Employee();
ali.setId(1001);
ali.setName("ALI");
ali.setSalary(50001);
console.log(`Ali name is: ${ali.getName()}`);

// Test Schema
const reza = new Schema.Employee();
reza.setId(1002);
reza.setName("REZA");
reza.setSalary(50002);
console.log(`Reza name is: ${reza.getName()}`);

// Test Schema
const javad = new Schema.Employee();
javad.setId(1003);
javad.setName("JAVAD");
javad.setSalary(50003);
console.log(`Javad name is: ${javad.getName()}`);

// Test Schema
const employees = new Schema.Employees();
employees.addEmployees(ali);
employees.addEmployees(reza);
employees.addEmployees(javad);
const bytes = employees.serializeBinary();
console.log(`Data: ${employees}`);
console.log(`Binary: ${bytes}`);

// Save employees to file
fs.writeFileSync("employees.bin", bytes);

// Save employees from a file/or bytes
const load_employees = Schema.Employees.deserializeBinary(bytes);
console.log(`Read data from bytes: ${load_employees.toString()}`);
