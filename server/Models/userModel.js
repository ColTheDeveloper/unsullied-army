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
    bio:{
        type:String,
        required:true,
        default:"I Am A Gamer"
    },
    facebook:{
        type:String,
        default:"https://www.facebook.com/"
    },
    twitter:{
        type:String,
        default:"https://www.twitter.com/"
    },
    instagram:{
        type:String,
        default:"https://www.instagram.com/"
    },
    tiktok:{
        type:String,
        default:"https://www.tiktok.com/@"
    },
    youtube:{
        type:String,
        default:"https://www.youtube.com/"
    },
    twitch:{
        type:String,
        default:"https://www.twitch.com/"
    },
    eventPlayed:[{
        type:String
    }],
    eventWon:[{
        type:mongoose.Schema.Types.ObjectId
    }]

    
},{timestamps:true});

const userModel=mongoose.model("User", userSchema);

module.exports=userModel;


