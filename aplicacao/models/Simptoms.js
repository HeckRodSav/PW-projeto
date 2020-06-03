const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SimptomsSchema = new Schema({
name: {type: String, required: true, max: 100},
definition: {type: String, required: true, max: 500},

});