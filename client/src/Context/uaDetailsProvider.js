import { createContext, useContext, useState,useEffect } from "react";
import jwtDecode from "jwt-decode";
//import useAxios from "../hooks/useAxios";
import axios from "axios"

const UAContext= createContext()


const UADetailsProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [allBlogs, setAllBlogs]=useState([])
    
    const [token,setToken]=useState(localStorage.getItem("UAData")?JSON.parse(localStorage.getItem("UAData")) : null)
    //const [isLoading, setIsLoading]=useState(true)
    const [pageUserInfo, setPageUserInfo]=useState({})

    const newToken=localStorage.getItem("UAData")
    
    
    const apiUrl=process.env.REACT_APP_API_URL
    

    useEffect(()=>{
        if(token===null) return setUser(null)
        
        const {user}=jwtDecode(token)

        //const userInfo=JSON.parse(localStorage.getItem("userInfo"))
        setUser(user)
    },[token])

    useEffect(()=>{
        setToken(JSON.parse(localStorage.getItem("UAData")))
        //const userInfo=JSON.parse(localStorage.getItem("userInfo"))
      
    },[newToken])

    useEffect(()=>{
        
        const fetchBlog=async()=>{
            const {data}=await axios.get(`${apiUrl}/api/blog`)
            setAllBlogs(data)

        }
        fetchBlog()


    },[])

    return(
        <UAContext.Provider value={{token,setToken,setUser,user,pageUserInfo,setPageUserInfo,allBlogs, setAllBlogs}} >
            {children}
        </UAContext.Provider>
    )
}

export const UAState=()=>{
    return useContext(UAContext)
}

export default UADetailsProvider