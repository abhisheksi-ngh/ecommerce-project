// controllers/productController.js
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const { category, subcategory } = req.query;
    let query = {};
    if (category) query.category = category;
    if (subcategory) query.subcategory = subcategory;
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};