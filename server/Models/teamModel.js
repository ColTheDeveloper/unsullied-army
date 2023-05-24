const mongoose= require("mongoose");

const teamSchema= new mongoose.Schema({
    teamName:{
        type:String,
        required:true,
        unique:true
    },
    teamImgUrl:{
        type:String
    },
    teamSocial:{
        facebook:{
            type:String,
        },
        twitter:{
            type:String,
        },
        instagram:{
            type:String,
        },

    },
    teamCountry:{
        type:String
    },
    teamLeader:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    member:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]
},{timestamps:true});

const teamModel=mongoose.model("Team", teamSchema);

module.exports=teamModel;