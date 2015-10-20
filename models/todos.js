var mongoose = require('mongoose');

// define Schema
var todoSchema = new mongoose.Schema({
	todo: String,
	completed: Boolean,
	dateAdded: {type:Date, Default:Date.now}
});

module.exports = mongoose.model('TodoDB', todoSchema);