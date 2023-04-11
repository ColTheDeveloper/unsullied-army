import "./Register.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import countries from "../../data/countries.json";


const Register=()=>{
    const [showPassword, setShowPassword]=useState(false)
    const [passwordAvailable]=useState(true)
    const [isSelcted, setSelected]=useState(false)
    const [isAfrica, setIsAfrica]=useState(true)
    const [data,setData]=useState({
        first_name:"",
        Other_Name:"",
        surname:"",
        dob:"",
        email:"",
        country:"",
        username:"",
        gender:"male",
        password:"",
        confirmPassword:""

    })

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleCountry=(e)=>{
        setSelected(true)
        if(e.target.value==="false"){
            setIsAfrica(false)
            
        }
        if(e.target.value==="true"){
            setIsAfrica(true)
        }
        
    }

    const africanCountries=Object.values(countries).filter(key=>key.continent.includes("AF"))

    const otherCountries=Object.values(countries).filter(key=>!key.continent.includes("AF"))
    
    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,40}$/;

        if(data.first_name==="" ||data.Other_Name==="" ||data.surname==="" ||
        data.email==="" || data.gender==="" || data.username==="" || data.dob==="" ||
        data.country==="" || data.confirmPassword==="" || data.password===""){
            toast.error("Fields can't be empty")
            return;
        }
        if(data.password !== data.confirmPassword){
            toast.error("password mismatch")
            return;
        }
        if(!data.password.match(passw)){
            toast.error("Password must have an Upper Case, Lower Case, Number and Symbol")
            return;
        }
        console.log(data)
    }
    return(
        <>
        <div className="Register">
            <div>
                <h2>CREATE AN ACCOUNT</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>First Name:</label>
                        <input 
                            type="text" 
                            placeholder="John"     
                            name="first_name"
                            onChange={handleChange}
                            value={data.first_name}
                            className="u-input"                            
                        />
                    </div>
                    <div className="input-container">
                        <label>Other Name:</label>
                        <input 
                            type="text" 
                            placeholder="Jane" 
                            name="Other_Name"
                            onChange={handleChange}
                            value={data.Other_Name}      
                            className="u-input"                          
                        />
                    </div>
                    <div className="input-container">
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            placeholder="Doe"
                            name="surname"
                            onChange={handleChange}
                            value={data.surname}       
                            className="u-input"                          
                        />
                    </div>
                    <div className="input-container">
                        <label>Username:</label>
                        <input 
                            type="text" 
                            placeholder="JohnDoe200"
                            name="username"
                            onChange={handleChange}
                            value={data.username}      
                            className="u-input"                           
                        />
                    </div>
                    <div className="input-container">
                        <label>Email Address:</label>
                        <input 
                            type="text" 
                            placeholder="example@domain.com"
                            name="email"
                            onChange={handleChange}
                            value={data.email}   
                            className="u-input"                              
                        />
                    </div>
                    <div className="person">
                        <div>
                            <label>Gender:</label>
                            <select name="gender" onChange={(e)=>data.gender=e.target.value} className="u-input">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label>DOB:</label>
                            <input 
                                type="date" 
                                max="2007-01-01"
                                name="dob"
                                onChange={handleChange}
                                value={data.dob}
                                className="u-input"                                 
                            />
                        </div>

                    </div>
                    <div>
                        <label>Country:</label>
                        <input 
                            type="radio" 
                            value="true"   
                            name="country"
                            onChange={handleCountry}
                            className="u-input" 
                                                      
                        />&nbsp;African &nbsp; &nbsp;
                        <input 
                            type="radio"
                            value="false"
                            name="country"
                            onChange={handleCountry}
                            className="u-input"
                        />&nbsp;Other &nbsp; &nbsp;
                        {isSelcted?
                            isAfrica?
                            <select name="country" onChange={(e)=>data.country=e.target.value}>
                                {africanCountries.map((names)=>{
                                    return(
                                        <option key={names.name} value={names.name}>{names.name}</option>
                                    )
                                })}

                            </select>
                            :
                            <select name="country" onChange={(e)=>data.country=e.target.value} value={data.country}>
                                {otherCountries.map((names)=>{
                                    return(
                                        <option key={names.name} value={names.name}>{names.name}</option>
                                    )
                                })}

                            </select>
                        :""    
                        }
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password:</label>
                        <div className="pass">
                            <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                            <input 
                                type={showPassword?"text":"password"} 
                                placeholder={showPassword?"password":"********"}  
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                className="u-input"                               
                            />
                        </div>
                    </div>
                    {passwordAvailable &&
                        <div className="input-container">
                        <label htmlFor="password">Confirm Password:</label>
                        <div className="pass">
                            <FontAwesomeIcon onClick={handleShowPassword} icon={showPassword?"fa-solid fa-eye":"fa-solid fa-eye-slash"} />
                            <input 
                                type={showPassword?"text":"password"} 
                                placeholder={showPassword?"password":"********"}
                                name="confirmPassword"
                                onChange={handleChange}
                                value={data.confirmPassword}  
                                className="u-input"                               
                            />
                        </div>
                        </div>
                    }
                    <button className="btn" type="submit">Sign Up</button>
                </form>
                <h3>Already have an Account? <Link>Sign In</Link></h3>

            </div>
        </div>
        <ToastContainer />
        </>
    )
}
export default Register;