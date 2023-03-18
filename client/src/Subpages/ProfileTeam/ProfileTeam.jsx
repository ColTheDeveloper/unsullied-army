import CreateTeam from "../../Components/CreateTeam/CreateTeam"
import "./ProfileTeam.css"
import teamLogo from "../../Images/team-logo.png"
import { Link } from "react-router-dom"

const ProfileTeam=()=>{
    const user={
        name:"Aremu Olakunle",
        team:true

    }
    return(
        <div className="ProfileTeam">
            <div>
                {user.team?
                    <div className="team-card-wrapper">

                        <div className="team-card">
                            <Link to="/team/team-name">
                                <img src={teamLogo} alt="team" />
                                <h2>Die Hard Gaming</h2>
                                <p>You either play to win or take your ass back home</p>
                            </Link>
                        </div>
                        <div className="team-card">
                            <Link>
                                <img src={teamLogo} alt="team" />
                                <h2>Unsullied Army</h2>
                                <p>You either play to win or take your ass back home</p>
                            </Link>
                        </div>
                        <div className="team-card">
                            <Link>
                                <img src={teamLogo} alt="team" />
                                <h2>Unsullied Army</h2>
                                <p>You either play to win or take your ass back home</p>
                            </Link>
                        </div>

                    </div>
                :
                    <div  className="no-team">
                        <h3>You don't have a team</h3>
                    </div>    
                }
            </div>
            <div>
                <CreateTeam />
                <button className="btn">Join a Team</button>
            </div>
            
        </div>
    )
    // if(user.team===""){
    //     return(
    //         <div className="no-team">
    //             <h3>You don't have a team</h3>
    //             <CreateTeam />
    //             <button className="btn">Join a Team</button>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             <div>
    //                 <img src="" alt="" />
    //                 <h2>Die Hard Gaming</h2>
    //                 <p>this is created for all winners</p>    
    //             </div>

    //         </div>
    //     )
    // }
    
}
export default ProfileTeam;