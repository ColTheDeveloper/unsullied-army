import { createContext, useContext, useState,useEffect } from "react";
import jwtDecode from "jwt-decode";

const UAContext= createContext()


const UADetailsProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [token,setToken]=useState(localStorage.getItem("UAData")?JSON.parse(localStorage.getItem("UAData")) : null)
    //const [isLoading, setIsLoading]=useState(true)
    const [pageUserInfo, setPageUserInfo]=useState({})

    const newToken=localStorage.getItem("UAData")
    
    
    
    

    useEffect(()=>{
        if(token===null) return setUser(null)
        
        const {user}=jwtDecode(token)

        console.log(user)


        //const userInfo=JSON.parse(localStorage.getItem("userInfo"))
        setUser(user)
    },[token])

    useEffect(()=>{
        setToken(JSON.parse(localStorage.getItem("UAData")))
        console.log("changed")
        //const userInfo=JSON.parse(localStorage.getItem("userInfo"))
      
    },[newToken])

    return(
        <UAContext.Provider value={{token,setToken,setUser,user,pageUserInfo,setPageUserInfo}} >
            {children}
        </UAContext.Provider>
    )
}

export const UAState=()=>{
    return useContext(UAContext)
}

export default UADetailsProvider