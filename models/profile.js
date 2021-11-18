'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.hasOne(models.User)
      Profile.belongsToMany(models.Destination,{through:'DestinationProfile'})
    }
  };
  Profile.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isAlpha: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isAlpha: true
      }
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    } ,
    residence: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }

    } 
  }, {
    sequelize,
    modelName: 'Profile',
  });

  Profile.beforeCreate((instance) => {
    if (!instance.lastName) {
      instance.lastName = instance.firstName
    }

    let first = instance.firstName[0].toUpperCase() + instance.firstName.slice(1)
    let last = instance.lastName[0].toUpperCase() + instance.lastName.slice(1)

    instance.firstName = first
    instance.lastName = last
  });




  return Profile;
};