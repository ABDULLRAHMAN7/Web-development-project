const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    },
    Rimage: {
        type: String,
        required: false
    },
    
    
})

let Recipe = mongoose.model('Recipe', recipeSchema, 'Recipes')

module.exports = Recipe