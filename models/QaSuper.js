const { Model, DataTypes } = require(`sequelize`);
const sequelize = require(`../config/connection`);
const bcrypt = require(`bcrypt`);

class QaSuper extends Model {
  checkPassword(loginPw) {
    return loginPw, this.password;
  }
}

QaSuper.init(
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
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // this means the password must be at least five characters long
        len: [5],
      },
    },
  },
  {
    // hooks: {
    //   // set up beforeCreate lifecycle 'hook' functionality
    //   async beforeCreate(newQaSuperData) {
    //     newQaSuperData.password = await bcrypt.hash(
    //       newQaSuperData.password,
    //       10
    //     );
    //     return newQaSuperData;
    //   },
    //   // set up beforeUpdate lifecycle 'hook' functionality
    //   async beforeUpdate(updatedQaSuperData) {
    //     updatedQaSuperData.password = await bcrypt.hash(
    //       updatedQaSuperData.password,
    //       10
    //     );
    //     return updatedQaSuperData;
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: `qasuper`,
  }
);

module.exports = QaSuper;
