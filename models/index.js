const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EmployeeSuper = require(`./EmployeeSuper`);
const Employee = require(`./Employee`);
const EmployeeTracker = require(`./EmployeeTracker`);
const Post = require(`./Posts`);

Employee.belongsToMany(QaAgent, {
  through: EmployeeTracker,
  as: `Employee`,
  foreignKey: `Employee_id`,
  onDELETE: `SET NULL`,
});

EmployeeSuper.belongsToMany(QaAgent, {
  through: EmployeeTracker,
  as: `EmployeeSuper`,
  foreignKey: `employeeSuper_id`,
  onDelete: `SET NULL`,
});

QaAgent.belongsToMany(Employee, {
  through: EmployeeTracker,
  as: `CSR counts`,
  foreignKey: `qaAgent_id`,
  onDelete: `SET NULL`,
});

QaAgent.belongsToMany(EmployeeSuper, {
  through: EmployeeTracker,
  as: `CSR counts`,
  foreignKey: `qaAgent_id`,
  onDelete: `SET NULL`,
});

Post.belongsToMany(QaAgent, {
  through: EmployeeTracker,
  as: `review_comment`,
  foreignKey: `post_id`,
  onDelete: `SET NULL`,
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
