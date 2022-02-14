const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EuSuper = require(`./EscalationUnitSuper`);
const CallRepSuper = require(`./CallSpecialistSuper`);
const Employee = require("./Employee");

Employee.belongsTo(CallRepSuper, {
  foreignKey: `id`,
});

Employee.belongsTo(QaAgent, {
  foreignKey: `id`,
});

// CallRepSuper.hasMany(CallRep, {
//   foreignKey: `id`,
// });

// CallRepSuper.belongsToMany(QaAgent, {
//   foreignKey: `id`,
// });

// CallRepSuper.belongsToMany(QaSuper, {
//   foreignKey: `id`,
// });

// QaAgent.hasMany(CallRep, {
//   through: CallSpecialist,
//   as: `CSR counts`,
//   foreignKey: `id`,
// });

// QaAgent.hasMany(CallRepSuper, {
//   through: CallRep,
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
