const express=require("express")
const bodyParser= require("body-parser")
const cors=require("cors")
const dotenv=require("dotenv")
const { default: mongoose } = require("mongoose")
const authRoute= require("./Routes/authRoute")
const userRoute=require("./Routes/userRoute")
const cookieParser=require("cookie-parser")

const app=express()
dotenv.config()

const PORT=process.env.PORT
const MONGO_CONNECTION=process.env.MONGO_CONNECTION

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({limit:"50mb"}))
app.use(
    cors()
)
app.use(cookieParser())
mongoose.connect(MONGO_CONNECTION)
    .then(()=>{
        console.log("database connected to the server")
    })
    .catch((err)=>{
        console.log(err)
    })

app.listen(PORT,()=>{
    console.log(`server is online on port ${PORT}`);
})

app.use("/api/auth",authRoute);
app.use("/api/user",userRoute)