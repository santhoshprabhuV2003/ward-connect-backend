const mongoose = require('mongoose');

const landmarkSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name: String,
    type: String,
    wardnumber: Number,
    zone: String,
    address: String,
    contact: String,
    imgsrc: String,
    ward: String,
});
  
const Landmark = mongoose.model('Landmark', landmarkSchema, 'landmarks');
  
module.exports = Landmark;