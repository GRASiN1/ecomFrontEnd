const express = require('express');
const mongoose = require('mongoose');
const Product = require('./productModel');
const Category = require('./categoryModel');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

class MyClass {
    static productId = 0;
}

mongoose.connect('mongodb://localhost:27017/ecommerce')
    .then(() => {
        console.log('MongoDB Connected');
    })

let respone = {
    message: '',
    result: false,
    data: '',
}

app.post('/CreateCategory', async (req, res) => {
    const { categoryId, categoryName } = req.body;
    const result = await Category.create({
        categoryId,
        categoryName,
    });
    respone.message = 'Category Created';
    respone.result = true;
    respone.data = result;
    return res.json(respone);
})

app.get('/GetAllProducts', async (req, res) => {
    const product = await Product.find({});
    respone.message = 'Product fetched Successfully';
    respone.result = true;
    respone.data = product;
    return res.json(respone);
});

app.get('/GetAllCategory', async (req, res) => {
    const category = await Category.find({});
    respone.message = 'Product fetched Successfully';
    respone.result = true;
    respone.data = category;
    return res.json(respone);
});

app.post('/CreateProduct', async (req, res) => {
    const { productId, productSku, productName, productPrice, productShortName, productDescription, createdDate, deliveryTimeSpan, categoryId, productImageUrl } = req.body;
    const result = await Product.create({
        productId: ++MyClass.productId,
        productSku,
        productName,
        productPrice,
        productShortName,
        productDescription,
        createdDate,
        deliveryTimeSpan,
        categoryId,
        productImageUrl
    })
    respone.message = 'Created Successfull';
    respone.result = true;
    respone.data = result;
    return res.json(respone);
});

app.post('/UpdateProduct', async (req, res) => {
    const { productId, productSku, productName, productPrice, productShortName, productDescription, createdDate, deliveryTimeSpan, categoryId, productImageUrl } = req.body;
    const result = await Product.findOneAndUpdate({
        productId
    }, {
        productId,
        productSku,
        productName,
        productPrice,
        productShortName,
        productDescription,
        createdDate,
        deliveryTimeSpan,
        categoryId,
        productImageUrl
    })
    respone.message = 'Updated Successfull';
    respone.result = true;
    respone.data = result;
    return res.json(respone);
});

app.get('/DeleteProductById/:id', async (req, res) => {
    const productId = req.params.id;
    const result = await Product.findOneAndDelete({
        productId,
    });
    respone.message = 'Deleted Successfull';
    respone.result = true;
    respone.data = result;
    return res.json(respone);
});

app.listen(port, () => {
    console.log(`Server listening at : http://locahost:${port}`);
});