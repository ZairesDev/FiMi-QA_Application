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
    EmployeeSuper: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `EmployeeSuper`,
        key: `id`,
      },
    },
    QaAgent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `QaAgent`,
        key: `id`,
      },
    },
    QaSuper: {
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
