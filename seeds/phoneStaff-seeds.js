const { CallRep } = require("../models");

const CallSpecialistData = [
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
    supervisor_id: 1,
    qa_agent: 2,
  },
];

const seedPhoneSatff = () => CallRep.bulkCreate(CallSpecialistData);

module.exports = seedPhoneSatff;
