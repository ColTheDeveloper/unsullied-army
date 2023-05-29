import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UAState } from "../../Context/uaDetailsProvider";


const ToBeNamed=()=>{
    const {pageUserInfo}=UAState()
    return(
        <div className="ToBeNamed">
            <div >
                <span>Bio:</span>
                <p>I Am A Gamer</p>
            </div>
            <div>
                <span>Socials</span>
                <div>
                    <a href={pageUserInfo.instagram}><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                    <a href={pageUserInfo.twitter}><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                    <a href={pageUserInfo.facebook}><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                    <a href={pageUserInfo.tiktok}><FontAwesomeIcon icon="fa-brands fa-tiktok" /></a>
                    <a href={pageUserInfo.youtube}><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                    <a href={pageUserInfo.twitch}><FontAwesomeIcon icon="fa-brands fa-twitch" /></a>
                </div>
            </div>
            <div>

            </div>

        </div>

    )
}
export default ToBeNamed;