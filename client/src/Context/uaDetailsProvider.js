import { createContext, useContext, useState } from "react";

const UAContext= createContext()


const UADetailsProvider=({children})=>{
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("UAData"))?.user);
    const [token,setToken]=useState(JSON.parse(localStorage.getItem("UAData"))?.data)
    



    // if(token===null){
    //     setUser(null)
    // }else{
    //     const {foundUser}=jwtDecode(token)
    //     setUser(foundUser)
    // }

    
    


    
    
    

    // useEffect(()=>{
    //     if(token===null) return setUser(null)
        
    //     const {foundUser}=jwtDecode(token)

    //     //const userInfo=JSON.parse(localStorage.getItem("userInfo"))
    //     setUser(foundUser)
    // },[token])

    return(
        <UAContext.Provider value={{token,setToken,setUser,user}} >
            {children}
        </UAContext.Provider>
    )
}

export const UAState=()=>{
    return useContext(UAContext)
}

export default UADetailsProvider