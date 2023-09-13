import React from "react"
import PurpleBar from "../../assets/media/dog_digest/common-assets/purpleBar.png"
import Health from "../../assets/media/dog_digest/common-assets/Health.png"

export default function HealthproblemSection(props) {

    let backgroundImage = props.DogListMap.backgroundImage
    let name = props.name
    let healthist = props.DogListMap.healthlist.map(item => {
        return (
                <p>{item}</p>
            )
    })


    return (
        <>
            <div 
                 style={{backgroundImage: `url(${backgroundImage})`}} 
                className="usual-health-problems-section section"
                >
                <div className="container">
                    <div className="usual-health-problems-container">
                        <div className="element-container">
                            <img src={props.DogListMap.extraElement} alt="" />
                        </div>
                        <div className="usual-health-problems-info-container">
                            <div className="purple-signage-container">
                                <img src={PurpleBar} alt="" />
                                <h3>USUAL HEALTH PROBLEMS</h3>
                            </div>
                            <div className="sub-heading">
                                <p>{`Please take note of the following health diseases ${name} usually encounter`}</p>
                            </div>
                            <div className="usual-health-problems-info">
                                {healthist}
                            </div>
                        </div>
                        <div className="heart-image-container">
                            <img src={Health} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}