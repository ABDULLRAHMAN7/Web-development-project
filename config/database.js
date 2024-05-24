const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/recipesDB')
  .then(() => {
    console.log('Connected to the database successfully...');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });