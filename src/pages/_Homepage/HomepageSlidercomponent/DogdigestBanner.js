import React from "react"
import SliderComponents from "./HomepageSlidercomponent"
import CommonButton from "../../../common/cta/CommonButton"

function DogdigestBanner() {
    return(
        <div>
           <div className="banner-slider-container">
                <div className="background-image-container">
                    <img className="banner-slider-image" src={SliderComponents[5].sliderBg} />
                </div>
                <div className="banner-slider-content-container">
                    <div className="image-container">
                        <img className="dogdigestHeroimage" src={SliderComponents[5].heroImage} />
                    </div>
                    <div className="text-content-container dogdigest-text-content-container">
                        <div className="contentImage-container">
                            <img src={SliderComponents[5].contentImage} />
                            <h3>DOG DIGEST</h3>
                        </div>
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

export default DogdigestBanner