const mongoose = require('mongoose');

const wardSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name: String,
    number: Number,
    zone: String,
    description: String,
    counsillor: String,
    population: Number,
    imgsrc: String,
});
  
const Ward = mongoose.model('Ward', wardSchema, 'wards');
  
module.exports = Ward;