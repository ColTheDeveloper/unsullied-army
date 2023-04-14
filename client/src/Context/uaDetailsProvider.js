import { createContext, useContext, useState } from "react";

const UAContext= createContext()


const UADetailsProvider=({children})=>{
    const [user,setUser]=useState(1234)



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