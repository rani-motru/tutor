const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index', { title: 'Home', message: 'Welcome to the Express App!' });
});

// About route
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us', message: 'Learn more about our app!' });
});

// Form route
router.get('/form', (req, res) => {
  res.render('form', { title: 'Form', message: 'Fill out the form below:' });
});

router.post('/form', (req, res) => {
  const { name, email } = req.body;
  res.render('form', {
    title: 'Form Submitted',
    message: `Thanks for submitting the form, ${name}!`,
    name,
    email,
  });
});

module.exports = router;