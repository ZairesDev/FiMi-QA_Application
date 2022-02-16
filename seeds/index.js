const seedPhoneSatff = require("./phoneStaff-seeds");
const seedEmpSup = require("./empSuper-seeds");
const seedPosts = require("./posts.seeds");
const seedQa = require("./qaAgent-seeds");
const seedQaSup = require("./qaSup-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedQaSup();
  console.log("--------------");
  await seedQa();
  console.log("--------------");
  await seedEmpSup();
  console.log("--------------");
  await seedPhoneSatff();
  console.log("--------------");
  await seedPosts();
  console.log("--------------");
  process.exit(0);
};

seedAll();
