import Popup from "reactjs-popup";
import profile from "../../Images/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UAState } from "../../Context/uaDetailsProvider";


const NavProfile=()=>{
    const {user}=UAState()
    if(user){
        return(
            <Popup    
                trigger={open => (<div className="profile-modal">
                <img src={profile} alt="username"  width="30"/>
                <FontAwesomeIcon icon={"fa-caret-down"} />
            </div>)}    
                position="left top"    
                closeOnDocumentClick  
                arrow={false}
            >    
                <div className="NavProfile">
                    <div>
                        
                    </div>
                </div>
            </Popup>
        )

    }else{
        return(
            <Popup    
                trigger={open => (<div className="profile-modal">
                <img src={profile} alt="username"  width="30"/>
                <FontAwesomeIcon icon={"fa-caret-down"} />
            </div>)}    
                position="left top"    
                closeOnDocumentClick  
            >    
                <div className="NavProfile">
                </div>
            </Popup>
        )

    }
    
}
export default NavProfile;