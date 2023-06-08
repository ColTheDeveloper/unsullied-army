import "./SingleBlog.css"
import {UAState} from "../../Context/uaDetailsProvider"

const SingleBlog=()=>{
    const {allBlogs}=UAState()

    const apiUrl=process.env.REACT_APP_API_URL

    const blog=allBlogs[1]

    console.log(blog)
    return(
        <div className="SingleBlog">
            <h1>{blog.blogTitle}</h1>
            <img src={`${apiUrl}/images/${blog.blogImgUrl}`} alt={blog.blogTitle} />
            <div dangerouslySetInnerHTML={{__html:blog.blogContent}} />
        </div>
    )

}

export default SingleBlog;