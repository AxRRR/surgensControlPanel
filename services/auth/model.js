const { Schema, model } = require('mongoose');

const authSchema = Schema({
    tag_member: {
        type: String,
        required: true,
        unique: true
    },
    name_member: {
        type: String,
        required: true,
        unique: true
    },
    password_member: {
        type: String,
        required: true,
    },
    role_member: {
        type: String
    }
});

module.exports = model('auth', authSchema);