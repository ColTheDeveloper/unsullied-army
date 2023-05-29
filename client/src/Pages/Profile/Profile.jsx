import "./Profile.css"
//import { useEffect } from "react"
import profile from "../../Images/profile.jpg"
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
//import Follower from "../../Components/Follower/Follower"
//import Following from "../../Components/Following/following"
import { UAState } from "../../Context/uaDetailsProvider"
import {useState, useEffect } from "react"
import { getUserWithUsername } from "../../api/userRequest"
import Preloader from "../../Components/Preloader/Preloader"

const Profile=()=>{
    const {user,setIsLoading,isLoading}=UAState()
    //let pageUserInfo= {}
    let [pageUserInfo, setPageUserInfo]=useState({})
    const [isUser,setIsUser]=useState(false)
    const {username}=useParams()
    const navigate=useNavigate()
    
    useEffect(()=>{
        const checkUsername=async()=>{
            setIsLoading(true)
            try {
                const {data}=await getUserWithUsername(username)
                if(!data.alreadyExisted){
                    navigate("/404")
                }else{
                    console.log(data)
                    setPageUserInfo(data.foundUser)
                    // eslint-disable-next-line
                   //pageUserInfo=await data.foundUser
                }
                
                setIsLoading(false)
            } catch (error) {
                console.log(error)
                
            }
        }
        checkUsername()
        if(user._id===pageUserInfo._id){
            console.log("isUser")
            console.log(user,pageUserInfo)
                    
            setIsUser(true)

        }else{
            console.log("isNotUser")
            console.log(user,pageUserInfo)
            setIsUser(false)
        }
        // eslint-disable-next-line
    },[username])



    return(
        <>
        {isLoading ?
            <Preloader />
            :
            <div className="Profile">
                <div className="profile-card">
                    <img src={profile} alt={pageUserInfo.username} width="30"/>
                    <h2>{pageUserInfo.firstName} {pageUserInfo.otherName} {pageUserInfo.lastName}</h2>
                    {/* <p><span>Colakunleumaru@gmail.com</span></p> */}
                    <span>{pageUserInfo.username}</span>
                    {/*<div>
                        <Follower />
                        <div className="follower-line"/>
                        <Following />
                    </div> */}
                    {/*<button className="profile-action">Visitor Mode</button>*/}
                </div>
                {isUser ?
                    <div>
                        <NavLink to={`/${user.username}`}>General</NavLink>
                        <NavLink to="gamer-stat">Gamer Stats</NavLink>
                        <NavLink to="socials">Socials</NavLink>
                        <NavLink to="team">Teams</NavLink>
                        <NavLink to="security">Security</NavLink>
                    </div>
                    :
                    <div>
                        <NavLink>Home</NavLink>

                    </div>
                    }
                <Outlet />
            </div>
        }    
        </>
    )
}
export default Profile;