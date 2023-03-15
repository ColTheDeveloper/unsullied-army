import "./EditProfile.css"

const EditProfile=()=>{
    return(
        <div className="EditProfile">
            <form>
                <div className="input-container">
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        placeholder="John"     
                        className="u-input"                            
                    />
                </div>
                <div className="input-container">
                    <label>Other Name:</label>
                    <input 
                        type="text" 
                        placeholder="Jane"       
                        className="u-input"                          
                    />
                </div>
                <div className="input-container">
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        placeholder="Doe"       
                        className="u-input"                          
                    />
                </div>
                <div className="input-container">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        placeholder="JohnDoe200"      
                        className="u-input"                           
                    />
                </div>
                <div className="input-container">
                    <label>Email Address:</label>
                    <input 
                        type="text" 
                        placeholder="example@domain.com"   
                        className="u-input"                              
                    />
                </div>
                <div className="input-container">
                    <label>Gender:</label>
                    <input 
                        type="text" 
                        placeholder="example@domain.com"
                        value="Male"   
                        className="u-input"                              
                    />
                </div>
                <div className="input-container">
                    <label>DOB:</label>
                    <input 
                        type="text" 
                        placeholder="example@domain.com"
                        value="2000-02-07"   
                        className="u-input"                              
                    />
                </div>
                <div className="input-container">
                    <label>Country:</label>
                    <input 
                        type="text" 
                        placeholder="example@domain.com"
                        value="Nigeria"   
                        className="u-input"                              
                    />
                </div>
                <div className="input-container">
                    <label>Bio:</label>
                    <textarea className="u-input"></textarea>
                </div>
                <div>
                    <label>Avatar:</label>
                    <input 
                        type="file"
                        className="u-input"
                        
                    />
                </div>
                <button className="btn" type="submit">Update Account</button>
                
            </form>

        </div>
    )
}
export default EditProfile;