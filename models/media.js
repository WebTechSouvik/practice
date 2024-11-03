'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Media.belongsTo(models.User,{
      foreignKey:"userId"
     })
    }
  }
  Media.init({
    fileName: DataTypes.STRING,
     originalName: DataTypes.STRING,
      size: DataTypes.STRING,
       
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};