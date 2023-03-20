import "./ProfileSocial.css"

const ProfileSocial=()=>{
    return(
        <div className="EditProfile">
            <form>
                <div className="input-container">
                    <label>Facebook:</label>
                    <input 
                        type="text" 
                        placeholder="http://www.facebook.com/"
                        value="http://www.facebook.com/"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Instagram:</label>
                    <input 
                        type="text" 
                        placeholder="http://www.instagram.com/"
                        value="http://www.instagram.com/"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Instagram:</label>
                    <input 
                        type="text" 
                        placeholder="http://www.twitter.com/"
                        value="http://www.twitter.com/"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Tiktok:</label>
                    <input 
                        type="text" 
                        placeholder="http://www.tiktok.com/"
                        value="http://www.tiktok.com/"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Twitch:</label>
                    <input 
                        type="text" 
                        placeholder="http://www.Twitch.com/"
                        value="http://www.Twitch.com/"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>YouTube:</label>
                    <input 
                        type="text" 
                        placeholder="http://www.youtube.com/"
                        value="http://www.youtube.com/"     
                        className="u-input"                            
                    />
                </div>
            </form>

        </div>
    )
}
export default ProfileSocial;