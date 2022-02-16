const { QaSuper } = require("../models");

const QaSuperData = [
  {
    id: 1,
    first_name: "Mike",
    last_name: "Couch",
    language: "ENG",
    site: "San Antonio",
    username: "couch123",
    email: "couch123@gmail.com",
    password: "cats123",
  },
];

const seedQaSupStaff = () => QaSuper.bulkCreate(QaSuperData);

module.exports = seedQaSupStaff;
