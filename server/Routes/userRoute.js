const express=require("express")
const { usernameIsUnique } = require("../Controllers/userController")

const router= express.Router()

router.post("/checkUsername", usernameIsUnique)



module.exports=router