const QaSuper = require(`./QaSuper`);
const QaAgent = require(`./QaAgent`);
const EmployeeSuper = require(`./EmployeeSuper`);
const Employee = require(`./Employee`);
const EmployeeTracker = require(`./EmployeeTracker`);
const Post = require(`./Post`);

// TODO: fix constraint errors in class. Good luck with life bud. :)
// TODO: get drunk later.

Employee.belongsTo(QaAgent, {
  foreignKey: `qa_agent`,
  onDelete: `CASCADE`,
});

QaAgent.hasMany(Employee, {
  foreignKey: `qa_agent`,
});

// QaAgent.belongsToMany(Employee, {
//   through: EmployeeTracker,
//   as: `CSR counts`,
//   foreignKey: `qaAgent_id`,
//   onDelete: `SET NULL`,
// });

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
