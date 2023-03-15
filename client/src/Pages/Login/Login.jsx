import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css"

const Login=()=>{
    const [showPassword, setShowPassword]=useState(false)

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
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} /></label>
                        <input 
                            type={showPassword?"text":"password"} 
                            placeholder={showPassword?"password":"********"}  
                            className="u-input"                               
                        />
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