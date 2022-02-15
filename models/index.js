const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EmployeeSuper = require(`./EmployeeSuper`);
const Employee = require("./Employee");

// EmployeeSuper.hasMany(Employee, {
//   foreignKey: `id`,
// });

// QaAgent.hasMany(Employee, {
//   foreignKey: `id`,
// });

// CallRepSuper.hasMany(CallRep, {
//   foreignKey: `id`,
// });

QaAgent.hasMany(Employee, {
  through: Employee,
  as: `CSR counts`,
  foreignKey: `id`,
});

QaAgent.hasMany(EmployeeSuper, {
  through: EmployeeSuper,
  as: `CSR counts`,
  foreignKey: `id`,
});

QaSuper.hasMany(QaAgent, {
  through: QaAgent,
  foreignKey: `id`,
});

module.exports = {
  QaSuper,
  QaAgent,
  EmployeeSuper,
  Employee,
};
