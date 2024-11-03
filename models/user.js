"use strict";
const bcrypt = require("bcrypt");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    checkPassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
    static associate(models) {
      User.hasMany(models.Todo,{
        foreignKey:"userId"
      });

      User.hasMany(models.Media,{
        foreignKey:"userId"
      })
      User.hasMany(models.Otp,{
        foreignKey:"userId"
      })
    }


  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    },
  );

  User.beforeCreate((user, _) => {
    user.password = bcrypt.hashSync(user.password, 10);
  });

  return User;
};
