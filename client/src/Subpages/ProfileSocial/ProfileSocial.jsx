import { useState } from "react";
import "./ProfileSocial.css"
import { UAState } from "../../Context/uaDetailsProvider";
//import { updateUser } from "../../api/userRequest";
import { useNavigate } from "react-router-dom";
import loadingGif3 from "../../Images/loading3.svg"
import useAxios from "../../hooks/useAxios";
//import jwtDecode from "jwt-decode";

const ProfileSocial=()=>{
    const {user,token,setToken,pageUserInfo}=UAState()
    const [isLoading,setIsLoading]=useState(false)
    const API=useAxios()
    const navigate=useNavigate()
    const [formData, setFormData]=useState({
        instagram:pageUserInfo.instagram,
        twitter:pageUserInfo.twitter,
        facebook:pageUserInfo.facebook,
        tiktok:pageUserInfo.tiktok,
        youtube:pageUserInfo.youtube,
        twitch:pageUserInfo.twitch
    })

    const config={
        headers:{
            Authorization:`Bearer ${token}`
    
        }
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        try {
            //const {data}=await updateUser(formData)
            const {data}= await API.patch("/api/user/updateUser", formData, config)
            setToken(data)
            //const {user}=await jwtDecode(data)
            //setUser(user)
            localStorage.setItem("UAData",JSON.stringify(data))
            setIsLoading(false)
            navigate(`/${user.username}`)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            
        }
    }

    return(
        <div className="EditProfile">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Instagram:</label>
                    <input 
                        type="text" 
                        name="instagram"
                        placeholder="https://www.instagram.com/"
                        onChange={handleChange}
                        value={formData.instagram}     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Twitter:</label>
                    <input 
                        type="text" 
                        name="twitter"
                        placeholder="https://www.twitter.com/"
                        onChange={handleChange}
                        value={formData.twitter}     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Facebook:</label>
                    <input 
                        type="text" 
                        name="facebook"
                        placeholder="https://www.facebook.com/"
                        onChange={handleChange}
                        value={formData.facebook}     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Tiktok:</label>
                    <input 
                        type="text" 
                        name="tiktok"
                        placeholder="https://www.tiktok.com/"
                        onChange={handleChange}
                        value={formData.tiktok}     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>YouTube:</label>
                    <input 
                        type="text" 
                        name="youtube"
                        placeholder="https://www.youtube.com/"
                        onChange={handleChange}
                        value={formData.youtube}     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Twitch:</label>
                    <input 
                        type="text" 
                        name="twitch"
                        placeholder="https://www.twitch.com/"
                        onChange={handleChange}
                        value={formData.twitch}     
                        className="u-input"                            
                    />
                </div>
                <button className={isLoading?"btn disabled-btn": "btn"} disabled={isLoading?true:false} type="submit">{isLoading &&<img src={loadingGif3} alt="loading" width="20" />}Update</button>
            </form>

        </div>
    )
}
export default ProfileSocial;