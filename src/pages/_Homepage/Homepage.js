import React from "react"
import HomepageSlider from "./HomepageSlider" 
import DogwithCart from "../../assets/media/homepage-assets/Dog_Cart.png"
import NCFalling from "../../assets/media/homepage-assets/NC_Falling.png"
import MeatSun from "../../assets/media/homepage-assets/KIBBLE.mov"
import Pug from "../../assets/media/homepage-assets/pug.png"
import PawDivider from "../../assets/media/Paw_Divider.svg"
import CommonButton from "common/cta/CommonButton"
import TestimonySlider from "./TestimonySlider"
import ActiveBoost from "../../assets/media/homepage-assets/ACTIVBOOST.svg"
import Prebiotics from "../../assets/media/homepage-assets/Prebiotics.svg"
import Natural from "../../assets/media/homepage-assets/Natural.svg"
import Hqprotein from "../../assets/media/homepage-assets/HQ_Protien.svg"


function Homepage() {

    // const [slide, setSlide] = React.useState(
    //     <HomepageSlider/>
    // )

    // console.log(slide)

    // function changeCurrentslide() {
    //     setTimeout(() => {
    //         setSlide("Hi There")
    //     }, 3000)
    // }

    // changeCurrentslide()

    return(
        <div>
            <div className="home-page">
                <div className="home-page-banner-section">
                </div>
                <div className="home-page-blurb-section">
                    <div className="container">
                        <HomepageSlider/>
                        
                        <div className="dog-with-cart-container">
                            <div>
                                <img className="dog-with-cart" src={DogwithCart} />
                            </div>
                            <div>
                                <img className="nc-falling" src={NCFalling} />
                            </div>
                        </div>
                        <div className="kibble-capable-container">
                            <div className="kibble-capable-heading-container">
                                <img className="paw-divider" src={PawDivider} />
                                <h2>Kibble That is Capable</h2>
                                <p>The only dog food with ActivBoost {'&'} Prebiotics Fortified with Essential Vitamins and Nutrients for a complete and balanced diet.</p>
                            </div>
                            <div className="kibble-capable-content-container">
                                <div className="kibble-capable-animation-container">
                                    <img className="pug-image" src={Pug} alt="pug"/>
                                </div>
                                <div className="kibble-blurb-content-container">
                                    <div className="kibble-blurb-content">
                                        <img src={ActiveBoost}/>
                                        <div className="kibble-blurb-text-content">   
                                            <h4>ACTIVEBOOST FORMULA</h4>
                                            <p>An optimum blend of proteins, fats, and carbohydrates that support your dog’s energy needs.</p>
                                        </div>
                                    </div>
                                    <div className="kibble-blurb-content">
                                        <img src={Prebiotics}/>
                                        <div className="kibble-blurb-text-content">
                                            <h4>PREBIOTICS</h4>
                                            <p>Prevents diseases, improves digestion, nutrient absorption, and enhances your dog’s immune system.</p>
                                        </div>
                                    </div>
                                    <div className="kibble-blurb-content">
                                        <img src={Natural}/>
                                        <div className="kibble-blurb-text-content">
                                            <h4>NATURAL</h4>
                                            <p>No artificial colors and contains only wholesome ingredients.</p>
                                        </div>
                                    </div>
                                    <div className="kibble-blurb-content">
                                        <img src={Hqprotein}/>
                                        <div className="kibble-blurb-text-content">
                                            <h4>HIGH QUALITY PROTEIN</h4>
                                            <p>Made with pet-grade ingredients and real meat, formulated by pet nutrition experts.</p>
                                        </div>
                                    </div>
                                    <div className="learn-more-button-container">
                                        <CommonButton 
                                            ButtonName={"Learn More"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="see-our-product-section">
                    <div className="container">
                        <div className="see-our-product-container">
                            <div className="animation-container">
                                <img src={""} alt=""/>
                                <img src={""} alt=""/>
                            </div>
                            <div className="see-our-products-heading-container">
                                <h2>SEE OUR PRODUCTS</h2>
                                <p>Suitable for all breeds and life stages</p>
                                <p>Fortified with ActivBoost Formula for optimum energy level, Prebiotics for stronger immunity and gut health, Yucca Extract for stool quality, and Omega 3 {`&`} 6 for shiny coats.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials-section">
                    <div className="container">
                        <div className="testimonials-container">
                            <div className="testimonials-heading-container">
                                <img className="paw-divider" src={PawDivider} />
                                <h3>HEAR IT FROM OUR EXPERTS</h3>
                            </div>
                            <div className="testimonials-content-container">
                                <TestimonySlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage