const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
       
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,

    },
    phonenumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cnfpassword:{
        type:String,
        required:true

    }
    
},{timestamps:true});
module.exports= mongoose.model('User',userSchema);