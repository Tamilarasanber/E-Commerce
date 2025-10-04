const express = require('express');
const cors = require('cors');
const path = require('path');
const products = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

// API
app.use('/api/products', products);

// Serve static images
app.use('/images/men', express.static(path.join(__dirname, 'public/images/men')));
app.use('/images/women', express.static(path.join(__dirname, 'public/images/women')));
app.use('/images/accessories', express.static(path.join(__dirname, 'public/images/accessories')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
