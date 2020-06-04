const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DisiaseSchema = new Schema({
name: {type: String, required: true, max: 100},
descricao: {type: String, required: true, max: 1000},

});
module.exports = mongoose.model('Disiase', DisiaseSchema);