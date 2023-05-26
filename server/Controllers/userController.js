const userModel=require("../Models/userModel");
const asyncHandler= require("express-async-handler")


//REGISTER A USER
const registerAUser=asyncHandler(async(req,res)=>{
    
})


//LOGIN AS A USER

//Check if user username is unique
const usernameIsUnique=asyncHandler(async(req,res)=>{
    const {username}=req.body

    if(username.length<=5) return res.status(200).json({message:"Username must be more that 5",isUnique:false})

    const foundUser= await userModel.findOne({username:username})

    if(foundUser) return res.json({message:"Username Already Existed",isUnique:false})

    res.json({message:"",isUnique:true})
})


//GET A USER


//GET ALL USERS
const getAllUser=asyncHandler(async(req,res)=>{
    const allUser= await userModel.find();

    if(!allUser){
        res.status(400);
        throw new Error("Users Not Found");
    }else{
        res.status(200).json(allUser);
    }   
})


//DELETE A USER

module.exports={getAllUser,usernameIsUnique}
