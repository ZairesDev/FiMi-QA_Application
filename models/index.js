const EmployeeTracker = require(`./EmployeeTracker`);
const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EmployeeSuper = require(`./EmployeeSuper`);
const Employee = require(`./Employee`);
const Post = require(`./Post`);

Employee.belongsTo(QaAgent, {
  through: EmployeeTracker,
  as: `CSR Count`,
  foreignKey: `qaAgent_id`,
  onDelete: `CASCADE`,
});

QaAgent.belongsToMany(Employee, {
  through: EmployeeTracker,
  as: `qa_Agent`,
  foreignKey: `qaAgent_id`,
  onDelete: `CASCADE`,
});

Employee.belongsTo(EmployeeSuper, {
  through: EmployeeTracker,
  as: `employee`,
  foreignKey: "employeesuper_id",
  onDelete: "CASCADE",
});

EmployeeSuper.belongsToMany(Employee, {
  through: EmployeeTracker,
  as: `employee_supervisor`,
  foreignKey: "employeesuper_id",
  onDelete: "CASCADE",
});

QaSuper.belongsToMany(QaAgent, {
  through: EmployeeTracker,
  as: `qaSuper_id`,
  foreignKey: `qaSuper_id`,
  onDelete: `CASCADE`,
});

QaSuper.belongsToMany(Post, {
  through: EmployeeTracker,
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(QaSuper, {
  through: EmployeeTracker,
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = {
  QaSuper,
  QaAgent,
  EmployeeSuper,
  Employee,
  EmployeeTracker,
  Post,
};
