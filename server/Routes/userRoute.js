const express=require("express")
const { usernameIsUnique, getUserWithUsername } = require("../Controllers/userController")

const router= express.Router()

router.post("/checkUsername", usernameIsUnique)
router.post("/getUserWithUsername",getUserWithUsername)



module.exports=router