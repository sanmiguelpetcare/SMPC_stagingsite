import React from "react"
import Slider from "react-slick"
import FeaturedSlider from "./FeaturedSlider"
import Carousel from 'react-material-ui-carousel'
import PurpleBar from "../../../assets/media/dog_digest/common-assets/purpleBar.png"

export default function FeaturedImage(props) {

    let backgroundImage = props.DogListMap.backgroundImage

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
    };

    const featuredItems2 = [
        {
            firstImage: props.DogListMap.imageOne,
            secondImage: props.DogListMap.imageTwo
        },
        {
            firstImage: props.DogListMap.imageThree,
            secondImage: props.DogListMap.imageFour
        },
        {
            firstImage: props.DogListMap.imageFive,
            secondImage: props.DogListMap.imageSix
        }
    ]
    
    const featuredItems = () => {
        return(
            <div>
                <FeaturedSlider 
                    firstImage={props.DogListMap.imageOne}
                    secondImage={props.DogListMap.imageTwo}
                />
                <FeaturedSlider 
                    firstImage={props.DogListMap.imageThree}
                    secondImage={props.DogListMap.imageFour}
                />
                <FeaturedSlider 
                    firstImage={props.DogListMap.imageFive}
                    secondImage={props.DogListMap.imageSix}
                />
            </div>
        )
    }

    return(
        <>
            <div 
                style={{backgroundImage: `url(${backgroundImage})`}}
                className="featured-image-section"
            >
                <div className="container">
                    <div className="featured-image-container">
                        <div className="banner-container">
                            <img src={PurpleBar} />
                            <h2>{`FEATURED ${props.name}`}</h2>
                        </div>
                        <div className="slider-container">
                            {/* <Carousel 
                                autoPlay={false}
                                // animation={"slide"}
                                // duration={1000}
                            >  
                                 <FeaturedSlider 
                                    firstImage={props.DogListMap.imageOne}
                                    secondImage={props.DogListMap.imageTwo}
                                />
                                <FeaturedSlider 
                                    firstImage={props.DogListMap.imageThree}
                                    secondImage={props.DogListMap.imageFour}
                                />
                                <FeaturedSlider 
                                    firstImage={props.DogListMap.imageFive}
                                    secondImage={props.DogListMap.imageSix}
                                />
                            </Carousel> */}
                            <Slider
                                {...settings}
                            >
                                {featuredItems2.map((item, index) => {
                                    return(
                                        <FeaturedSlider 
                                            firstImage={item.firstImage}
                                            secondImage={item.secondImage}
                                        />
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}