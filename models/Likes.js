const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Like extends Model {}

Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    agent_id: {
      type: DataTypes.INTEGER,
      references: {
        model: `QaAgent`,
        key: `id`,
      },
    },
    supervisor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: `QaSuper`,
        key: `id`,
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: `Posts`,
        key: `id`,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: `like`,
  }
);
