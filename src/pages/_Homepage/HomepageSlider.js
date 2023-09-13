import React from "react"
import Carousel from 'react-material-ui-carousel'

import NCprotectBanner from "./HomepageSlidercomponent/NcprotectBanner"
import HomepageBanner from "./HomepageSlidercomponent/HomepageBanner"
import PawprintsBanner from "./HomepageSlidercomponent/PawprintsBanner"
import PupstarBanner from "./HomepageSlidercomponent/PupstarBanner"
import DogdigestBanner from "./HomepageSlidercomponent/DogdigestBanner"
import PawmilyBanner from "./HomepageSlidercomponent/PawmilyBanner"

function HomepageSlider() {

    return(
        <div className="homepage-slider-container">
            <Carousel 
                autoPlay={true}
                animation={"slide"}
                duration={1000}
            >   
                <HomepageBanner />
                <NCprotectBanner />
                <PawmilyBanner />
                <PawprintsBanner />
                <PupstarBanner />
                <DogdigestBanner />
            </Carousel>
    </div>
    )
}

export default HomepageSlider