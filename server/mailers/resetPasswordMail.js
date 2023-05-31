const transporter=require("../config/nodeMailer")


const resetPasswordMail=(user)=>{
    transporter.sendMail(
        {
            from:"info@unsulliedarmy.org",
            to:user.email,
            subject:"Request for reset password link",
            html:"<div>Hello</div>"
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


