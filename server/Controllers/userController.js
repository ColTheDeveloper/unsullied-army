const userModel=require("../Models/userModel");
const asyncHandler= require("express-async-handler")
const jwt =require("jsonwebtoken")
const bcrypt=require("bcrypt");
const resetPasswordMail = require("../mailers/resetPasswordMail");







//Check if user username is unique
const usernameIsUnique=asyncHandler(async(req,res)=>{
    const {username}=req.body

    if(username.length<=5) return res.status(200).json({message:"Username must be more that 5",isUnique:false})

    if(username.indexOf(" ")>0) return res.status(200).json({message:"Username can't contain space",isUnique:false})

    const foundUser= await userModel.findOne({username:username})

    if(foundUser) return res.json({message:"Username Already Existed",isUnique:false})

    res.json({message:"",isUnique:true})
})

//Add user social links
const updateUser=asyncHandler(async(req,res)=>{
    
    const {_id}=req.user.user

   
    

    const newUser=await userModel.findByIdAndUpdate(_id,{$set:req.body})

    if(!newUser)return res.json({message:"Update isn't successful"})

    const user=newUser

    const accessToken= jwt.sign(
        {user},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"3s"}
    )

    const refreshToken= jwt.sign(
        {user},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:"1h"}
    )

    res.cookie("jwt",refreshToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"None",
        maxAge:24 * 60 *60 *1000
    })

    res.json(accessToken)

})


//GET A USER with username

const getUserWithUsername=asyncHandler(async(req,res)=>{
    const {username}=req.body

    const foundUser= await userModel.findOne({username:username})


    if(!foundUser) return res.json({message:"User not Found",alreadyExisted:false})

    res.json({foundUser,alreadyExisted:true})


})

//SEND RESET USER LINK
const sendResetPasswordLink=asyncHandler(async(req,res)=>{
    const {userIdentity}=req.body

    const user=await userModel.findOne({$or:[{username:userIdentity},{email:userIdentity}]})

    if(!user) return res.status(400).json({message:"User Doesn't Exist"})

    

    resetPasswordMail(user)

})

//RESET PASSWORD

const resetPassword=asyncHandler(async(req,res)=>{
    const {password,newPassword}=req.body
    const {_id}=req.user.user
    
    const foundUser=await userModel.findById(_id)

    if(!foundUser) return res.json({message:"User Not Found"})

    const match= await bcrypt.compare(password, foundUser.password)

    if(!match) return res.json({message:"Incorrect Password"})

    const salt= await  bcrypt.genSalt(10)

    const hashPassword=await bcrypt.hash(newPassword, salt);

    const user= await userModel.findByIdAndUpdate(_id, {$set:{password:hashPassword}})

    if(!user) return res.json({message:"Update isn't Successful"})

    const accessToken= jwt.sign(
        {user},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1h"}
    )

    const refreshToken= jwt.sign(
        {user},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:"1h"}
    )

    res.cookie("jwt",refreshToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"None",
        maxAge:24 * 60 *60 *1000
    })

    res.json({accessToken,message:"Update Successful"})






})

//ADD NEW GAME STATS
const addNewGameInfo=asyncHandler(async(req,res)=>{
    
    const {_id}=req.user.user

    const foundUser= await userModel.findById(_id)

    const gameExist= foundUser.gameInfo.find((game)=>game.gameName===req.body.gameName)

    //console.log(gameExist)

    if(gameExist) return res.json({message:"Game Already Has Details"}) 
    

    const user=await userModel.findByIdAndUpdate(_id,{$push:{gameInfo:req.body}},{new:true})

    if(!user) return res.json({message:"Update Failed"})

    const accessToken= jwt.sign(
        {user},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1h"}
    )

    const refreshToken= jwt.sign(
        {user},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:"1h"}
    )

    res.cookie("jwt",refreshToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"None",
        maxAge:24 * 60 *60 *1000
    })

    res.json({accessToken,message:"Update Successful"})


    
})

//DELETE GAME INFO
const deleteGameInfo=asyncHandler(async(req,res)=>{
    const {game}=req.body
    const {_id}=req.user.user

    //console.log(req.body)

    const user=await userModel.findByIdAndUpdate(_id, {$pull:{gameInfo:game}},{new:true})

    if(!user) return res.json({message:"Update Unsuccessful"})

    const accessToken= jwt.sign(
        {user},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"1h"}
    )

    const refreshToken= jwt.sign(
        {user},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:"1h"}
    )

    res.cookie("jwt",refreshToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"None",
        maxAge:24 * 60 *60 *1000
    })

    res.json({accessToken,message:"Update Successful"})

})

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

module.exports={getAllUser,usernameIsUnique,getUserWithUsername,updateUser,sendResetPasswordLink,resetPassword,addNewGameInfo,deleteGameInfo}
