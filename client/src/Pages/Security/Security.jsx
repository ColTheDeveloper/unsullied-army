import "./Security.css"
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loadingGif3 from "../../Images/loading3.svg"
//import { resetPassword } from "../../api/userRequest";
import { UAState } from "../../Context/uaDetailsProvider";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
//import jwtDecode from "jwt-decode";

const Security=()=>{
    const {user,setToken,token}=UAState()
    const API=useAxios()
    const [showPassword, setShowPassword]=useState(false)
    const [isLoading, setIsLoading]=useState(false)
    const [emptyError,setEmptyError]=useState(false)
    const [passwordMismatchError,setPasswordMismatchError]=useState(false)
    const [passwordNotComplete,setPasswordNotComplete]=useState(false)
    const navigate=useNavigate()
    const [Msg,setMsg]=useState("")
    const [formData,setFormData]=useState({
        password:"",
        newPassword:"",
        confirmNewPassword:""
    })

    const config={
        headers:{
            Authorization:`Bearer ${token}`
    
        }
    }

    useEffect(()=>{
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,40}$/;
        if(formData.newPassword.match(passw)){
            setPasswordNotComplete(false)
        }
    },[formData.newPassword])

    useEffect(()=>{
        if(formData.newPassword===formData.confirmNewPassword){
            setPasswordMismatchError(false)
        }
    },[formData.newPassword ,formData.confirmNewPassword])

    useEffect(()=>{
        setMsg("")
    },[formData.password])

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setIsLoading(true)

        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,40}$/;

        if(formData.password==="" || formData.newPassword==="" || formData.confirmNewPassword===""){
            setEmptyError(true)
            setIsLoading(false)
            return;
        }

        if(!formData.newPassword.match(passw)){
            setPasswordNotComplete(true)
            setIsLoading(false);
            return;
        }

        if(formData.newPassword !== formData.confirmNewPassword){
            setPasswordMismatchError(true)
            setIsLoading(false)
            return;
        }

        //const {data}=await resetPassword(formData)
        const {data}= await API.patch("/api/user/resetPassword", formData, config)
        setMsg(data.message)

        if(data.accessToken){
            setToken(data.accessToken)
            //const {user}=jwtDecode(data.accessToken)
            //setUser(user)
            localStorage.setItem("UAData",JSON.stringify(data.accessToken))
            setIsLoading(false)
            navigate(`/${user.username}`)
        }
        setIsLoading(false)

    }
    return(
        <div className="Security">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="password">Current Password:</label>
                    <div className="pass">
                        <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                        <input 
                            type={showPassword?"text":"password"} 
                            placeholder={showPassword?"password":"********"}  
                            className="u-input"  
                            name="password"
                            value={formData.password}        
                            onChange={handleChange}                     
                        />
                    </div>
                    {emptyError&&formData.password===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Password Field can't be Empty</p>:""}
                    {Msg==="Incorrect Password"?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> {Msg}</p>:""}
                </div>
                <div className="input-container">
                    <label htmlFor="password">New Password:</label>
                    <div className="pass">
                        <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                        <input 
                            type={showPassword?"text":"password"} 
                            placeholder={showPassword?"password":"********"}  
                            className="u-input"    
                            value={formData.newPassword}
                            name="newPassword"  
                            onChange={handleChange}                        
                        />
                    </div>
                    {emptyError&&formData.newPassword===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> New Password Field can't be Empty</p>:""}
                    {passwordNotComplete?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> The password must be at least 8 characters long. The password must consist of an Upper Case Letter, a Lower Case Letter, a Number and a Symbol.</p>:""}
                </div>
                <div className="input-container">
                    <label htmlFor="password">Confirm New Password:</label>
                    <div className="pass">
                        <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                        <input 
                            type={showPassword?"text":"password"} 
                            placeholder={showPassword?"password":"********"}  
                            className="u-input"
                            value={formData.confirmNewPassword}
                            name="confirmNewPassword"
                            onChange={handleChange}                               
                        />
                    </div>
                    {passwordMismatchError?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Password doesn't match with Confirm Password</p>:""}
                    {emptyError&&formData.confirmNewPassword===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Confirm New Password Field can't be Empty</p>:""}
                </div>
                <button className={isLoading?"btn disabled-btn": "btn"} disabled={isLoading?true:false} type="submit">{isLoading &&<img src={loadingGif3} alt="loading" width="15" />}Create New Password</button>
            </form>
        </div>
    )
}
export default Security;