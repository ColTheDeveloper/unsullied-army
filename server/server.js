const express=require("express")
const bodyParser= require("body-parser")
const cors=require("cors")
const dotenv=require("dotenv")
const { default: mongoose } = require("mongoose")
const authRoute= require("./Routes/authRoute")
const userRoute=require("./Routes/userRoute")
const imageUploadRoute=require("./Routes/ImageUploadRoute")
const blogRoute=require("./Routes/blogRoute")
const cookieParser=require("cookie-parser")

const app=express()
dotenv.config()

console.log(process.env.NODE_ENV==="production")
const PORT=process.env.PORT
const MONGO_CONNECTION=process.env.MONGO_CONNECTION

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({limit:"50mb"}))
app.use(express.static("public"));
app.use("/images", express.static("images"));
app.use(
    cors({
        origin:["http://localhost:3000","https://unsullied-army.vercel.app"],
        method:["GET","POST","PATCH","PUT"],
        credentials:true
    })
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
app.use("/api/user",userRoute);
app.use("/api/upload/image", imageUploadRoute);
app.use("/api/blog", blogRoute);