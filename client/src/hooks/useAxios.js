import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import { UAState } from "../Context/uaDetailsProvider";


const apiUrl=process.env.REACT_APP_API_URL

const useAxios=()=>{

    const {setToken,token}=UAState()

    const API=axios.create({withCredentials:true,baseURL: apiUrl,headers:{Authorization: `Bearer ${token}`}})

    API.interceptors.request.use(async(req)=>{

        if(!token) return req
    
        const user=jwtDecode(token)
        const isExpired=dayjs.unix(user.exp).diff(dayjs()) < 1;
    
        if(!isExpired) return req
    
        const {data}= await axios.get(`${apiUrl}/api/auth/refresh`,{withCredentials:true})
    
        console.log(data)
        setToken(data)
        localStorage.setItem("UAData",JSON.stringify(data))
    })

    return API
}

export default useAxios
