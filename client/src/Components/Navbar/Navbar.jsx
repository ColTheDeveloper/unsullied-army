import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import NavProfile from "../NavProfile/NavProfile"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//importibg the unsullied army logo from images folder
import unsulliedLogo from "../../Images/Logo.PNG"

import { useState } from "react"
import { UAState } from "../../Context/uaDetailsProvider"



const Navbar=()=>{
    const [navIsOpen, setNavIsOpen]=useState(false)
    const {user,setUser}=UAState()

    const handleNav=()=>{
        setNavIsOpen(!navIsOpen)
    }
    
    return(
        <div className="Navbar">
            <Link to="/"><img src={unsulliedLogo} alt="Unsullied-Army" width="200"/></Link>
            
            <div>
                <nav style={navIsOpen?{right:"3%"}:{right:"-1000px"}}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="teams">Events</NavLink>
                    <NavLink to="blog">Blog</NavLink>
                    <NavLink to="recruit">Recruitment</NavLink>
                    <NavLink to="store">Store</NavLink>
                    <NavLink to="about">About </NavLink>
                </nav>
                <NavProfile />
                {/*<div className="profile-modal">
                    <img src={profile} alt="username"  width="30"/>
                    <FontAwesomeIcon icon={"fa-caret-down"} />
                </div>*/}
            </div>
            <FontAwesomeIcon className="icon" onClick={handleNav} icon={navIsOpen?"fa-solid fa-bars-staggered": "fa-solid fa-bars"} />

        </div>
    )
}

export default Navbar