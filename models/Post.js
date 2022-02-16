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
    post_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        lens: [1],
      },
    },
    qaSuper_id: {
      type: DataTypes.INTEGER,
      references: {
        model: `qasuper`,
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
