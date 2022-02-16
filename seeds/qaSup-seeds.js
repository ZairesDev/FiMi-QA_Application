const { QaSuper } = require("../models");

const QaSuperData = [
  {
    id: 1,
    first_name: "Mike",
    last_name: "Couch",
    site: "San Antonio",
    username: "couch123",
    email: "couch123@gmail.com",
    password: "sauce123",
  },
  {
    id: 2,
    first_name: "Rosa",
    last_name: "Molina",
    site: "San Antonio",
    username: "chair123",
    email: "rosa123@gmail.com",
    password: "rosa123",
  },
];

const seedQaSupStaff = () => QaSuper.bulkCreate(QaSuperData);

module.exports = seedQaSupStaff;