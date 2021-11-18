'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Profile);
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:true,
        notContains: ' '
      }

    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:true,
        len: [6,12]
      }

    },
    ProfileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(instance => {
    const bcrypt = require('bcryptjs')
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(instance.password, salt)

    instance.password = hash;
  });

  return User;
};