import "./Register.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import countries from "../../data/countries.json";


const Register=()=>{
    const [showPassword, setShowPassword]=useState(false)
    const [passwordAvailable, setPasswordAvailable]=useState(true)
    const [isSelcted, setSelected]=useState(false)
    const [isAfrica, setIsAfrica]=useState(true)

    const handleCountry=(e)=>{
        setSelected(true)
        if(e.target.value==="false"){
            setIsAfrica(false)
        }
        if(e.target.value==="true"){
            setIsAfrica(true)
        }
        
    }

    const africanCountries=Object.values(countries).filter(key=>key.continent.includes("AF"))

    const otherCountries=Object.values(countries).filter(key=>!key.continent.includes("AF"))
    
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
                        <label>Other Name:</label>
                        <input 
                            type="text" 
                            placeholder="Jane"       
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
                                max="2007-01-01"
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
                            onChange={handleCountry}
                            className="u-input" 
                                                      
                        />&nbsp;African &nbsp; &nbsp;
                        <input 
                            type="radio"
                            value="false"
                            name="country"
                            onChange={handleCountry}
                            className="u-input"
                        />&nbsp;Other &nbsp; &nbsp;
                        {isSelcted?
                            isAfrica?
                            <select>
                                {africanCountries.map((names)=>{
                                    return(
                                        <option key={names.name} value={names.name}>{names.name}</option>
                                    )
                                })}

                            </select>
                            :
                            <select>
                                {otherCountries.map((names)=>{
                                    return(
                                        <option key={names.name} value={names.name}>{names.name}</option>
                                    )
                                })}

                            </select>
                        :""    
                        }
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password:</label>
                        <div className="pass">
                            <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                            <input 
                                type={showPassword?"text":"password"} 
                                placeholder={showPassword?"password":"********"}  
                                className="u-input"                               
                            />
                        </div>
                    </div>
                    {passwordAvailable &&
                        <div className="input-container">
                        <label htmlFor="password">Confirm Password:</label>
                        <div className="pass">
                            <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                            <input 
                                type={showPassword?"text":"password"} 
                                placeholder={showPassword?"password":"********"}  
                                className="u-input"                               
                            />
                        </div>
                        </div>
                    }
                    <button className="btn" type="submit">Sign Up</button>
                </form>
                <h3>Already have an Account? <Link>Sign In</Link></h3>

            </div>
        </div>
    )
}
export default Register;