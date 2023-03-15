import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//importibg the unsullied army logo from images folder
import unsulliedLogo from "../../Images/Logo.PNG"
// import profile from "../../Images/profile.jpg"
import { useState } from "react"



const Navbar=()=>{
    const [navIsOpen, setNavIsOpen]=useState(false)

    const user= true

    const handleNav=()=>{
        setNavIsOpen(!navIsOpen)
    }
    return(
        <div className="Navbar">
            <Link to="/"><img src={unsulliedLogo} alt="Unsullied-Army" width="200"/></Link>
            
            <nav style={navIsOpen?{right:"3%"}:{right:"-1000px"}}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="teams">Teams</NavLink>
                <NavLink to="about">About</NavLink>
                {user?
                    <>
                    <NavLink to="profile">My Profile</NavLink>
                    <NavLink to="logout">Log Out</NavLink>
                    </>
                :
                    <>
                    <NavLink to="login">Sign In</NavLink>
                    <NavLink to="register">Sign Up</NavLink>
                    </>    
                }
                
            </nav>
            {/* <div>
                <img src={profile} alt="username"  width="30"/>
                <FontAwesomeIcon icon="fa-solid fa-caret-down" />
            </div> */}
            <FontAwesomeIcon className="icon" onClick={handleNav} icon={navIsOpen?"fa-solid fa-bars-staggered": "fa-solid fa-bars"} />

        </div>
    )
}

export default Navbar