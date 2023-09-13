import React from "react"
import SliderComponents from "./HomepageSlidercomponent"
import CommonButton from "../../../common/cta/CommonButton"

function PawprintsBanner() {
    return(
        <div>
           <div className="banner-slider-container">
                <div className="background-image-container">
                    <img className="banner-slider-image" src={SliderComponents[3].sliderBg} />
                </div>
                <div className="banner-slider-content-container">
                    <div className="image-container">
                        <img className="pawprintHeroimage" src={SliderComponents[3].heroImage} />
                    </div>
                    <div className="text-content-container pawprint-text-content-container">
                        <img src={SliderComponents[3].contentImage} />
                        <p>we reward you for being as loyal as your dog</p>
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

export default PawprintsBanner