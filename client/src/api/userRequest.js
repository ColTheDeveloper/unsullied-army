import axios from "axios"

const apiUrl=process.env.REACT_APP_API_URL

const API=axios.create({baseURL: apiUrl})

export const registerUser=({data})=>API.post("/api/signup",data)

export const loginUser=(data)=>API.get("/api/signin", data)