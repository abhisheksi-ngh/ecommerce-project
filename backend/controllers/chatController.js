// controllers/chatController.js
const { OpenAI } = require('openai');
const Product = require('../models/Product');
const Request = require('../models/Request');
const sendEmail = require('../utils/sendEmail');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.chat = async (req, res) => {
  const { message, userEmail } = req.body;

  try {
    // Search DB
    const products = await Product.find({ $text: { $search: message } }).limit(10);

    if (products.length > 0) {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a helpful e-commerce assistant. List products clearly.' },
          { role: 'user', content: `User asked: ${message}\nProducts: ${JSON.stringify(products)}` }
        ],
      });
      return res.json({ response: completion.choices[0].message.content });
    } else {
      if (message.toLowerCase().includes('request') && userEmail) {
        const request = new Request({ userEmail, productDescription: message });
        await request.save();
        await sendEmail(
          process.env.ADMIN_EMAIL,
          'New Product Request',
          `User: ${userEmail}\nRequest: ${message}`
        );
        return res.json({ response: 'Request sent! We will add it soon.' });
      }
      return res.json({ response: 'No products found. Type "request [product]" to ask admin.' });
    }
  } catch (err) {
    res.status(500).json({ msg: 'AI error' });
  }
};