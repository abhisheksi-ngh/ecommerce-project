// controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ msg: 'User exists' });
    }
    const user = await User.create({ name, email, password });
    res.json({ token: generateToken(user._id) });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }
    res.json({ token: generateToken(user._id) });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};