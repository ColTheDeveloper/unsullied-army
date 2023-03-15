import "./Security.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Security=()=>{
    const [showPassword, setShowPassword]=useState(false)

    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }
    return(
        <div className="Security">
            <form>
                <div className="input-container">
                    <label htmlFor="password">Current Password:</label>
                    <div className="pass">
                        <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                        <input 
                            type={showPassword?"text":"password"} 
                            placeholder={showPassword?"password":"********"}  
                            className="u-input"                               
                        />
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="password">New Password:</label>
                    <div className="pass">
                        <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                        <input 
                            type={showPassword?"text":"password"} 
                            placeholder={showPassword?"password":"********"}  
                            className="u-input"                               
                        />
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Re Enter Password:</label>
                    <div className="pass">
                        <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                        <input 
                            type={showPassword?"text":"password"} 
                            placeholder={showPassword?"password":"********"}  
                            className="u-input"                               
                        />
                    </div>
                </div>
                <button type="submit" className="btn">Change Password</button>
            </form>
        </div>
    )
}
export default Security;