const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    product_name: String,
    product_category: String,
    product_image: String,
    product_price: Number,
    product_description: String,
    wish:{
        type : Boolean,
        default: false
    }
});

module.exports = mongoose.model('product', product);