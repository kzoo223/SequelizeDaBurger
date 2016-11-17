var orm = require('../config/orm.js');

var burger = {
  all: function(callback){
    orm.selectAll("burgers" , function(res){
      callback(res);
    });
  },

  create: function(callback){
    orm.insertOne("burgers", cols, vals, function (res){
      callback(res);
    });
  },

  update: function(objColVals, condition, callback){
    orm.updateOne("burgers", objColVals, condition, function (res){
      callback(res);
    });
  },
  delete: function(conditionVal, callback){
    orm.deleteOne('burgers', 'id', conditionVal, function(res){
      callback(res);
    });
  }

};

module.exports = burger;