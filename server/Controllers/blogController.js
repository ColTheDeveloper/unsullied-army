const asyncHandler = require("express-async-handler")
const blogModel= require("../Models/blogModel")

//CREATE BLOG POST
const createBlogPost=asyncHandler(async(req,res)=>{
    const {blogTitle, blogImgUrl,blogSummary,blogContent}=req.body
    const {_id}=req.user.user

    const newBlog=await blogModel.create({
        blogAuthor: _id,
        blogTitle,
        blogContent,
        blogImgUrl,
        blogSummary

    })

    const blog= await blogModel.findById(newBlog._id).populate("blogAuthor", "username")

    res.json({message:"Blog created Successfully",blog})
})

//GET A BLOG 

const getABlog=asyncHandler(async(req,res)=>{
    const id=req.params.id
    const blog= await blogModel.findById(id).populate("blogAuthor", "username")

    if(!blog) return res.status(400).json({message:"Blog not Found"})

    res.json(blog)
})

//GET ALL BLOGS
const getAllBlogs=asyncHandler(async(req,res)=>{
    const allBlogs= await blogModel.find()

    res.json(allBlogs)
})

module.exports={createBlogPost,getAllBlogs,getABlog}