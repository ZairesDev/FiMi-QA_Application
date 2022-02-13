const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EuSuper = require(`./EscalationUnitSuper`);
const CallRepSuper = require(`./CallSpecialistSuper`);
const Employee = require("./Employee");

Employee.belongsTo(CallRepSuper, {
  foreignKey: `id`,
});

Employee.belongsTo(EuSuper, {
  foreignKey: `id`,
});

Employee.belongsTo(QaAgent, {
  foreignKey: `id`,
});

// EmployeeSuper.hasMany(Employee, {
//   foreignKey: `id`,
// });

// EmployeeSuper.belongsToMany(QaAgent, {
//   foreignKey: `id`,
// });

// EmployeeSuper.belongsToMany(QaSuper, {
//   foreignKey: `id`,
// });

// QaAgent.hasMany(Employee, {
//   through: Employee,
//   as: `CSR counts`,
//   foreignKey: `id`,
// });

// QaAgent.hasMany(EmployeeSuper, {
//   through: Employee,
//   as: `CSR counts`,
//   foreignKey: `id`,
// });

// QaSuper.hasMany(QaAgent, {
//   through: QaAgent,
//   foreignKey: `id`,
// });

module.exports = {
  QaSuper,
  QaAgent,
  EuSuper,
  CallRepSuper,
  Employee,
};
