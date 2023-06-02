import Popup from "reactjs-popup";
import profile from "../../Images/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UAState } from "../../Context/uaDetailsProvider";
import { Link } from "react-router-dom";

import "./NavProfile.css"
import { logoutUser } from "../../api/userRequest";


const NavProfile=()=>{
    const {user,setUser,setToken}=UAState()
    const logout=async()=>{
        try {
            const data=await logoutUser()
            console.log(data)
            localStorage.removeItem("UAData")
            await setUser(null)
            await setToken(null)
        } catch (error) {
            console.log(error)
            
        }
    }
    return(
        <Popup    
            trigger={open => (<div className="profile-modal">
            <img src={profile} alt="username"  width="30"/>
            <FontAwesomeIcon icon={"fa-caret-down"} />
        </div>)}    
            position="bottom center"    
            closeOnDocumentClick  
            arrow={false}
            menu
        >    
            <div className="NavProfile">
                <Link to={`/${user.username}`}><p>Profile</p></Link>
                <Link to={`/${user.username}/team`}><p>My Teams</p></Link>
                <Link><p>My Order</p></Link>
                <Link><p>Tools</p></Link>
                <p onClick={logout}>LogOut</p>
            </div>
        </Popup>
    )
    
}
export default NavProfile;