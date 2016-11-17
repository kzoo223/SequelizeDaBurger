var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//default redirects to /burgers
router.get('/', function (req, res){
  res.redirect('/burgers');
});

//fetches burger data and renders on index
router.get('/burgers', function (req, res){
  burger.all(function (data){
    var object = {burgers: data};
    console.log(object);
    res.render('index', object);
  });
});

//creates new burger
router.post('/burgers/create', function (req, res){
  burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function (){
    res.redirect('/burgers')
  });
});

//updates burger
router.put('/burgers/update/:id', function (req, res){
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.update({ devoured: req.body.devoured}, condition, function(){
    res.redirect('/burgers');
  });
});

router.delete('/burgers/delete/:id', function (req, res){
  var condition = 'id = ' + req.params.id;

  burger.delete(condition, function () {
    res.redirect('/burgers');
  });
});

module.exports = router;
