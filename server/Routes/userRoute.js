const express=require("express")
const { usernameIsUnique, getUserWithUsername, updateUser } = require("../Controllers/userController")

const router= express.Router()

router.post("/checkUsername", usernameIsUnique)
router.post("/getUserWithUsername",getUserWithUsername)
router.patch("/updateUser", updateUser)



module.exports=router