const seedPhoneSatff = require("./phoneStaff-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedPhoneSatff();
  console.log("--------------");
  process.exit(0);
};

seedAll();
