import "./UpdateTeam.css"
import "../CreateTeam/CreateTeam.css"

import Popup from "reactjs-popup"
import { useState,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import teamLogo from "../../Images/team-logo.png";

const UpdateTeam=()=>{
    const imageRef=useRef()
    const [showPassword, setShowPassword]=useState(false)

    const changeImage=()=>{
        imageRef.current.click()

    }

    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }
    return(
        <Popup
            trigger={<span>Update Team</span>}
            modal
        >
            {close=>(
                <div className="modal">
                    <button className="close" onClick={close}>
                        X
                    </button>
                    <div className="header">Edit Team</div>
                    <div className="content create-team">
                        <img onClick={changeImage} src={teamLogo} alt="team" />
                        <form>
                            <input className="hiddenInput" type="file" ref={imageRef}/>
                            <div className="input-container">
                                <label>Team Name:</label>
                                <input className="u-input" type="text" />
                            </div>
                            <div>
                                <label>Team Game:</label>
                                <select>
                                    <option>------</option>
                                    <option>PUBG Mobile</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <label htmlFor="password">Password:</label>
                                <div className="pass">
                                    <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                                    <input 
                                        type={showPassword?"text":"password"} 
                                        placeholder={showPassword?"password":"********"}  
                                        className="u-input"                               
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn">Create Team</button>
                            <button type="submit" className="danger-btn">Delete Team</button>
                        </form>

                    </div>

                </div>
            )}

        </Popup>
    )
}
export default UpdateTeam;