import { Swiper, SwiperSlide } from "swiper/react";

import "./Carousel.css"

import image1 from "../../Images/image1.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Carousel=()=>{
    return(
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link><img className="imageSlide" src={image1} alt="slide" /></Link>
                </SwiperSlide>
                
        
            </Swiper>

        </>
    )
}

export default Carousel;