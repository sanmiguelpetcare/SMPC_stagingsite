import React from "react"
import CoatshineD from "../../assets/media/20kg/coatshine.png"
import HiProteinD from "../../assets/media/20kg/hi-protein.png"
import MaintenanceD from "../../assets/media/20kg/maintenance.png"
import ObeefD from "../../assets/media/20kg/o-beef.png"
import OlambD from "../../assets/media/20kg/o-lamb.png"
import MLamb from "../../assets/media/10kg/maintenance-lamb.png"
import kibbleC from "../../assets/media/new-home-page/Kibble_03.png"
import { Link } from "react-router-dom"
import CarouselModal from "./CarouselModal"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ProductsCarousel() {

    const imageArray = [
        HiProteinD,
        CoatshineD,
        MaintenanceD,
        ObeefD,
        OlambD,
        HiProteinD,
        CoatshineD,
        MaintenanceD,
        ObeefD,
        OlambD,
    ]

    const [imageIndex, setImageIndex] = React.useState(0)
    const [selectedIndex, setSelectedIndex] = React.useState(null)
    const [modalStatus, setModalStatus] = React.useState(false)

    const settings = {
        // dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
        ],
        beforeChange: (current, next) => setImageIndex(next),
      };

    const handleProductSinglemodal = (index) => {
        setSelectedIndex(index)
        setModalStatus(true)
    }

    const handleClosemodal = () => {
        setModalStatus(false)
    }


    return (
        <>
            <CarouselModal 
                imageIndex={imageIndex}
                selectedIndex={selectedIndex}
                modalStatus={modalStatus}
                handleClose={handleClosemodal}
            />
            <div className="products-section section">
                <img className="blured-kibble-c" src={kibbleC}  alt=""/>
                <div className="container">
                    <div className="products-content-container">
                        <div className="products-heading-container">
                            <div className="head content">
                                <h2>See Our</h2>
                                <h2>Products</h2>
                            </div>
                            <div className="sub-head content">
                                <h6>Suitable for all breeds and life stages</h6>
                            </div>
                            <div className="description content">
                                <p>Fortofied with ActiveBoost Formula for Optimum energy level, Prebiotics for stonger immunity and gut health, Yucca Extract for stool quality, and Omega 3 & 6 for shiny coats.</p>
                            </div>
                        </div>
                        <div className="carousel-container">
                            <Slider {...settings}>
                                {imageArray.map((item, index) => {
                                    return (
                                        <div 
                                            // onClick={index === imageIndex ? () => goToproduct(index) : () => goToproduct()} 
                                            className={
                                                index === imageIndex ? "product-container active" : 
                                                index + 2 === imageIndex || index - 8 === imageIndex || index + 8 === imageIndex || index - 2 === imageIndex ? "product-container smallest" : 
                                                index + 1 === imageIndex || index - 9 === imageIndex || index + 9 === imageIndex || index - 1 === imageIndex ? "product-container smaller" : 
                                                "product-container inactive"
                                            }
                                            onClick={index === imageIndex ? () => handleProductSinglemodal(index) : null}
                                        >
                                            <img src={item} alt="" />
                                        </div> 
                                    )
                                })}
                            </Slider>
                        </div>
                        <div className="button">
                            {/* <Link to="/products"><button>VIEW PRODUCTS</button></Link> */}
                            <a href="https://www.store.sanmiguelpetcare.com/"><button>VIEW PRODUCTS</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}