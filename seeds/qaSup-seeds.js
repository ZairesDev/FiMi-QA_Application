const { QaSuper } = require("../models");

const QaSuperData = [
    {
      id: 1,
      first_name: "Mike",
      last_name: "Couch",
      "qa_agent",
      "language",
      "site",
      "username",
      "email",
      "password",

    },
];

const seedQaSupStaff = () => QaSuper.bulkCreate(QaSuperData);

module.exports = seedQaSupStaff;
