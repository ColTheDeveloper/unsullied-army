import "./Profile.css"
import profile from "../../Images/profile.jpg"
import { NavLink, Outlet } from "react-router-dom"

const Profile=()=>{
    return(
        <div className="Profile">
            <div className="profile-card">
                <img src={profile} alt="usernae" width="30"/>
                <h2>Aremu Olakunle</h2>
                <span>ColWebDev</span>
                <div>
                    <div className="follow-wrapper">
                        <span>200</span>
                        <span>Followers</span>
                    </div>
                    <div className="follower-line"/>
                    <div className="follow-wrapper">
                        <span>400</span>
                        <span>Following</span>
                    </div>
                </div>
                <button>Visitor Mode</button>
            </div>
            <div>
                <NavLink to="gamer-stat">Gamer Stats</NavLink>
                <NavLink to="/profile/id">General</NavLink>
                <NavLink to="socials">Socials</NavLink>
                <NavLink to="team">Teams</NavLink>
                <NavLink to="security">Security</NavLink>
            </div>
            <Outlet />

        </div>
    )
}
export default Profile