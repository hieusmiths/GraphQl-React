const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipeSchema =  new Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    instructions: {
        type: String,
        require: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    username: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema)
