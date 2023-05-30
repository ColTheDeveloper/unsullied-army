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
        unique:true,
        lowercase:true
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
        default:""
    },
    twitter:{
        type:String,
        default:""
    },
    instagram:{
        type:String,
        default:""
    },
    tiktok:{
        type:String,
        default:""
    },
    youtube:{
        type:String,
        default:""
    },
    twitch:{
        type:String,
        default:""
    },
    eventPlayed:[{
        type:String
    }],
    eventWon:[{
        type:mongoose.Schema.Types.ObjectId
    }],
    gameInfo:[
        {
            gameName:{
                type:String
            },
            gameIgn:{
                type:String
            },
            gameId:{
                type:String
            }
        }
    ]

    
},{timestamps:true});

const userModel=mongoose.model("User", userSchema);

module.exports=userModel;


