const express = require("express")
const {login, register,refresh,logout}=require("../Controllers/authController")

const router=express.Router()

router.post('/login', login )
router.post("/register",register)
router.get("/refresh", refresh)
router.get("/logout", logout)


module.exports=router