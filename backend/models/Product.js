// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  subcategory: String,
  image: String,
  stock: { type: Number, default: 100 }
});

// Text index for search
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);