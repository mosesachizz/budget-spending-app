const express = require('express');
const router = express.Router();

// Example endpoint
router.get('/', (req, res) => {
  res.send('User endpoint');
});

module.exports = router;
