import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css"
import { UAState } from "../../Context/uaDetailsProvider";

const Login=()=>{
    const [showPassword, setShowPassword]=useState(false)
    const {user}=UAState()
    const [setIsLoading]=useState(false)
    const navigate=useNavigate()
    const [formData, setFormData]=useState({
        email:"",
        password:""
    })
    
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    

    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }

    useEffect(()=>{
        if(user){
            navigate("/")
        }
    },[navigate,user])

    const handleSubmit=()=>{
        setIsLoading(true)
        console.log(formData)
        
    }
    return(
        <div className="Login">
            <div>
                <h3>Welcome to</h3>
                <h2>Unsullied Army</h2>
                <form>
                    <div>
                        <label htmlFor="email">Email Address or Username:</label>
                        <input 
                            id="email" 
                            type="text" 
                            placeholder="example@domain.com" 
                            name="email" 
                            className="u-input" 
                            onChange={handleChange}
                            value={formData.email}    
                            required                          
                        />
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
                                className="u-input"  
                                required                             
                            />
                        </div>
                    </div>
                    <button className="btn" onClick={handleSubmit} type="submit">Sign In</button>
                </form>
                <h3>Forgot Password? <Link>Reset</Link></h3>
                <h3>Don't have an Account? <Link to="/register">Sign Up</Link></h3>
            </div>

        </div>
    )
}
export default Login;