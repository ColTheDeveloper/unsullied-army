import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UAState } from "../../Context/uaDetailsProvider";
import './ToBeNamed.css'


const ToBeNamed=()=>{
    const {pageUserInfo}=UAState()
    const date=new Date(pageUserInfo.createdAt)
    const year=date.getFullYear()
    const month=date.toLocaleString('en-US',{month:"long"})

    const Arr=[1,2,3,4,56,6,7]
    return(
        <div className="ToBeNamed">
            <div id="first-section">
                <div className="bio">
                    <span>BIO:</span>
                    <span>{pageUserInfo.bio}</span>
                </div>
                <div className="about-me">
                    <span>ABOUT ME:</span>
                    <div>
                        <div><span>Member Since:</span><span>{month} {year}</span></div>
                        <div><span>Country:</span><span>{pageUserInfo.country}</span></div>
                        <div><span>Gender:</span><span>{pageUserInfo.gender}</span></div>
                    </div>
                    <div>
                        {pageUserInfo.instagram &&<a href={pageUserInfo.instagram}><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>}
                        {pageUserInfo.twitter &&<a href={pageUserInfo.twitter}><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>}
                        {pageUserInfo.facebook &&<a href={pageUserInfo.facebook}><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>}
                        {pageUserInfo.tiktok &&<a href={pageUserInfo.tiktok}><FontAwesomeIcon icon="fa-brands fa-tiktok" /></a>}
                        {pageUserInfo.youtube &&<a href={pageUserInfo.youtube}><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>}
                        {pageUserInfo.twitch &&<a href={pageUserInfo.twitch}><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>}
                    </div>
                    
                </div>
            </div>
            <div id="second-section">
                <div>
                    <span>TEAMS</span>
                    {Arr.map((Array)=>{
                        return(
                            <div>
                            
                            </div>
                        )
                    })}
                    <div>

                    </div>
                </div>

            </div>

        </div>

    )
}
export default ToBeNamed;