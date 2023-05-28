import "./Register.css"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate,useLocation } from "react-router-dom";
import countries from "../../data/countries.json";
import { checkUsernameUniqueness, registerUser } from "../../api/userRequest";
import { UAState } from "../../Context/uaDetailsProvider";
//import loadingGif from "../../Images/mainLoading.gif"
//import loadingGif2 from "../../Images/loading2.svg"
import loadingGif3 from "../../Images/loading3.svg"
import jwtDecode from "jwt-decode";


const Register=()=>{
    const [showPassword, setShowPassword]=useState(false)
    const [passwordAvailable,setPasswordAvailable]=useState(false)
    const [isSelcted, setSelected]=useState(false)
    const [isAfrica, setIsAfrica]=useState(true)
    const [isLoading, setIsLoading]= useState(false)
    const [usernameChecking, setUsernameChecking]=useState(false)
    const [usernameIsUnique, setUsernameIsUnique]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")
    const [isTypingUsername,setIsTypingUsername]=useState(false)
    const {setUser,setToken}=UAState()
    const navigate=useNavigate()
    const location=useLocation()
    const [emptyError,setEmptyError]=useState(false)
    const [passwordMismatchError,setPasswordMismatchError]=useState(false)
    const [passwordNotComplete,setPasswordNotComplete]=useState(false)
    const [formData,setFormData]=useState({
        firstName:"",
        otherName:"",
        lastName:"",
        dob:"",
        email:"",
        country:"",
        username:"",
        gender:"male",
        password:"",
        confirmPassword:""
    })

    const from= location.state?.from?.pathname || "/"

    useEffect(()=>{
        //if password input doesn't have anything in it,it won't show confirm password input
        //but if the opposite,it will show confirm password input
        if(formData.password!==""){
            setPasswordAvailable(true)
        }else{
            setPasswordAvailable(false)
        }
    },[formData.password])

    useEffect(()=>{
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,40}$/;
        if(formData.password.match(passw)){
            setPasswordNotComplete(false)
        }
    },[formData.password])

    useEffect(()=>{
        if(formData.password===formData.confirmPassword){
            setPasswordMismatchError(false)
        }
    },[formData.password ,formData.confirmPassword])


    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleCheckUsername=async(e)=>{
        setIsLoading(true)
        setUsernameChecking(true)
        setIsTypingUsername(true)
        const username=e.target.value
        console.log(username)

        try {
            const {data}=await checkUsernameUniqueness(username)
            console.log(data.isUnique)  
            setUsernameIsUnique(data.isUnique)
            setUsernameChecking(false)
            setErrorMessage(data.message)
            console.log(data.message)
            if(data.message==="")setIsLoading(false)
        } catch (error) {
            console.log(error.response)
            setUsernameChecking(false)  
            setUsernameIsUnique(error.response.data.isUnique)  
        }
    }

    // const handleCountry=(e)=>{
    //     setSelected(true)
    //     if(e.target.value==="false"){
    //         setIsAfrica(false)
            
    //     }
    //     if(e.target.value==="true"){
    //         setIsAfrica(true)
    //     }
        
    // }
    // useEffect(()=>{
    //     if(user){
    //         navigate("/")
    //     }
    // },[navigate,user])

    const africanCountries=Object.values(countries).filter(key=>key.continent.includes("AF"))

    const otherCountries=Object.values(countries).filter(key=>!key.continent.includes("AF"))
    
    const handleShowPassword=()=>{
        setShowPassword(!showPassword)
    }
    const handleSubmit= async(e)=>{
        setIsLoading(true)
        e.preventDefault()
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,40}$/;

        if(formData.firstName==="" ||formData.otherName==="" ||formData.lastName==="" ||
        formData.email==="" || formData.gender==="" || formData.username==="" || formData.dob==="" ||
        formData.country==="" || formData.confirmPassword==="" || formData.password===""){
            setEmptyError(true)
            toast.error("Registration Failed")
            setIsLoading(false)
            return;
        }
        if(formData.password !== formData.confirmPassword){
            setPasswordMismatchError(true)
            toast.error("Registration Failed")
            setIsLoading(false)
            return;
        }
        if(!formData.password.match(passw)){
            setPasswordNotComplete(true)
            toast.error("Registration Failed")
            setIsLoading(false)
            return;
        }

        try {
            const {data}=await registerUser(formData)
            setToken(data)
            const {user}=await jwtDecode(data)
            setUser(user)
            localStorage.setItem("UAData",JSON.stringify({user,data}))
            setIsLoading(false)
            navigate(from, {replace:true})

        } catch (error) {
            toast.error("Registration Failed")
            setIsLoading(false)
            
        }
        
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
                            name="firstName"
                            onChange={handleChange}
                            value={formData.firstName}
                            className={emptyError&&formData.firstName===""?"u-input err-input": "u-input"}     
                                                   
                        />
                        {emptyError&&formData.firstName===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> First Name Field can't be Empty</p>:""}
                        
                    </div>
                    <div className="input-container">
                        <label>Other Name:</label>
                        <input 
                            type="text" 
                            placeholder="Jane" 
                            name="otherName"
                            onChange={handleChange}
                            value={formData.otherName}      
                            className={emptyError&&formData.otherName===""?"u-input err-input": "u-input"} 
                        />
                        {emptyError&&formData.otherName===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Other Name Field can't be Empty</p>:""}

                    </div>
                    <div className="input-container">
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            placeholder="Doe"
                            name="lastName"
                            onChange={handleChange}
                            value={formData.lastName}       
                            className={emptyError&&formData.lastName===""?"u-input err-input": "u-input"}  
                        />
                        {emptyError&&formData.lastName===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Last Name Field can't be Empty</p>:""}
                    </div>
                    <div className="input-container">
                        <label>Username:</label>
                        <div className="pass">
                            
                            {usernameChecking?<img width="20" src={loadingGif3} alt="loading"/>:isTypingUsername &&<FontAwesomeIcon icon={usernameIsUnique?"fa-check":"fa-xmark"} />}

                            <input 
                                type="text" 
                                placeholder="JohnDoe200"
                                name="username"
                                onChange={handleChange}
                                onChangeCapture={handleCheckUsername}
                                value={formData.username}      
                                autoComplete="off"
                                className={emptyError&&formData.username===""?"u-input err-input": "u-input"}
                                                        
                            />
                        </div>
                        {emptyError&&formData.username===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" />  Username Field can't be Empty</p>:""}
                        {errorMessage===""?"":<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> {errorMessage}</p>}
                    </div>
                    <div className="input-container">
                        <label>Email Address:</label>
                        <input 
                            type="email" 
                            placeholder="example@domain.com"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}   
                            className={emptyError&&formData.email===""?"u-input err-input": "u-input"}
                                                       
                        />
                        {emptyError&&formData.email===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Email Address Field can't be Empty</p>:""}
                    </div>
                    <div className="person">
                        <div>
                            <label>Gender:</label>
                            <select name="gender" onChange={(e)=>formData.gender=e.target.value} className="u-input">
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
                                value={formData.dob}
                                className="u-input"          
                                                       
                            />
                            {emptyError&&formData.dob===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> DOB Field can't be Empty</p>:""}
                        </div>
                    </div>
                    <div>
                        <label>Country:</label>
                        <input 
                            type="radio" 
                            value="false"   
                            name="country"
                            onClick={(e)=>{e.target.value="true"; formData.country="Angola"; setSelected(true); setIsAfrica(true)}}
                            
                            className="u-input" 
                                                      
                        />&nbsp;African &nbsp; &nbsp;
                        <input 
                            type="radio"
                            value="false"
                            name="country"
                        
                            onClick={(e)=>{e.target.value="true"; formData.country="Andorra";setSelected(true); setIsAfrica(false)}}
                            className="u-input"
                        />&nbsp;Other &nbsp; &nbsp;
                        {isSelcted?
                            isAfrica?
                            <select name="country" onChange={(e)=>formData.country=e.target.value}>
                                {africanCountries.map((names)=>{
                                    return(
                                        <option key={names.name} value={names.name}>{names.name}</option>
                                    )
                                })}

                            </select>
                            :
                            <select name="country" onChange={(e)=>formData.country=e.target.value} value={formData.country}>
                                {otherCountries.map((names)=>{
                                    return(
                                        <option key={names.name} value={names.name}>{names.name}</option>
                                    )
                                })}

                            </select>
                        :""    
                        }
                        {emptyError&&formData.country===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Country Field can't be Empty</p>:""}
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
                                value={formData.password}
                                className={(emptyError ||passwordNotComplete)&&formData.password===""?"u-input err-input": "u-input"} 
                                                      
                            />
                            
                        </div>
                        {passwordNotComplete?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> The password must be at least 8 characters long. The password must consist of an Upper Case Letter, a Lower Case Letter, a Number and a Symbol.</p>:""}
                        {emptyError&&formData.password===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Password Field can't be Empty</p>:""}
                        
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
                                    value={formData.confirmPassword}  
                                    className={(emptyError||passwordMismatchError)&&formData.confirmPassword===""?"u-input err-input": "u-input"}
                                                              
                                />
                            </div>
                            {passwordMismatchError?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Password doesn't match with Confirm Password</p>:""}
                            {emptyError&&formData.confirmPassword===""?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> Confirm Password Field can't be Empty</p>:""}
                            
                        </div>
                        
                    }
                    <button className={isLoading?"btn disabled-btn": "btn"} disabled={isLoading?true:false} type="submit">{isLoading &&<img src={loadingGif3} alt="loading" width="15" />}Sign Up</button>
                </form>
                <h3>Already have an Account? <Link to="/login">Sign In</Link></h3>

            </div>
        </div>
        <ToastContainer />
        </>
    )
}
export default Register;