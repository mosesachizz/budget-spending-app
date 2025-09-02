const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

router.post('/', async (req, res) => {
  const { date, category, amount } = req.body;
  const expense = new Expense({
    user: req.userId,
    date,
    category,
    amount
  });
  await expense.save();
  res.status(201).json(expense);
});

router.get('/monthly', async (req, res) => {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const expenses = await Expense.find({
    user: req.userId,
    date: { $gte: firstDay, $lte: lastDay }
  });

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  res.json({ expenses, total });
});

module.exports = router;
