const mongoose = require('mongoose');
const createUserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    uname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const CreateUser = mongoose.model('CreateUser', createUserSchema);
module.exports = CreateUser;