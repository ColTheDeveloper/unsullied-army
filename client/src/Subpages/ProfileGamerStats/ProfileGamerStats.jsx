import { useState } from "react"
import loadingGif3 from "../../Images/loading3.svg"


const ProfileGamerStats=()=>{
    const [showInput,setShowInput]=useState(false)
    const [isLoading, setIsLoading]=useState(false)
    const [gameInfo,setGameInfo]=useState({
        gameName:"PUBG Mobile",
        gameIgn:"",
        gameId:""
    })
    const handleShowButton=()=>{
        setShowInput(true)
        
    }

    const handleChange=(e)=>{
        setGameInfo({...gameInfo,[e.target.name]:e.target.value})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(gameInfo)
    }
    
    return(
        <div className="EditProfile">
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
                    <button className={isLoading?"btn disabled-btn": "btn"} disabled={isLoading?true:false} type="submit">{isLoading &&<img src={loadingGif3} alt="loading" width="15" />}Create New Game Info</button>
                </form>
            }


        </div>
    )
}
export default ProfileGamerStats