const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class CallSpecialistSuper extends Model {}

CallSpecialistSuper.init(
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
    site: {
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

    //WE CAN REMOVE THIS
    // qa_agent: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: `QaAgent`,
    //     key: `id`,
    //   },
    // },

    //WE CAN REMOE THIS
    // qa_supervisor: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: `QaSuper`,
    //     key: `id`,
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: `CallSpecialistSuper`,
  }
);

module.exports = CallSpecialistSuper;
