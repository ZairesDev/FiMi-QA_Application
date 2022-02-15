const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EmployeeSuper = require(`./EmployeeSuper`);
const Employee = require(`./Employee`);
const EmployeeTracker = require(`./EmployeeTracker`);

QaAgent.hasMany(Employee, {
  through: EmployeeTracker,
  as: `CSR counts`,
  foreignKey: `id`,
  onDelete: `SET NULL`,
});

QaAgent.hasMany(EmployeeSuper, {
  through: EmployeeTracker,
  as: `CSR counts`,
  foreignKey: `id`,
  onDelete: `SET NULL`,
});

QaSuper.hasMany(QaAgent, {
  through: EmployeeTracker,
  as: `Agents`,
  foreignKey: `id`,
  onDelete: `SET NULL`,
});

module.exports = {
  QaSuper,
  QaAgent,
  EmployeeSuper,
  Employee,
  EmployeeTracker,
};
