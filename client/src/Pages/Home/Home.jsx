import Carousel from "../../Components/Carousel/Carousel";
import "./Home.css"
import { UAState } from "../../Context/uaDetailsProvider";

const Home=()=>{
    const {user}=UAState()
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    return(
        <div className="Home">
            <Carousel />

        </div>
    )
}
export default Home;