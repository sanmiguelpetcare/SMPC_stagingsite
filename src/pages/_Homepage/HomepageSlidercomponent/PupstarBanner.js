import React from "react"
import SliderComponents from "./HomepageSlidercomponent"
import CommonButton from "../../../common/cta/CommonButton"

function PupstarBanner() {
    return(
        <div>
           <div className="banner-slider-container">
                <div className="background-image-container">
                    <img className="banner-slider-image" src={SliderComponents[4].sliderBg} />
                </div>
                <div className="banner-slider-content-container">
                    <div className="image-container">
                        <img className="pupstarHeroimage" src={SliderComponents[4].heroImage} />
                    </div>
                    <div className="text-content-container pupstar-text-content-container">
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

export default PupstarBanner