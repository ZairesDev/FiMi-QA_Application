const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EuSuper = require(`./EscalationUnitSuper`);
const Escalation_Unit = require(`./EscalationUnit`);
const CallRepSuper = require(`./CallSpecialistSuper`);
const CallRep = require(`./CallSpecialist`);
const EscalationUnitSuper = require("./EscalationUnitSuper");
const CallSpecialist = require("./CallSpecialist");

// TODO: figure out if one CSR Super has many CSR's under them, or only one
CallRep.belongsToMany(CallRepSuper, {
  foreignKey: `id`,
});

CallRep.belongsTo(QaAgent, {
  // might need to change this to qa_agent_id
  foreignKey: `id`,
});

CallRep.belongsTo(QaSuper, {
  foreignKey: `id`,
});

Escalation_Unit.belongsToMany(EscalationUnitSuper, {
  foreignKey: `id`,
});

Escalation_Unit.belongsTo(QaAgent, {
  foreignKey: `id`,
});

Escalation_Unit.belongsTo(QaSuper, {
  foreignKey: `id`,
});

CallRepSuper.hasMany(CallRep, {
  foreignKey: `id`,
});

CallRepSuper.belongsToMany(QaAgent, {
  foreignKey: `id`,
});

CallRepSuper.belongsToMany(QaSuper, {
  foreignKey: `id`,
});

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

CallRepSuper.module.exports = {
  QaSuper,
  QaAgent,
  EuSuper,
  Escalation_Unit,
  CallRepSuper,
  CallRep,
};
