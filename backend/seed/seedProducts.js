// seed/seedProducts.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const connectDB = require('../config/db');

connectDB();

const categories = [
  { name: 'Women', subs: ['Garments', 'Clothes', 'Accessories'] },
  { name: 'Men', subs: ['Shirts', 'Pants', 'Shoes'] },
  { name: 'Kids', subs: ['Toys', 'Clothes', 'Books'] },
  { name: 'Electronics', subs: ['Phones', 'Laptops', 'Headphones'] },
  { name: 'Home', subs: ['Furniture', 'Decor', 'Kitchen'] }
];

const seed = async () => {
  await Product.deleteMany({});
  let imgIndex = 1;

  for (const cat of categories) {
    for (const sub of cat.subs) {
      for (let i = 1; i <= 20; i++) {
        await Product.create({
          name: `${cat.name} ${sub} Item ${i}`,
          description: `High quality ${sub.toLowerCase()} for ${cat.name.toLowerCase()}`,
          price: Math.floor(Math.random() * 90) + 10,
          category: cat.name,
          subcategory: sub,
          image: `https://source.unsplash.com/random/300x300/?${sub.toLowerCase()}`
        });
      }
    }
  }
  console.log('100+ Products Seeded!');
  process.exit();
};

seed();