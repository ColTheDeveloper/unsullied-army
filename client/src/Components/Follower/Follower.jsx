import Popup from "reactjs-popup";
import "./Follower.css"
import profile from "../../Images/profile.jpg"

const Follower=()=>{
    return(
        <Popup
            trigger={<div className="follow-wrapper">
                        <span>200</span>
                        <span>Followers</span>
                    </div>
            }
            modal
        >
            {close=>(
                <div className="modal">
                    <button className="close" onClick={close}>
                        X
                    </button>
                    <div className="header">Followers</div>
                    <div className="content">
                        <div className="follow-card">
                            <div>
                                <img src={profile} alt="profile" />
                                <div className="follow-name">
                                    <span>Aremu Olakunle</span>
                                    <span>Colwebdev</span>
                                </div>
                            </div>
                            <div>
                                <button className="profile-action">Follow</button>
                            </div>    
                        </div>
                        <div className="follow-card">
                            <div>
                                <img src={profile} alt="profile"/>
                                <div className="follow-name">
                                    <span>Aremu Olakunle</span>
                                    <span>Colwebdev</span>
                                </div>
                            </div>
                            <div>
                                <button className="profile-action">Follow</button>
                            </div>    
                        </div>
                        <div className="follow-card">
                            <div>
                                <img src={profile} alt="profile" />
                                <div className="follow-name">
                                    <span>Aremu Olakunle</span>
                                    <span>Colwebdev</span>
                                </div>
                            </div>
                            <div>
                                <button className="profile-action">Follow</button>
                            </div>    
                        </div>

                    </div>
                </div>
            )}

        </Popup>
    )
}
export default Follower;