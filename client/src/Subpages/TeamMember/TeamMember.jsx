import "./TeamMember.css"

import profile from "../../Images/profile.jpg"
import { Link } from "react-router-dom";

const TeamMember=()=>{
    return(
        <div className="TeamMember">
            <div className="y-line-wrapper">
                <div className="y-line"></div>
                <h2>Members</h2>
            </div>
            <div className="member-card-wrapper">
                <div className="member-card">
                    <Link to="/profile/id">
                        <img src={profile} alt="name" />
                        <h3>Aremu Olakunle</h3>
                        <p>Leader</p>
                    </Link>
                </div>
                <div className="member-card">
                    <Link to="/profile/id">
                        <img src={profile} alt="name" />
                        <h3>Aremu Olakunle</h3>
                        <p>Member</p>
                    </Link>
                </div>
                <div className="member-card">
                    <Link to="/profile/id">
                        <img src={profile} alt="name" />
                        <h3>Aremu Olakunle</h3>
                        <p>Member</p>
                    </Link>
                </div>
                <div className="member-card">
                    <Link to="/profile/id">
                        <img src={profile} alt="name" />
                        <h3>Aremu Olakunle</h3>
                        <p>Member</p>
                    </Link>
                </div>
                <div className="member-card">
                    <Link>
                        <img src={profile} alt="name" />
                        <h3>Aremu Olakunle</h3>
                        <p>Member</p>
                    </Link>
                </div>
                <div className="member-card">
                    <Link>
                        <img src={profile} alt="name" />
                        <h3>Aremu Olakunle</h3>
                        <p>Member</p>
                    </Link>
                </div>
                <div className="member-card">
                    <Link>
                        <img src={profile} alt="name" />
                        <h3>Aremu Olakunle</h3>
                        <p>Member</p>
                    </Link>
                </div>
                <div className="member-card">
                    <Link>
                        <img src={profile} alt="name" />
                        <h3>Aremu Olakunle</h3>
                        <p>Member</p>
                    </Link>
                </div>
                
            </div>



        </div>
    )
}
export default TeamMember;