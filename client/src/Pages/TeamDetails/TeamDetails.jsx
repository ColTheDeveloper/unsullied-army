import "./TeamDetails.css"

import { NavLink, Outlet } from "react-router-dom";

import teamLogo from "../../Images/team-logo.png" 
import UpdateTeam from "../../Components/UpdateTeam/UpdateTeam";

const TeamDetails=()=>{
    return(
        <div className="TeamDetails">
        {/* PROFILE CARD CSS STYLING IS IN PROFILE.CSS */}
            <div className="profile-card">
                <img src={teamLogo} alt="usernae" width="30"/>
                <h2>Die Hard Gaming</h2>
                <p>You either play to win or take your ass back home</p>
            </div>
            <div>
                <NavLink to="/team/team-name">Events</NavLink>
                <NavLink to="members">Members</NavLink>
                <UpdateTeam />
            </div>
            <Outlet />
        </div>
    )
}
export default TeamDetails;