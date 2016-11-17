"use strict";

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    
    underscored: true,

    freezeTableName: true,

    // define the table's name
    tableName: 'bugers',

    classMethods: {
      associate: function(models) {
        }
    }
  });

  return Burger;
};
