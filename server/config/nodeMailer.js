const nodemailer = require("nodemailer")
const dotenv=require("dotenv")

dotenv.config()


let transporter=nodemailer.createTransport({
    host:process.env.EMAIL_HOST,
    port:465,
    secure:true,
    auth:{
        user:process.env.EMAIL_ADDRESS,
        pass:process.env.EMAIL_PASSWORD
    }
})


module.exports=transporter