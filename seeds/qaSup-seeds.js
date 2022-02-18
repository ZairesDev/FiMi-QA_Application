const { QaSuper } = require("../models");

const QaSuperData = [
  {
    id: 1,
    first_name: "Mike",
    last_name: "Couch",
    language: "SPN",
    site: "San Antonio",
    username: "couch123",
    email: "couch123@gmail.com",
    password: "sauce123",
  },
  {
    id: 2,
    first_name: "Rosa",
    last_name: "Molina",
    language: "English",
    site: "San Antonio",
    username: "chair123",
    password: "rosa123",
  },
];

const seedQaSupStaff = () => QaSuper.bulkCreate(QaSuperData);

module.exports = seedQaSupStaff;
