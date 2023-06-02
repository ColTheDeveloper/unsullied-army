//import jwtDecode from "jwt-decode";
import { useState } from "react";
import { UAState } from "../../Context/uaDetailsProvider";
import "./EditProfile.css"
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../api/userRequest";
import loadingGif3 from "../../Images/loading3.svg"

const EditProfile=()=>{
    const {user,setToken,pageUserInfo}=UAState()
    const [isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()
    
    const [formData,setFormData]=useState({
        firstName:pageUserInfo.firstName,
        otherName:pageUserInfo.otherName,
        lastName:pageUserInfo.lastName,
        username:pageUserInfo.username,
        bio:pageUserInfo.bio
    })

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        try {
            const {data}=await updateUser(formData)
            setToken(data)
            
            localStorage.setItem("UAData",JSON.stringify(data))
            setIsLoading(false)
            navigate(`/${user.username}`)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            
        }
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    return(
        <div className="EditProfile">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        placeholder="John"  
                        name="firstName"   
                        className="u-input"  
                        onChange={handleChange} 
                        value={formData.firstName}   
                        autoComplete="off"                      
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
                        autoComplete="off"                   
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
                        autoComplete="off"                  
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
                        autoComplete="off"                      
                    />
                </div>
                <div className="input-container">
                    <label>Email Address:</label>
                    <input 
                        type="text" 
                        placeholder="example@domain.com"   
                        className="u-input" 
                        value={user.email}          
                        readOnly                   
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
                <button className={isLoading?"btn disabled-btn": "btn"} disabled={isLoading?true:false} type="submit">{isLoading &&<img src={loadingGif3} alt="loading" width="20" />}Update Account</button>
                
                
            </form>

        </div>
    )
}
export default EditProfile;