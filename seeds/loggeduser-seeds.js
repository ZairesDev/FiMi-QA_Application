const { loggedUser } = require("../models");

const userData = [
  {
    id: 1,
    username: "tired",
    email: "tired123@gmail.com",
    password: "tired234",
  },
];

const seedusers = () => loggedUser.bulkCreate(userData);

module.exports = seedusers;
