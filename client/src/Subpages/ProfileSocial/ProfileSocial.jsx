import { useState } from "react";
import "./ProfileSocial.css"
import { UAState } from "../../Context/uaDetailsProvider";

const ProfileSocial=()=>{
    const {user}=UAState()
    const [formmData, setFormData]=useState({
        instagram:user.instagram,
        twitter:user.twitter,
        facebook:user.facebook,
        tiktok:user.tiktok,
        youtube:user.youtube
    })
    return(
        <div className="EditProfile">
            <form>
                <div className="input-container">
                    <label>Instagram:</label>
                    <input 
                        type="text" 
                        placeholder="https://www.instagram.com/"
                        value="https://www.instagram.com/"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Twitter:</label>
                    <input 
                        type="text" 
                        placeholder="https://www.twitter.com/"
                        value="https://www.twitter.com/"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Facebook:</label>
                    <input 
                        type="text" 
                        placeholder="https://www.facebook.com/"
                        value="https://www.facebook.com/"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Tiktok:</label>
                    <input 
                        type="text" 
                        placeholder="https://www.tiktok.com/"
                        value="https://www.tiktok.com/@"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>YouTube:</label>
                    <input 
                        type="text" 
                        placeholder="https://www.youtube.com/"
                        value="https://www.youtube.com/"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Twitch:</label>
                    <input 
                        type="text" 
                        placeholder="https://www.Twitch.com/"
                        value="https://www.Twitch.com/"     
                        className="u-input"                            
                    />
                </div>
            </form>

        </div>
    )
}
export default ProfileSocial;