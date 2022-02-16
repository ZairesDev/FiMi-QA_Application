const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Employee extends Model {}

Employee.init(
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
    employee_supervisor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: `employeesuper`,
        key: `id`,
      },
    },
    qa_agent: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: `qaagent`,
        key: `id`,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: `employee`,
  }
);

module.exports = Employee;
