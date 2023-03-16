import "./Profile.css"
import profile from "../../Images/profile.jpg"
import { NavLink, Outlet } from "react-router-dom"

const Profile=()=>{
    return(
        <div className="Profile">
            <div className="profile-card">
                <img src={profile} alt="usernae" width="30"/>
                <h2>Aremu Olakunle</h2>
                <p>colakunleumaru@gmail.com</p>
                <span>ColWebDev</span>
            </div>
            <div>
                <NavLink to="/profile/id/">General</NavLink>
                <NavLink to="social">Socials</NavLink>
                <NavLink to="team">Teams</NavLink>
                <NavLink to="security">Security</NavLink>
            </div>
            <Outlet />

        </div>
    )
}
export default Profile