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
                <button className="btn">Create Team</button>
            </div>
        )
    }else{
        return(
            <div>

            </div>
        )
    }
    
}
export default ProfileTeam;