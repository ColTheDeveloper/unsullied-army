import axios from "axios"
//import { UAState } from "../Context/uaDetailsProvider"

//const {token}=UAState()

// const config={
//     headers:{
//         Authorization:`Bearer ${axios}`

//     }
// }

const apiUrl=process.env.REACT_APP_API_URL

const API=axios.create({withCredentials:true,baseURL: apiUrl})

export const registerUser=(formData)=>API.post("/api/auth/register",formData)

export const loginUser=(formData)=>API.post("/api/auth/login", formData)

export const checkUsernameUniqueness=(username)=>API.post("/api/user/checkUsername", {username})

export const refreshUser=()=>API.get("/api/auth/refresh")

export const getUserWithUsername=(username)=>API.post("api/user/getUserWithUsername", {username})

export const updateUser=(formData)=>API.patch("/api/user/updateUser", formData)

export const sendResetPasswordLink=(userIdentity)=>API.post("api/user/sendResetPasswordLink", {userIdentity})

export const logoutUser=()=>API.get("/api/auth/logout")