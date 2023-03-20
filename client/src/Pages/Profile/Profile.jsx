import "./Profile.css"
import profile from "../../Images/profile.jpg"
import { NavLink, Outlet } from "react-router-dom"
import Follower from "../../Components/Follower/Follower"
import Following from "../../Components/Following/following"

const Profile=()=>{
    return(
        <div className="Profile">
            <div className="profile-card">
                <img src={profile} alt="usernae" width="30"/>
                <h2>Aremu Olakunle</h2>
                <p><span>Colakunleumaru@gmail.com</span></p>
                <span>ColWebDev</span>
                <div>
                    <Follower />
                    <div className="follower-line"/>
                    <Following />
                </div>
                <button className="profile-action">Visitor Mode</button>
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