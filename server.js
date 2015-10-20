// load required packages
var express = require('express');
var mongoose =  require('mongoose');
var parser = require('body-parser');
var todos = require('./models/todos');

mongoose.connect('mongodb://localhost:9000/angularTodoApp');

// Express Application Created
var app = exppress();

// Use body-parser package
app.use(parser.urlencoded({
	extended:true
}));

router.get('/',function(req,res) { 
  res.json({message:"you are low on druks"});
 });

var todoRoute = router.route('/alltodos');

// POSTS

todoRoute.post(function(req,res) { 
  //  new instance of todo model
  var todo = new TodoDB();

  todo.name = req.body.name;
  todo.completed = false;

  todo.save(function(err){
	if(err){
		res.send(err);
	}

	res.json({message:"Todo Added! ", data:todo})
  });

 });

// GETS

todoRoute.get(function(req,res) { 
  // use todo model to find todo
  todos.find(function(err,tds){
	if(err){
		res.send(err);
	}
	res.json(tds);
  });
 });


