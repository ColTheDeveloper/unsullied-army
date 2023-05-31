import { useState } from "react"
import loadingGif3 from "../../Images/loading3.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addNewGameInfo } from "../../api/userRequest"
import { UAState } from "../../Context/uaDetailsProvider"
import { useNavigate } from "react-router-dom"
import jwtDecode from "jwt-decode"
import "./ProfileGamerStats.css"


const ProfileGamerStats=()=>{
    const [showInput,setShowInput]=useState(false)
    const {user,setToken,setUser}=UAState()
    const navigate=useNavigate()
    const [isLoading, setIsLoading]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")
    const [gameInfo,setGameInfo]=useState({
        id:user._id,
        gameName:"PUBG Mobile",
        gameIgn:"",
        gameId:""
    })
    const handleShowButton=()=>{
        setShowInput(!showInput)
        
    }

    const handleChange=(e)=>{
        setGameInfo({...gameInfo,[e.target.name]:e.target.value})
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        
        const {data}=await addNewGameInfo(gameInfo)
        

        if(data.message==="Update Failed" || data.message==="Game Already Has Details"){
            setErrorMessage(data.message)
            setIsLoading(false)
            return
        }else{
            setToken(data)
            const {user}=await jwtDecode(data.accessToken)
            setUser(user)
            localStorage.setItem("UAData",JSON.stringify({user,data:data.accessToken}))
            setIsLoading(false)
            navigate(`/${user.username}`)

        }
    }
    
    return(
        <div className="ProfileGamerStats">
            <div>
                {user.gameInfo.map((game)=>{
                    return(
                        <div>
                            <div><span>Game Name:</span><span>{game.gameName}</span></div>
                            <div><span>Game IGN:</span><span>{game.gameIgn}</span></div>
                            <div><span>Game ID:</span><span>{game.gameId}</span></div>

                        </div>
                    )
                })}
            </div>
            <div>
                <button onClick={handleShowButton} className="btn">Add Game Details</button>
            </div>
            {showInput &&
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Game Name:</label>
                        <select name="gameName" onChange={handleChange} value={gameInfo.gameName} className="u-input">
                            <option value="PUBG Mobile">PUBG Mobile</option>
                            <option value="COD Mobile">Call of Duty Mobile</option>
                            <option value="Free Fire">Free Fire</option>
                            
                        </select>
                    </div>
                    <div className="input-container">
                        <label>Game IGN:</label>
                        <input 
                            type="text"
                            className="u-input"
                            autoComplete="off"
                            name="gameIgn"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-container" >
                        <label>Game ID</label>
                        <input
                            type="text" 
                            className="u-input"
                            autoComplete="off"
                            name="gameId"
                            onChange={handleChange}
                    />
                    </div>
                    {errorMessage==="Update Failed" || errorMessage==="Game Already Has Details"?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> {errorMessage}</p>:""}
                    <button className={isLoading?"btn disabled-btn": "btn"} disabled={isLoading?true:false} type="submit">{isLoading &&<img src={loadingGif3} alt="loading" width="15" />}Create New Game Info</button>
                </form>
            }


        </div>
    )
}
export default ProfileGamerStats