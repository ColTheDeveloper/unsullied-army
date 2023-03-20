import "../Follower/Follower.css"
import Popup from "reactjs-popup"
import profile from "../../Images/profile.jpg"
import { Link } from "react-router-dom"

const Following=()=>{
    return(
        <Popup
            trigger={<div className="follow-wrapper">
                        <span>400</span>
                        <span>Following</span>
                    </div>
            }
            modal
        >
            {close=>(
                <div className="modal">
                    <button className="close" onClick={close}>
                        X
                    </button>
                    <div className="header">Followering</div>
                    <div className="content">
                        <div className="follow-card">
                            <div>
                                <img src={profile} alt="profile" />
                                <div className="follow-name">
                                    <span><Link to="/profile/id">Aremu Olakunle</Link></span>
                                    <span>Colwebdev</span>
                                </div>
                            </div>
                            <div>
                                <button className="profile-action">Following</button>
                            </div>    
                        </div>
                        <div className="follow-card">
                            <div>
                                <img src={profile} alt="profile"/>
                                <div className="follow-name">
                                    <span><Link to="/profile/id">Aremu Olakunle</Link></span>
                                    <span>Colwebdev</span>
                                </div>
                            </div>
                            <div>
                                <button className="profile-action">Following</button>
                            </div>    
                        </div>
                        <div className="follow-card">
                            <div>
                                <img src={profile} alt="profile" />
                                <div className="follow-name">
                                    <span><Link to="/profile/id">Aremu Olakunle</Link></span>
                                    <span>Colwebdev</span>
                                </div>
                            </div>
                            <div>
                                <button className="profile-action">Following</button>
                            </div>    
                        </div>

                    </div>
                </div>
            )}

        </Popup>
    )
}
export default Following        