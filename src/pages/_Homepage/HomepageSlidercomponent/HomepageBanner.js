import React from "react"
import SliderComponents from "./HomepageSlidercomponent"
import CommonButton from "../../../common/cta/CommonButton"

function HomepageBanner() {
    return(
        <div>
           <div className="banner-slider-container">
                <div className="background-image-container">
                    <img className="banner-slider-image" src={SliderComponents[0].sliderBg} />
                </div>
                <div className="banner-slider-content-container">
                    <div className="image-container">
                        <img className="homepageHeroimage" src={SliderComponents[0].heroImage} />
                    </div>
                    <div className="text-content-container homepage-text-content-container">
                        <h1>Keep them Listo Ganado with <span>Nutri Chunks!</span></h1>
                        <p>Sustain them from the inside with premium dog food to keep them healthy, active, and happy.</p>
                        <div className="button-container">
                            <CommonButton 
                                ButtonName={"SHOP NOW"}
                            />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default HomepageBanner