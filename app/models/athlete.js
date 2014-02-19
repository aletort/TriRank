var mongoose = require('mongoose');

var athleteSchema = new mongoose.Schema( {
	licence : String,
	name : String,
	lastName : String,
	results : Array of 
});

module.exports = mongoose.model('Athlete', athleteSchema );