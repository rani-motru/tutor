const express = require('express');
const router = express.Router();
const path = require('path');

// Home Route
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About Route with a parameter
router.get('/about/:name?', (req, res) => {
  const name = req.params.name || 'Guest';
  res.render('about', { title: 'About', name });
});

// Form handling (POST)
router.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Form submitted successfully!');
});

// Download Route
router.get('/download', (req, res) => {
  const file = path.join(__dirname, '../public/images/example.jpg');
  res.download(file, 'example.jpg', (err) => {
    if (err) {
      console.error(err);
    }
  });
});

module.exports = router;