import React from "react"
import HeroSection from "./HeroSection"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     lazyLoad: true,
    //     speed: 500,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     centerMode: true,
    //     centerPadding: 0,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             slidesToShow: 3,
    //           }
    //         },
    //     ],
    //     beforeChange: (current, next) => setImageIndex(next),
    //   };

    
    return (
        <>
            <div className="hero-section-slider">
                <HeroSection/>
            </div>
        </>
    )
}