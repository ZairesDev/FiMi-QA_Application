const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EmployeeSuper = require(`./EmployeeSuper`);
const Employee = require(`./Employee`);
const EmployeeTracker = require(`./EmployeeTracker`);
const Post = require(`./Post`);

// TODO: fix constraint errors in office hours

Employee.belongsTo(QaAgent, {
  foreignKey: `id`,
});

QaAgent.hasMany(Employee, {
  foreignKey: `id`,
});

QaAgent.belongsToMany(Employee, {
  through: EmployeeTracker,
  as: `CSR counts`,
  foreignKey: `qaAgent_id`,
  onDelete: `SET NULL`,
});

Post.belongsTo(QaSuper, {
  foreignKey: `id`,
});

QaSuper.hasMany(Post, {
  foreignKey: `id`,
});

QaSuper.belongsToMany(QaAgent, {
  through: EmployeeTracker,
  as: `Agents`,
  foreignKey: `qaSuper_id`,
  onDelete: `SET NULL`,
});

module.exports = {
  QaSuper,
  QaAgent,
  EmployeeSuper,
  Employee,
  EmployeeTracker,
  Post,
};
