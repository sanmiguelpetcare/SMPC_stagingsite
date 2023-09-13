import React from "react"
import FerdsRecio from "../../assets/media/homepage-assets/doc_ferds_recio.png"
import LestreZapanta from "../../assets/media/homepage-assets/lestre_zapanta.png"
import TristanHuertas from "../../assets/media/homepage-assets/tristan_huertas.png"
import kibbleD from "../../assets/media/new-home-page/Kibble_04.png"
import kibbleE from "../../assets/media/new-home-page/Kibble_05.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function() {

    const expertsData = [
        {
            image: FerdsRecio,
            name: "Doc Ferds Recio",
            occupation: "Celebrity Veterenarian",
            testimony: "As a PAWfessional with over 20 years of experience, NUTRI CHUNKS is definitely vet-approved! It’s packed with ActivBoost formula for optimum energy and made with real meat."
        },
        {
            image: TristanHuertas,
            name: "Tristan Huertas",
            occupation: "Milo & Friends",
            testimony: "Aking ipapakilala ang paboritong pagkain ni Milo— ang NUTRI CHUNKS! Masarap at masustansya, kaya naman lagi talaga siyang #ListoGanado sa mga videos natin."
        },
        {
            image: LestreZapanta,
            name: "Lestre Zapanta",
            occupation: "Pinoy Dog Whisperer",
            testimony: "As a PAWfessional with over 20 years of experience, NUTRI CHUNKS is definitely vet-approved! It’s packed with ActivBoost formula for optimum energy and made with real meat."
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      };

    const expertDatamap = expertsData.map((item) => {
        return (
            <>
                <div className="testimonial-body-content">
                    <div className="image-container">
                        <div className="image">
                            <img src={item.image} alt=""/>
                        </div>
                    </div>
                    <div className="text-container">
                        <div className="name">
                            <h3>{item.name}</h3>
                        </div>
                        <div className="occupation">
                            <h6>{item.occupation}</h6>
                        </div>
                        <div className="testimony">
                            <p>{item.testimony}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    })    

    return (
        <>
            <div className="testimonials-section section">
                <img className="blured-kibble-d" src={kibbleD}  alt=""/>
                <img className="blured-kibble-e" src={kibbleE}  alt=""/>
                <div className="container">
                    <div className="testimonials-content-container">
                        <div className="head-content">
                            <h2>Hear it form the</h2>
                            <h2>Experts</h2>
                        </div>
                        <div className="body-content">
                            <Slider {...settings}>
                                {expertDatamap}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}