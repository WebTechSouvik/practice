'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Todo.belongsTo(models.User,{
        foreignKey:"userId"
      })
    }
  }
  Todo.init({
    label: DataTypes.STRING,
    isDone:DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};