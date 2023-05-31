import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loadingGif3 from "../../Images/loading3.svg"
import { useEffect, useState } from "react";

const ChangePassword=()=>{
    const [showPassword, setShowPassword]=useState(false)
    const [passwordAvailable,setPasswordAvailable]=useState(false)
    const [passwordMismatchError,setPasswordMismatchError]=useState(false)
    const [passwordNotComplete,setPasswordNotComplete]=useState(false)
    const [emptyError,setEmptyError]=useState(false)
    const [isLoading, setIsLoading]= useState(false)
    const [formData,setFormData]=useState({
        newPassword:"",
        confirmNewPassword:""
    })

    useEffect(()=>{
        //if password input doesn't have anything in it,it won't show confirm password input
        //but if the opposite,it will show confirm password input
        if(formData.password!==""){
            setPasswordAvailable(true)
        }else{
            setPasswordAvailable(false)
        }
    },[formData.password])

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

    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }

    const handleSubmit= async(e)=>{
        setIsLoading(true)
        e.preventDefault()
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,40}$/;

        if(formData.confirmNewPassword==="" || formData.newPassword===""){
            setEmptyError(true)
            setIsLoading(false)
            return;
        }
        if(formData.newPassword !== formData.confirmNewPassword){
            setPasswordMismatchError(true)
            setIsLoading(false)
            return;
        }
        if(!formData.newPassword.match(passw)){
            setPasswordNotComplete(true)
            setIsLoading(false)
            return;
        }

        console.log(formData)
        setIsLoading(false)
    }


    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    return(
        <div className="Login">
            <div>
                <h3>Reset Your Password</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="password">Password:</label>
                        <div className="pass">
                            <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                            <input 
                                type={showPassword?"text":"password"} 
                                placeholder={showPassword?"password":"********"}  
                                name="newPassword"
                                onChange={handleChange}
                                value={formData.newPassword}
                                className={(emptyError ||passwordNotComplete)&&formData.newPassword===""?"u-input err-input": "u-input"} 
                                                    
                            />
                            
                        </div>
                        {passwordNotComplete?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> The password must be at least 8 characters long. The password must consist of an Upper Case Letter, a Lower Case Letter, a Number and a Symbol.</p>:""}
                        {emptyError&&formData.newPassword===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Password Field can't be Empty</p>:""}
                        
                    </div>
                    {passwordAvailable &&
                        <div className="input-container">
                            <label htmlFor="password">Confirm Password:</label>
                            <div className="pass">
                                <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                                <input 
                                    type={showPassword?"text":"password"} 
                                    placeholder={showPassword?"password":"********"}
                                    name="confirmNewPassword"
                                    onChange={handleChange}
                                    value={formData.confirmNewPassword}  
                                    className={(emptyError||passwordMismatchError)&&formData.confirmNewPassword===""?"u-input err-input": "u-input"}
                                                            
                                />
                            </div>
                            {passwordMismatchError?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Password doesn't match with Confirm Password</p>:""}
                            {emptyError&&formData.confirmNewPassword===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Confirm Password Field can't be Empty</p>:""}
                            
                        </div>
                    }
                    <button className={isLoading?"btn disabled-btn": "btn"} disabled={isLoading?true:false} type="submit">{isLoading &&<img src={loadingGif3} alt="loading" width="15" />}Reset My Password</button>

                </form>
            </div>
        </div>
    )
}

export default ChangePassword;