const { QaAgent } = require("../models");

const QaData = [
  {
    id: 1,
    first_name: "Jolene",
    last_name: "Marquez",
    agent_number: 1234,
    site: "San Antonio",
    language: "SPN",
    qa_supervisor: 1,
    username: "jojo123",
    email: "123@gmail.com",
    password: "jojorules",
  },
  {
    id: 2,
    first_name: "Sam",
    last_name: "Jones",
    agent_number: 4894,
    site: "McAllen",
    language: "ENG",
    qa_supervisor: 2,
    username: "sam123",
    email: "sam123@gmail.com",
    password: "cats123",
  },
  {
    id: 3,
    first_name: "Cat",
    last_name: "Valencia",
    agent_number: 8888,
    site: "Tyler",
    language: "ENG",
    qa_supervisor: 3,
    username: "cat123",
    email: "cat123@gmail.com",
    password: "soup1234",
  },
];
const seedQa = () => QaAgent.bulkCreate(QaData);

module.exports = seedQa;
