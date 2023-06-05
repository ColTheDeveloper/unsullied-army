import axios from "axios"

import dayjs from "dayjs"
import jwtDecode from "jwt-decode"

let token=JSON.parse(localStorage.getItem("UAData"))

const apiUrl=process.env.REACT_APP_API_URL

const config={
    headers:{
        Authorization:`Bearer ${token}`

    }
}
const API=axios.create({withCredentials:true,baseURL: apiUrl})

export const createBlog=(formData)=>API.post("/api/blog", formData, config)

API.interceptors.request.use(async(req,config)=>{
    
    if(!token) return req
    
    const user=jwtDecode(token)
    const isExpired=dayjs.unix(user.exp).diff(dayjs()) < 1;
    
    if(!isExpired) return req
    
    const {data}= await axios.get(`${apiUrl}/api/auth/refresh`,{withCredentials:true})
    
    //console.log(config)
    //console.log({data})

    req.headers.Authorization= `Bearer ${data}`
    
    localStorage.setItem("UAData",JSON.stringify(data))

    return req
})