const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: Number,
        default: 0,
    },
    productSku: {
        type: String,
    },
    productName: {
        type: String,
    },
    productPrice: {
        type: Number,
        default: 0,
    },
    productShortName: {
        type: String,
    },
    productDescription: {
        type: String,
    },
    createdDate: {
        type: String,
    },
    deliveryTimeSpan: {
        type: String,
    },
    categoryId: {
        type: Number,
        default: 0,
    },
    productImageUrl: {
        type: String,
    }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;