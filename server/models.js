var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PetExam', {useFindAndModify: false});

var PetSchema = new mongoose.Schema({
  name: {type: String, required: [true], minlength: [3]},
  type: {type: String, required: [true], minlength: [3]},
  description: {type: String, required: [true], minlength: [3]},
  skill1: {type: String},
  skill2: {type: String},
  skill3: {type: String},
}, { timestamps: true });

mongoose.model('Pet', PetSchema);
var Pet = mongoose.model('Pet');

module.exports = Pet;