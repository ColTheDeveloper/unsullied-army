import { useState, useEffect } from "react";
import { Link,useNavigate,useLocation} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css"
import { UAState } from "../../Context/uaDetailsProvider";
import { loginUser } from "../../api/userRequest";
//import loadingGif from "../../Images/mainLoading.gif"
import loadingGif3 from "../../Images/loading3.svg"
import jwtDecode from "jwt-decode";

const Login=()=>{
    const [showPassword, setShowPassword]=useState(false)
    const {setToken,setUser}=UAState()
    const [isLoading,setIsLoading]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")
    const [emptyError,setEmptyError]=useState(false)
    const [passwordNotComplete,setPasswordNotComplete]=useState(false)
    const navigate=useNavigate()
    const location=useLocation()

    const from= location.state?.from?.pathname || "/"
    const [formData, setFormData]=useState({
        userIdentity:"",
        password:""
    })
    
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,40}$/;
        if(formData.password.match(passw)){
            setPasswordNotComplete(false)
        }
    },[formData.password])
    

    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }

    // useEffect(()=>{
    //     if(user){
    //         navigate("/")
    //     }
    // },[navigate,user])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,40}$/;
        
        if(formData.userIdentity==="" || formData.password===""){
            setEmptyError(true)
            //toast.error("Login Failed")
            setIsLoading(false)
            return;
        }

        if(!formData.password.match(passw)){
            setPasswordNotComplete(true)
            //toast.error("Registration Failed")
            setIsLoading(false)
            return;
        }

        try {
            const {data}= await loginUser(formData)
            setToken(data)
            const {user}=jwtDecode(data)
            setUser(user)
            localStorage.setItem("UAData",JSON.stringify({user,data}))
            formData.userIdentity=""
            formData.password=""
            setIsLoading(false)
            navigate(from, {replace:true})
        } catch (error) {
            console.log(error)
            setEmptyError(true)
            setErrorMessage(error.response.data.message)
            setIsLoading(false)
        }
        
    }
    return(
        <div className="Login">
            <div>
                <h3>Welcome to</h3>
                <h2>Unsullied Army</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="userIdentity">Email Address or Username:</label>
                        <input 
                            id="userIdentity" 
                            type="text" 
                            placeholder="example@domain.com" 
                            name="userIdentity" 
                            className={(emptyError&&formData.userIdentity==="") || (emptyError&&errorMessage==="Email Address or Username doesn't exist")?"u-input err-input": "u-input"}
                            onChange={handleChange}
                            value={formData.userIdentity}    
                                                  
                        />
                        {emptyError&&formData.userIdentity===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Email Address or Username Field can't be Empty</p>:""}
                        {emptyError&&errorMessage==="Email Address or Username doesn't exist"?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" />{errorMessage}</p>:""}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password:</label>
                        <div className="pass">
                            <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                            <input 
                                type={showPassword?"text":"password"} 
                                placeholder={showPassword?"password":"********"}  
                                value={formData.password}
                                onChange={handleChange}
                                name="password"
                                className={(emptyError&&formData.password==="") || (emptyError&&errorMessage==="Wrong Password")?"u-input err-input": "u-input"}
                                                             
                            />
                        </div>
                        {passwordNotComplete?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> The password must be at least 8 characters long. The password must consist of an Upper Case Letter, a Lower Case Letter, a Number and a Symbol.</p>:""}
                        {emptyError&&formData.password===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Password Field can't be Empty</p>:""}
                        {emptyError&&errorMessage==="Wrong Password"?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" />{errorMessage}</p>:""}

                    </div>
                    <button className={isLoading?"btn disabled-btn": "btn"} disabled={isLoading?true:false} type="submit">{isLoading &&<img src={loadingGif3} alt="loading" width="20" />}Sign In</button>
                </form>
                <h3>Forgot Password? <Link>Reset</Link></h3>
                <h3>Don't have an Account? <Link to="/register">Sign Up</Link></h3>
            </div>

        </div>
    )
}
export default Login;