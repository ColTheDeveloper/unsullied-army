import "./TeamSocial.css"

const TeamSocial=()=>{
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
                        placeholder="https://www.Facebook.com/"
                        value="https://www.facebook.com/"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Tiktok:</label>
                    <input 
                        type="text" 
                        placeholder="https://www.tiktok.com/@"
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
                    <label>Boardsider:</label>
                    <input 
                        type="text" 
                        placeholder="https://www.boardsider.com/"
                        value="https://www.boardsider.com/"     
                        className="u-input"                            
                    />
                </div>
            </form>
        </div>
    )
}
export default TeamSocial