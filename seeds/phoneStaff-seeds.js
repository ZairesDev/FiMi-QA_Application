const { Employee } = require("../models");

const EmployeeData = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    employee_number: 4444,
    site: "San Antonio",
    start_date: 2019 - 04 - 2019,
    role: "CSR",
    language: "SPN",
    group: "A",
    employee_supervisor_id: 3,
    qa_agent: 3,
  },
];

const seedPhoneStaff = () => Employee.bulkCreate(EmployeeData);

module.exports = seedPhoneStaff;
