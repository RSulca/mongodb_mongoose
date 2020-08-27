const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    date: Date
});

const modelSchema = model('User', userSchema);

module.exports = {
    modelSchema
}    