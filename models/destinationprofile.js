'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DestinationProfile extends Model {
    static associate(models) {
    }
    static date(time){
      let day = time.toLocaleString()
      console.log(day.slice(0,10));
      return day.slice(0,10)
    }
  };
  DestinationProfile.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ProfileId: DataTypes.INTEGER,
    DestinationId: DataTypes.INTEGER,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DestinationProfile',
  });
  return DestinationProfile;
};