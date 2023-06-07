import { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import loadingGif3 from "../../Images/loading3.svg"
import "./WriteBlog.css"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import "react-quill/dist/quill.bubble.css"
import { uploadImage } from "../../api/uploadRequest"
//import { createBlog } from "../../api/blogRequest"
import { useNavigate } from "react-router-dom"
import useAxios from "../../hooks/useAxios"
import { UAState } from "../../Context/uaDetailsProvider"




const WriteBlog=()=>{
    const [img,setImg]=useState(null)
    const imgRef=useRef()
    const navigate=useNavigate()
    const API=useAxios()
    const {token}=UAState()
    const [isLoading, setIsLoading]=useState(false)
    const [emptyError, setEmptyError]=useState(false)
    const [formData, setFormData]=useState({
        blogTitle:"",
        blogImgUrl:"",
        blogSummary:"",
        blogContent:""
    })

    const addImage=()=>{
        imgRef.current.click()
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const removeImg=()=>{
        setImg(null)
    }

    const handleImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let pics = event.target.files[0];
          setImg(pics);
        }
    };

    const config={
        headers:{
            Authorization:`Bearer ${token}`
    
        }
    }


    const handleSubmit=async(e)=>{
        e.preventDefault()
        setIsLoading(true)

        if(img===null || formData.blogTitle==="" || formData.blogSummary==="" || formData.blogContent===""){
            setEmptyError(true)
            setIsLoading(false)
            return
        }
        const imageData= new FormData()

        const imgName=Date.now()+"blog"+img.name

        imageData.append("name", imgName)
        imageData.append("image",img)

        formData.blogImgUrl=imgName

        await uploadImage(imageData)

        try {
            //const {data}= await createBlog(formData)
            const {data}= await API.post("/api/blog", formData, config)
            console.log(data)
            setIsLoading(false)
            navigate("/blog")
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    return(
        <div className="WriteBlog">
            <h2>Write A Blog</h2>
            {img && 
                <div>
                    <FontAwesomeIcon onClick={removeImg} className="removeImg" icon={"fa-xmark"} />
                    <img src={URL.createObjectURL(img)} alt="blog"/>
                </div>
            }
            <form onSubmit={handleSubmit}>
                <input type="file" ref={imgRef} onChange={handleImgChange} accept="image/*"/>
                <div className="input-container">
                    <label>Blog Title:</label>
                    <input 
                        type="text"
                        name="blogTitle"
                        className="u-input"
                        placeholder="Blog Title"
                        value={formData.blogTitle}
                        onChange={handleChange}
                    />
                    {emptyError&&formData.blogTitle===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Blog Title Field can't be Empty</p>:""}
                </div>
                <div className="input-container">
                    <label>Blog Summary:</label>
                    <input 
                        type="text"
                        name="blogSummary"
                        className="u-input"
                        placeholder="Blog Summary"
                        value={formData.blogSummary}
                        onChange={handleChange}
                        maxLength="200"
                    />
                    {emptyError&&formData.blogSummary===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Blog Summary Field can't be Empty</p>:""}
                </div>
                <span className="addImage" onClick={addImage}>
                    <FontAwesomeIcon icon="fa-solid fa-image" />
                    <span>Add Blog Cover</span>
                </span>
                {emptyError&&img===null?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Image is required</p>:""}

                <ReactQuill 
                    onChange={newValue=>formData.blogContent=newValue}
                    name="blogContent"
                    className="u-input"
                    placeholder="write something..."
                    value={formData.blogContent}
                    style={{height:"60vh",marginBottom:"2rem",color:"#e0dcdc"}}
                    
                    
                />
                {emptyError&&formData.blogContent===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Blog Content Field can't be Empty</p>:""}
                
                <button className={isLoading?"btn disabled-btn": "btn"} disabled={isLoading?true:false} type="submit">{isLoading &&<img src={loadingGif3} alt="loading" width="15" />}Create Blog Post</button>

            </form>
        </div>
    )
}
export default WriteBlog