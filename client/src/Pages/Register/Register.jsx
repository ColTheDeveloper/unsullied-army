import "./Register.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Register=()=>{
    const [showPassword, setShowPassword]=useState(false)

    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }
    return(
        <div className="Register">
            <div>
                <h2>CREATE AN ACCOUNT</h2>
                <form>
                    <div className="input-container">
                        <label>First Name:</label>
                        <input 
                            type="text" 
                            placeholder="John"     
                            className="u-input"                            
                        />
                    </div>
                    <div className="input-container">
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            placeholder="Doe"       
                            className="u-input"                          
                        />
                    </div>
                    <div className="input-container">
                        <label>Other Name:</label>
                        <input 
                            type="text" 
                            placeholder="Jane"       
                            className="u-input"                          
                        />
                    </div>
                    <div className="input-container">
                        <label>Username:</label>
                        <input 
                            type="text" 
                            placeholder="JohnDoe200"      
                            className="u-input"                           
                        />
                    </div>
                    <div className="input-container">
                        <label>Email Address:</label>
                        <input 
                            type="text" 
                            placeholder="example@domain.com"   
                            className="u-input"                              
                        />
                    </div>
                    <div className="person">
                        <div>
                            <label>Gender:</label>
                            <select className="u-input">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                
                            </select>
                        </div>
                        <div>
                            <label>DOB:</label>
                            <input 
                                type="date" 
                                className="u-input"                                 
                            />
                        </div>

                    </div>
                    <div>
                        <label>Country:</label>
                        <input 
                            type="radio" 
                            value="true"   
                            name="country"  
                            className="u-input" 
                            checked                           
                        />African
                        <input 
                            type="radio"
                            value="false"
                            name="country"
                            className="u-input"
                        />Other Country

                    </div>
                    <div className="input-container">
                        <label className="pass" htmlFor="password">Password: <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} /></label>
                        <input 
                            type={showPassword?"text":"password"} 
                            placeholder={showPassword?"password":"********"}  
                            className="u-input"                               
                        />
                    </div>
                    <button className="btn" type="submit">Sign Up</button>
                </form>
                <h3>Already have an Account? <Link>Sign In</Link></h3>

            </div>
        </div>
    )
}
export default Register;