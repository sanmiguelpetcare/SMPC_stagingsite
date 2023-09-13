import React from "react"
import SliderComponents from "./HomepageSlidercomponent"
import CommonButton from "../../../common/cta/CommonButton"

function NcprotectBanner() {
    return(
        <div>
           <div className="banner-slider-container">
                <div className="background-image-container">
                    <img className="banner-slider-image" src={SliderComponents[1].sliderBg} />
                </div>
                <div className="banner-slider-content-container">
                    <div className="image-container">
                        <img className="ncprotectHeroimage" src={SliderComponents[1].heroImage} />
                    </div>
                    <div className="text-content-container nc-protect-text-content-container">
                        <h1>Have your peace of mind</h1>
                        <p>Life can be so unpredictable - that's why our subscription based program includes emergency insurance!</p>
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

export default NcprotectBanner