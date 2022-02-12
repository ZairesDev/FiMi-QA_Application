const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class EscalationUnit extends Model {}

EscalationUnit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    site: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supervisor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: `EscalationUnitSuper`,
        key: `id`,
      },
    },
    qa_agent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: `QaAgent`,
        key: `id`,
      },
    },
    qa_supervisor: {
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
    modelName: `EscalationUnit`,
  }
);

module.exports = EscalationUnit;
