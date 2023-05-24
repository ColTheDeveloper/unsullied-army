const userModel=require("../Models/userModel");


//REGISTER A USER
const registerAUser=asyncHandler(async(req,res)=>{
    
})


//LOGIN AS A USER


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

module.exports={getAllUser}
