const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EmployeeSuper = require(`./EmployeeSuper`);
const Employee = require("./Employee");

Employee.belongsTo(EmployeeSuper, {
  foreignKey: `id`,
});

Employee.belongsTo(QaAgent, {
  foreignKey: `id`,
});

// CallRepSuper.hasMany(CallRep, {
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
  EmployeeSuper,
  Employee,
};
