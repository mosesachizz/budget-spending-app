const express = require('express');
const router = express.Router();

// Example endpoint
router.get('/', (req, res) => {
  res.send('Budget endpoint');
});

module.exports = router;
