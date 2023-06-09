import "./Profile.css"
import profile from "../../Images/profile.jpg"
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
//import Follower from "../../Components/Follower/Follower"
//import Following from "../../Components/Following/following"
import { UAState } from "../../Context/uaDetailsProvider"
import {useState, useEffect } from "react"
import Preloader from "../../Components/Preloader/Preloader"
//import axios from "axios"
import useAxios from "../../hooks/useAxios"

const Profile=()=>{
    const {user,pageUserInfo,setPageUserInfo}=UAState()
    //let pageUserInfo= {}
    //const [pageUserInfo, setPageUserInfo]=useState({})
    const API=useAxios()
    const [isLoading, setIsLoading]=useState(true)
    const {username}=useParams()
    const navigate=useNavigate()

    
    
    
    useEffect(()=>{
        const checkUsername=async()=>{
            setIsLoading(true)
            try {
                //const {data}=await axios.post(`${apiUrl}/api/user/getUserWithUsername`, {username})
                const {data}= await API.post("/api/user/getUserWithusername", {username})
                if(!data.alreadyExisted){
                    navigate("/404")
                }else{
                    setPageUserInfo(data.foundUser)
                }
                
                setIsLoading(false)
            } catch (error) {
                console.log(error)
                
            }
            
        }
        checkUsername()

        // eslint-disable-next-line
    },[username])

    

    // console.log(pageUserInfo)

    // console.log(pageUserInfo._id)
    // console.log(user._id)


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
                {pageUserInfo._id===user?._id ?
                    <div>
                        <NavLink to={`/${user?.username}`}>Info</NavLink>
                        <NavLink to='general'>General</NavLink>
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