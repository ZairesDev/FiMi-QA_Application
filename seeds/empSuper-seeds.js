const { EmployeeSuper } = require("../models");

const supData = [
  {
    id: 1,
    first_name: "Thalia",
    last_name: "Flores",
    site: "San Antonio",
    language: "SPN",
    group: "A",
  },
  {
    id: 2,
    first_name: "Selena",
    last_name: "Quintana",
    site: "McAllen",
    language: "SPN",
    group: "B",
  },
  {
    id: 3,
    first_name: "Doja",
    last_name: "Cat",
    site: "Tyler",
    language: "ENG",
    group: "A",
  },
];
const seedEmpSup = () => EmployeeSuper.bulkCreate(supData);

module.exports = seedEmpSup;
