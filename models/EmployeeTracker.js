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
        model: `Employee`,
        key: `id`,
      },
    },
    employeeSuper_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `EmployeeSuper`,
        key: `id`,
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `Posts`,
        key: `id`,
      },
    },
    qaAgent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `QaAgent`,
        key: `id`,
      },
    },
    qaSuper_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `QaSuper`,
        key: `id`,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: `EmployeeTracker`,
  }
);

module.exports = EmployeeTracker;
