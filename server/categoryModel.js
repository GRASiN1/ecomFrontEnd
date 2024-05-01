const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryId: {
        type: Number,
        default: 0,
    },
    categoryName: {
        type: String,
    }
});

const Category = mongoose.model('category', categorySchema);

module.exports = Category;