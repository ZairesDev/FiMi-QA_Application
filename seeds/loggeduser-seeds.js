const { loggedUser } = require("../models");

const userData = [
  {
    id: 1,
    username: "tired",
    password: "tired234",
  },
];

const seedusers = () => loggedUser.bulkCreate(userData);

module.exports = seedusers;
