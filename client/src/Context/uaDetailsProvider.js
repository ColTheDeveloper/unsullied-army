import { createContext, useContext, useEffect, useState } from "react";

const UAContext= createContext()


const UADetailsProvider=({children})=>{
    const [user,setUser]=useState(null)

    useEffect(()=>{
        const userInfo=JSON.parse(localStorage.getItem("userInfo"))
        setUser(userInfo)
        console.log(userInfo)
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