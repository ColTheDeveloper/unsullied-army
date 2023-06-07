import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import { UAState } from "../Context/uaDetailsProvider";


const apiUrl=process.env.REACT_APP_API_URL

const useAxios=()=>{

    const {setToken,token,setUser}=UAState()

    const API=axios.create({withCredentials:true,baseURL: apiUrl})

    API.interceptors.request.use(async(req)=>{

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
            if(error.response.data.message==="Login Session Expired"){
                await axios.get(`${apiUrl}/api/auth/logout`)
                localStorage.removeItem("UAData")
                setToken(null)
                setUser(null)
                console.log(error.response.data)
                return req
            }
            
        }

    })
    return API
}

export default useAxios
