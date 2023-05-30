const express=require("express")
const { usernameIsUnique, getUserWithUsername, updateUser, sendResetPasswordLink} = require("../Controllers/userController")

const router= express.Router()

router.post("/checkUsername", usernameIsUnique)
router.post("/getUserWithUsername",getUserWithUsername)
router.patch("/updateUser", updateUser)
router.post("/sendResetPasswordLink",sendResetPasswordLink)



module.exports=router