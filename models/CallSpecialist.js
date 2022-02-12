const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Csr extends Model {}

Csr.init(
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
    site: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supervisor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: `CallSpecialistSuper`,
        key: `id`,
      },
    },
    qa_agent_id: {
      type: DataTypes.INTEGER,
      references: {
        model: `QaAgent`,
        key: `id`,
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
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
    qa_agent: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: `QaAgent`,
        key: `id`,
      },
    },
    qa_supervisor: {
      type: DataTypes.STRING,
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
    modelName: `csr`,
  }
);

module.exports = Csr;
