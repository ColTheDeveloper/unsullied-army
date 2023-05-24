const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    otherName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    },
    avatarUrl:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    socials:{
        facebook:{
            type:String
        },
        twitter:{
            type:String
        },
        instagram:{
            type:String
        },
        tiktok:{
            type:String
        },
    }
},{timestamps:true});

const userModel=mongoose.model("User", userSchema);

module.exports=userModel;


