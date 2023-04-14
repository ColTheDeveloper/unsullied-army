import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css"

const Login=()=>{
    const [showPassword, setShowPassword]=useState(false)
    const [data, setData]=useState({
        email:"",
        username:"",
        password:""
    })
    
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    

    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
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
                            className="u-input" 
                            onChange={handleChange}
                            value={data.email}    
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
                                value={data.password}
                                onChange={handleChange}
                                className="u-input"  
                                required                             
                            />
                        </div>
                    </div>
                    <button className="btn" type="submit">Sign In</button>
                </form>
                <h3>Forgot Password? <Link>Reset</Link></h3>
                <h3>Don't have an Account? <Link to="/register">Sign Up</Link></h3>
            </div>

        </div>
    )
}
export default Login;