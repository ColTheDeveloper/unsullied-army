const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const asyncHandler=require("express-async-handler")
const userModel= require("../Models/userModel")


const register=asyncHandler(async(req,res)=>{
    const {password,username,email}=req.body

    const userEmailExist= await userModel.findOne({email})

    if(userEmailExist) return res.status(400).json({message:"Email Already Exist"})

    const userUsernameExist= await userModel.findOne({username})

    if(userUsernameExist) return res.status(400).json({message:"Username Already Exist"})

    const salt=await bcrypt.genSalt(10)

    const hashPassword=await bcrypt.hash(password, salt)


    req.body.password= hashPassword

    const newUser=new userModel(req.body)

    await newUser.save()

    const user=newUser

    const accessToken= jwt.sign(
        {user},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"3s"}
    )

    const refreshToken= jwt.sign(
        {user},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:"7d"}
    )

    res.cookie("jwt",refreshToken,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"None",
        maxAge:7 * 24 * 60 * 1000
    })

    res.json(accessToken)

})

const login=asyncHandler(async(req,res)=>{
    const {userIdentity,password}=req.body
    

    const user= await userModel.findOne({$or:[
        {username:userIdentity},
        {email:userIdentity}
    ]}).exec()

    if(!user){
        return res.status(401).json({message:"Email Address or Username doesn't exist"});
    };

    const match=await bcrypt.compare(password, user.password)

    if(!match) return res.status(401).json({message:"Wrong Password"});

    const accessToken= jwt.sign(
        {user},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"3s"}
    )

    const refreshToken= jwt.sign(
        {user},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:"7d"}
    )

    // res.cookie("jwt",refreshToken,{
    //     httpOnly:true,
    //     secure:false,
    //     sameSite:"None",
    //     maxAge:7 * 24 * 60 * 1000
    // })

    res.cookie("jwt",refreshToken,{
        httpOnly:true, //accessible only by web server
        secure:process.env.NODE_ENV==="production" ,// https
        sameSite: "None", //cross-site cookie
        maxAge: 7 * 24 * 60 * 1000 //cookie expires in 10min
    })

    res.json(accessToken)
})

const refresh=(req,res)=>{
    const cookies=req.cookies

    //console.log(cookies)
    

    if(!cookies?.jwt) return res.status(401).json({message:"Login Session Expired"})

    const refreshToken= cookies.jwt

    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,asyncHandler(async(err,decode)=>{
        if(err)return res.status(403).json({message:err})
        
        //console.log(decode.user.username)
        const user= await userModel.findOne({username: decode.user.username})
        //console.log(user)

        if(!user) return res.status(401).json({message:"Unauthorized"})

        const accessToken=jwt.sign(
            {user},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"3s"}
        )

        res.json(accessToken)
    }))
}

const logout=(req,res)=>{
    const cookies=req.cookies
    

    if(!cookies?.jwt) return res.sendStatus(204)

    res.clearCookie("jwt",{httpOnly:true ,sameSite:"None",secure:true})

    res.json({message:"Cookie cleared"})
}

module.exports={login,refresh,logout,register}