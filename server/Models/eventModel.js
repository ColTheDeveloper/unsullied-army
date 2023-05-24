const mongoose=require("mongoose")

const eventSchema= new mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    eventImgUrl:{
        type:String,
        required:true
    },
    registeredTeam:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }],
});

const eventModel= mongoose.model("Event",eventSchema);

module.exports=eventModel;