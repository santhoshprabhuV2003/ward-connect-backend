const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    imagesource: String,
});
  
const Service = mongoose.model('Service', serviceSchema, 'services');
  
module.exports = Service;