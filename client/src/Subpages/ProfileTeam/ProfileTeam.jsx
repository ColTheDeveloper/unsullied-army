import CreateTeam from "../../Components/CreateTeam/CreateTeam"
import "./ProfileTeam.css"

const ProfileTeam=()=>{
    const user={
        name:"Aremu Olakunle",
        team:""

    }
    if(user.team===""){
        return(
            <div className="no-team">
                <h3>You don't have a team</h3>
                <CreateTeam />
                <button className="btn">Join a Team</button>
            </div>
        )
    }else{
        return(
            <div>
                <div>
                    <img src="" alt="" />
                    <h2>Die Hard Gaming</h2>
                    <p>this is created for all winners</p>    
                </div>

            </div>
        )
    }
    
}
export default ProfileTeam;