const express=require("express")
const { createBlogPost, getABlog, getAllBlogs } = require("../Controllers/blogController")
const verifyJwt = require("../middlewares/verifyJwt")

const router=express.Router()

router.post("/", verifyJwt, createBlogPost)
router.get("/" ,getAllBlogs)
router.get("/:id",getABlog)




module.exports=router