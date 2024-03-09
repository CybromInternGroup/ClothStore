const mongoose = require('mongoose');

// Define product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  category: {
    type: String,
    // required: true
  },
  size: [{
    label: String,
    quantity: Number
  }],
  price: {
    type: Number,
    // required: true
  },    
  regularPrice: {
    type: Number,
    // required: true
  },
  images: [{
    type: String // Array of image URLs
  }]
});

// Create and export Product model based on productSchema
module.exports = mongoose.model('AdminCloth', productSchema);
