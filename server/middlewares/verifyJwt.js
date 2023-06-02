const jwt=require("jsonwebtoken")

const verifyJwt=(req,res,next)=>{
    const authHeader= req.headers.Authorization || req.headers.authorization //req.headers.Authorization

    //console.log(req.headers)

    if(!authHeader?.startsWith("Bearer ")){
        return res.status(401).json({message:"Not Authorized"})
    }

    const token= authHeader.split(" ")[1]

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,
        (err,decoded)=>{
            if(err)return res.status(403).json({message:"forbidden 1",err})
            req.user=decoded
            next()
        }
    )
}

module.exports= verifyJwt