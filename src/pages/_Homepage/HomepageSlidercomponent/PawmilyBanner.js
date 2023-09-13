import React from "react"
import SliderComponents from "./HomepageSlidercomponent"
import CommonButton from "../../../common/cta/CommonButton"

function PawmilyBanner() {
    return(
        <div>
           <div className="banner-slider-container">
                <div className="background-image-container">
                    <img className="banner-slider-image" src={SliderComponents[2].sliderBg} />
                </div>
                <div className="banner-slider-content-container">
                    <div className="image-container">
                        <img className="pawmilyHeroimage" src={SliderComponents[2].heroImage} />
                    </div>
                    <div className="text-content-container pawmily-text-content-container">
                    <img src={SliderComponents[2].contentImage} />
                        <p>Sign up to get first dibs on our latest online exclusives, promos, and newsletters.</p>
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

export default PawmilyBanner