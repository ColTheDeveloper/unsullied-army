import axios from "axios"
//import { UAState } from "../Context/uaDetailsProvider"
import dayjs from "dayjs"
import jwtDecode from "jwt-decode"

//const {token,user}=UAState()
let token=JSON.parse(localStorage.getItem("UAData"))





const apiUrl=process.env.REACT_APP_API_URL

const config={
    headers:{
        Authorization:`Bearer ${token}`

    }
}
const API=axios.create({withCredentials:true,baseURL: apiUrl})

export const registerUser=(formData)=>API.post("/api/auth/register",formData)

export const loginUser=(formData)=>API.post("/api/auth/login", formData)

export const checkUsernameUniqueness=(username)=>API.post("/api/user/checkUsername", {username})

export const refreshUser=()=>API.get("/api/auth/refresh")

export const getUserWithUsername=(username)=>API.post("api/user/getUserWithUsername", {username})

export const updateUser=(formData)=>API.patch("/api/user/updateUser", formData,config)

export const sendResetPasswordLink=(userIdentity)=>API.post("api/user/sendResetPasswordLink", {userIdentity})

export const resetPassword=(formData)=>API.patch("/api/user/resetPassword", formData, config)

export const addNewGameInfo=(gameInfo)=>API.put("/api/user/addNewGameInfo", gameInfo,config)

export const deleteGameInfo=({game})=>API.put("/api/user/deleteGameInfo", {game},config)

export const logoutUser=()=>API.get("/api/auth/logout")

API.interceptors.request.use(async(req,config)=>{



    
    
    if(!token) return req
    
    const user=jwtDecode(token)
    const isExpired=dayjs.unix(user.exp).diff(dayjs()) < 1;
    
    if(!isExpired) return req


    try {
        const {data}= await axios.get(`${apiUrl}/api/auth/refresh`,{withCredentials:true})
        console.log({data})
        req.headers.Authorization= `Bearer ${data}`
        localStorage.setItem("UAData",JSON.stringify(data))
        
        return req
    } catch (error) {
        if(error.response.data.message==="Login session Expired"){
            await logoutUser()
            localStorage.removeItem("UAData")
            console.log(error.response.data)
        }
        
    }
    

    
    
    //console.log(config)

    

})