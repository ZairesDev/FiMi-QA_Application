const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);

class Post extends Model {
  // TODO: create static model to connect QaAgent and QaSuper for comments
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: `post`,
  }
);

module.exports = Post;
