import { useEffect, useState } from "react";
import "./ForgetPassword.css"
import loadingGif3 from "../../Images/loading3.svg"
import { sendResetPasswordLink } from "../../api/userRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForgetPassword=()=>{
    const [userIdentity,setUserIdentity]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const [noticeMsg,setNoticeMsg]=useState("")
    const [error,setError]=useState(false)
    const [isSuccessful, setIsSuccessful]=useState(false)

    useEffect(()=>{
        setIsSuccessful(false)
        setNoticeMsg("")
        setError(false)
    },[userIdentity])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(userIdentity)
        setIsLoading(true)
        try {
            await sendResetPasswordLink(userIdentity)
            setNoticeMsg("Link has been Sent to your Mail,Click it to reset your password")
            setIsSuccessful(true)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setError(true)
            setNoticeMsg(error.response.data.message)
            setIsLoading(false)
            
        }



    }

    return(
        <div className="Login">
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Enter Username or Email Address:</label>
                        <input 
                            type="text"
                            value={userIdentity}
                            onChange={(e)=>setUserIdentity(e.target.value)}
                            name="userIdentity"
                            className="u-input"
                            placeholder="username or email address"
                        />
                        {error?<p className="err-text"><FontAwesomeIcon icon="fa-circle-exclamation" /> {noticeMsg}</p>:isSuccessful?<p className="sus-text"><FontAwesomeIcon icon="fa-check" /> {noticeMsg}</p>:""}
                    </div>
                    <button className={isLoading?"btn disabled-btn": "btn"} disabled={isLoading?true:false} type="submit">{isLoading &&<img src={loadingGif3} alt="loading" width="20" />}Email New Password</button>

                </form>
            </div>
        </div>
    )
}
export default ForgetPassword;