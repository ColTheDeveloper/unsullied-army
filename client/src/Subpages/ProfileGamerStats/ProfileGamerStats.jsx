
const ProfileGamerStats=()=>{
    const handleShowButton=()=>{
        
    }
    
    return(
        <div className="EditProfile">
            <div>
                <button onClick={handleShowButton} className="btn">Add Game Details</button>
            </div>
            <form>
                <div className="input-container">
                    <label>Game Name:</label>
                    <select  className="u-input">
                        <option>PUBG Mobile</option>
                        <option>Call of Duty Mobile</option>
                        <option>Free Fire</option>
                    </select>
                </div>
                <div className="input-container">
                    <label>Game IGN:</label>
                    <input 
                        type="text"
                        className="u-input"
                         
                    />
                </div>
                <div className="input-container" >
                    <label>Game ID</label>
                    <input
                        type="text" 
                        className="u-input"
                   />
                </div>
            </form>


        </div>
    )
}
export default ProfileGamerStats