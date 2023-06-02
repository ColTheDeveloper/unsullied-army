const express=require("express")
const { usernameIsUnique, getUserWithUsername, updateUser, sendResetPasswordLink, resetPassword, addNewGameInfo, deleteGameInfo} = require("../Controllers/userController")
const verifyJwt = require("../middlewares/verifyJwt")

const router= express.Router()

router.post("/checkUsername",usernameIsUnique)
router.post("/getUserWithUsername",getUserWithUsername)
router.patch("/updateUser",verifyJwt , updateUser)
router.post("/sendResetPasswordLink",sendResetPasswordLink)
router.patch("/resetPassword",verifyJwt ,resetPassword);
router.put("/addNewGameInfo",verifyJwt , addNewGameInfo)
router.put("/deleteGameInfo",verifyJwt , deleteGameInfo)



module.exports=router