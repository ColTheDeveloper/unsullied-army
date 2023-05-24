import { useState } from "react";
import { UAState } from "../../Context/uaDetailsProvider";
import "./EditProfile.css"

const EditProfile=()=>{
    const {user}=UAState()
    const [formData,setFormData]=useState({
        firstName:user.firstName,
        otherName:user.otherName,
        lastName:user.lastName,
        username:user.username,
        email:user.email,
        bio:user.bio

    })

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    return(
        <div className="EditProfile">
            <form>
                <div className="input-container">
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        placeholder="John"  
                        name="firstName"   
                        className="u-input"  
                        onChange={handleChange} 
                        value={formData.firstName}                         
                    />
                </div>
                <div className="input-container">
                    <label>Other Name:</label>
                    <input 
                        type="text" 
                        placeholder="Jane"       
                        className="u-input" 
                        name="otherName"
                        onChange={handleChange} 
                        value={formData.otherName}                        
                    />
                </div>
                <div className="input-container">
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        placeholder="Doe"       
                        className="u-input" 
                        name="lastName"
                        onChange={handleChange}  
                        value={formData.lastName}                        
                    />
                </div>
                <div className="input-container">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        placeholder="JohnDoe200"      
                        className="u-input"
                        name="username"
                        onChange={handleChange} 
                        value={formData.username}                           
                    />
                </div>
                <div className="input-container">
                    <label>Email Address:</label>
                    <input 
                        type="text" 
                        placeholder="example@domain.com"   
                        className="u-input"
                        name="email"
                        onChange={handleChange} 
                        value={formData.email}                              
                    />
                </div>
                <div className="input-container">
                    <label>Gender:</label>
                    <input 
                        type="text" 
                        placeholder="example@domain.com"
                        value={user.gender} 
                        className="u-input"
                        readOnly
                                                      
                    />
                </div>
                <div className="input-container">
                    <label>DOB:</label>
                    <input 
                        type="text" 
                        placeholder="example@domain.com"
                        value={user.dob}
                        readOnly  
                        className="u-input" 
                    />
                </div>
                <div className="input-container">
                    <label>Country:</label>
                    <input 
                        type="text" 
                        placeholder="example@domain.com"
                        value={user.country} 
                        className="u-input" 
                        readOnly                             
                    />
                </div>
                <div className="input-container">
                    <label>Bio:</label>
                    <textarea 
                        className="u-input"
                        name="bio"
                        onChange={handleChange}
                        value={formData.bio}
                         ></textarea>
                </div>
                <div>
                    <label>Avatar:</label>
                    <input 
                        type="file"
                        className="u-input"
                        
                    />
                </div>
                <button className="btn" type="submit">Update Account</button>
                
            </form>

        </div>
    )
}
export default EditProfile;