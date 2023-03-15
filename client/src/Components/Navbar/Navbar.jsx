import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//importibg the unsullied army logo from images folder
import unsulliedLogo from "../../Images/Logo.PNG"
import { useState } from "react"



const Navbar=()=>{
    const [navIsOpen, setNavIsOpen]=useState(false)

    const handleNav=()=>{
        setNavIsOpen(!navIsOpen)
    }
    return(
        <div className="Navbar">
            <Link to="/"><img src={unsulliedLogo} alt="Unsullied-Army" width="200"/></Link>
            <FontAwesomeIcon className="icon" onClick={handleNav} icon={navIsOpen?"fa-solid fa-bars-staggered": "fa-solid fa-bars"} />
            <nav style={navIsOpen?{right:"3%"}:{right:"-1000px"}}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="teams">Teams</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="login">Sign In</NavLink>
                <NavLink to="register">Sign Up</NavLink>
            </nav>

        </div>
    )
}

export default Navbar