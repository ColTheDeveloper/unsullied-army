const mongoose= require("mongoose")

const blogSchema= new mongoose.Schema({
    blogTitle:{
        type:String,
        required:true
    },
    blogImgUrl:{
        type:String,
        required:true
    },
    blogContent:{
        type:String,
        required:true
    },
    blogSummary:{
        type:String,
        required:true
    },
    blogAuthor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},
{timestamps:true})

const blogModel= mongoose.model("Blog",blogSchema);

module.exports=blogModel;