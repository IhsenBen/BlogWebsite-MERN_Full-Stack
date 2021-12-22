const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true

    },
    email{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    profilePic:{
        type:String,
        default:"https://www.pngkey.com/png/detail/297-2978655_profile-picture-default-female.png"
    }
},{timestamps:true});

module.exports = mongoose.model('User', UserSchema)