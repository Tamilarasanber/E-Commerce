const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Utility function to load JSON
const loadJSON = (filename) => {
  const filePath = path.join(__dirname, '../data', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

// Routes
router.get('/men', (req, res) => {
  const menProducts = loadJSON('men.json');
  res.json(menProducts);
});

router.get('/women', (req, res) => {
  const womenProducts = loadJSON('women.json');
  res.json(womenProducts);
});

router.get('/accessories', (req, res) => {
  const accessories = loadJSON('accessories.json');
  res.json(accessories);
});

module.exports = router;
