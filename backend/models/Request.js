// models/Request.js
const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  userEmail: String,
  productDescription: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', requestSchema);