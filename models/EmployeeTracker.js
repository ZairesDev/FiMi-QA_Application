const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class EmployeeTracker extends Model {}

EmployeeTracker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `employee`,
        key: `id`,
      },
    },
    employeeSuper_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `employeesuper`,
        key: `id`,
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: `post`,
        key: `id`,
      },
    },
    qaAgent_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: `qaagent`,
        key: `id`,
      },
    },
    qaSuper_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: `qasuper`,
        key: `id`,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: `employeetracker`,
  }
);

module.exports = EmployeeTracker;
