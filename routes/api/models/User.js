const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date:{
        type: DataCue,
        default: Date.now
    }
});

module.exports = User = mongoose.mouel('user', UserSchema);