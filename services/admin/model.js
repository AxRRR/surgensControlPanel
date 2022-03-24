const { Schema, model } = require('mongoose');

const adminSchema = Schema({
    user_admin: {
        type: Schema.Types.ObjectId, 
        ref: 'Auth' 
    },
    user_role: {
        type: String,
        required: true
    }
});

module.exports = model('Admin', adminSchema);