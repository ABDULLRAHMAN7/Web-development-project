const express = require("express");
const router = express.Router();
const Recipe = require('../models/Recipe');
const { body, validationResult, check } = require('express-validator');
const { error } = require("jquery");



isAuthenticated = (req,res,next) => {
  if(req.isAuthenticated()) return next()
      res.redirect('/users/login')
}


router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    let chunk = []
    let chunkSize = 3
    for (let i = 0; i < recipes.length ; i+= chunkSize){
        chunk.push(recipes.slice(i, chunkSize + i))
    }
    
    res.render('recipe/index', {
        chunk : chunk,
        message: req.flash('info'),
        success: req.flash('success')
    })
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/create', isAuthenticated ,(req,res)=> {
    res.render('recipe/create', {
      errors: req.flash('errors'),
    })
})

router.post('/create', [
  body('title').isLength({min: 1}).withMessage('Title is required'),
  body('description').isLength({min: 10}).withMessage('Description is required to be more than 10 char'),
  body('location').isLength({min: 1}).withMessage('Location is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash('errors' , errors.array())
      res.redirect('/recipes/create');
  }else{
  try {
    console.log(req.body);
    let newRecipe = new Recipe({
      image: req.body.title,
      description: req.body.description,
      location: req.body.location,
      date: Date.now(),
      user_id: req.user.id,
      created_at: Date.now(),
    });

    await newRecipe.save();
    console.log('Recipe was added');
    req.flash('info', 'the recipe was created successfuly')
    res.redirect('/recipes');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating recipe' });
  }}
});



router.get('/:id', async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }

    
    const recipeDetails = await Recipe.findOne({ _id: recipeId });
    
        res.render('recipe/show', { recipe: recipe});
    
    

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.get('/edit/:id', isAuthenticated ,async (req,res)=> {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }

    
    const recipeDetails = await Recipe.findOne({ _id: recipeId });
    
        res.render('recipe/edit', { recipe: recipe, errors: req.flash('errors'), message: req.flash('info')});
    
    

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})
router.post('/update', [
  body('title').isLength({min: 1}).withMessage('Title is required'),
  body('description').isLength({min: 10}).withMessage('Description is required to be more than 10 char'),
  body('location').isLength({min: 1}).withMessage('Location is required'),
], isAuthenticated ,async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    req.flash('errors', errors.array());
    res.redirect('/recipes/edit/' + req.body.id);
  } else {
    const newFields = {
      image: req.body.image,
      description: req.body.description,
      location: req.body.location,
    };
    const query = { _id: req.body.id };

    try {
      await Recipe.updateOne(query, newFields);
      req.flash('info', "The event was updated successfully");
      res.redirect('/recipes/edit/' + req.body.id);
    } catch (err) {
      console.error(err);
      req.flash('errors', ['An error occurred while updating the event.']);
      res.redirect('/recipes/edit/' + req.body.id);
    }
  }
});

router.delete('/delete/:id', isAuthenticated ,async (req, res) => {
  try {
    let query = { _id: req.params.id };
    await Recipe.deleteOne(query);
    res.status(200).json('deleted');
  } catch (err) {
    res.status(404).json('there was an error .recipe was not deleted');
  }
});

module.exports = router;