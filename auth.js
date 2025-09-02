const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Change this for production!

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered.' });
  } catch (err) {
    res.status(400).json({ error: 'Username already exists.' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }
  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

module.exports = router;
