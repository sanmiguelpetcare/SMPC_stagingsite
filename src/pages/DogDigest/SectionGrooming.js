import React from "react"
import PurpleBar from "../../assets/media/dog_digest/common-assets/purpleBar.png"
import Grooming from "../../assets/media/dog_digest/common-assets/grooming.png"


export default function SectionGrooming(props) {

    let backgroundImage = props.DogListMap.backgroundImage
    let grooming = props.DogListMap.grooming 

    return(
        <>
            <div 
                style={{backgroundImage: `url(${backgroundImage})`}}
                className="grooming-section section"
            >
                <div className="container">
                    <div className="grooming-container">    
                        <div className="comb-container">
                            <img src={Grooming} />
                        </div>
                        <div className="comb-info-container">
                            <div className="comb-bar-container">
                                <img src={PurpleBar} />
                                <h2>{`GROOMING YOUR ${props.name}`}</h2>
                            </div>
                            <div className="comb-info-content">
                                <p>{grooming}</p>
                            </div>
                        </div>
                        <div className="element-container">
                            <img src={props.DogListMap.extraElement} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}