import { createContext, useContext, useEffect, useState } from "react";

const UAContext= createContext()


const UADetailsProvider=({children})=>{
    const [user,setUser]=useState({})

    useEffect(()=>{
        const userInfo=JSON.parse(localStorage.getItem("userInfo"))
        setUser(userInfo)
    },[])

    return(
        <UAContext.Provider value={{user,setUser}} >
            {children}
        </UAContext.Provider>
    )
}

export const UAState=()=>{
    return useContext(UAContext)
}

export default UADetailsProvider