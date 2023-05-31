const nodemailer = require("nodemailer")

let transporter=nodemailer.createTransport({
    host:123,
    auth:{
        user:process.env.EMAIL_ADDRESS,
        pass:process.env.EMAIL_PASSWORD
    }
})


module.exports=transporter