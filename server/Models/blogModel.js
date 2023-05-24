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
    }
},
{timestamps:true})

const blogModel= mongoose.model("Blog",blogSchema);

module.exports=blogModel;