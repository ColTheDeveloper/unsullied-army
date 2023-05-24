import axios from "axios"

const apiUrl=process.env.REACT_APP_API_URL

const API=axios.create({baseURL: apiUrl})

export const registerUser=(formData)=>API.post("/api/auth/register",formData)

export const loginUser=(formData)=>API.post("/api/auth/login", formData)