const transporter=require("../config/nodeMailer")


const resetPasswordMail=(user)=>{
    transporter.sendMail(
        {
            from:"info@unsulliedArmy.com",
            to:user.email,
            subject:"",
            html:"<h1>Hello</h1>"
        },
        (err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log("email sent successfully")
            }
        }
    )
}

module.exports= resetPasswordMail;