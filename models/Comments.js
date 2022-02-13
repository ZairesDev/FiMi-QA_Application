const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
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
    freezeTableName: true,
    underscored: true,
    modelName: `comment`,
  }
);

module.exports = Comment;
