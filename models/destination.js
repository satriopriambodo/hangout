'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Destination.belongsToMany(models.Profile,{through:'DestinationProfile'})
    }
  };
  Destination.init({
    location: DataTypes.STRING,
    price: DataTypes.INTEGER,
    transport: DataTypes.STRING,
    lodging: DataTypes.STRING,
    meals: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destination',
  });
  return Destination;
};