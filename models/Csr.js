const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Csr extends Model {}

Csr.init({
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
  start_date: {},
});
