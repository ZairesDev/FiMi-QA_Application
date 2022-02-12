const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EuSuper = require(`./EscalationUnitSuper`);
const Escalation_Unit = require(`./EscalationUnit`);
const CallRepSuper = require(`./CallSpecialistSuper`);
const CallRep = require(`./CallSpecialist`);
const EscalationUnitSuper = require("./EscalationUnitSuper");
const CallSpecialist = require("./CallSpecialist");

CallRep.belongsTo(CallRepSuper, {
  foreignKey: `id`,
});

CallRep.belongsTo(QaAgent, {
  foreignKey: `id`,
});

// WE CAN REMOVE THIS CallRep.belongsTo(QaSuper, {
//   foreignKey: `id`,
// });

Escalation_Unit.belongsTo(EscalationUnitSuper, {
  foreignKey: `id`,
});

Escalation_Unit.belongsTo(QaAgent, {
  foreignKey: `id`,
});

// WE CAN REMOVE THIS Escalation_Unit.belongsTo(QaSuper, {
//   foreignKey: `id`,
// });

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
  Escalation_Unit,
  CallRepSuper,
  CallRep,
};
