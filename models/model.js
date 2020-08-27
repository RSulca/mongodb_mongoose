const { Schema, model } = require('mongoose');
const productSchema = new Schema({
    name: String,
    description: String,
    price: Number
});

const modelSchema = model('Product', productSchema);

module.exports = {
    modelSchema
}    