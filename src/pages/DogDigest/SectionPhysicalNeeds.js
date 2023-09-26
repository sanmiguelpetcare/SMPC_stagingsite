import React from "react"
import Bar from "./Bar"
import DogListMapping from "./DogListMapping"
import PurpleBar from "../../assets/media/dog_digest/common-assets/purpleBar.png"


export default function PhysicalNeeds(props) {

    // const DogListMap = DogListMapping.find((dogDetails, index) => dogDetails.slug == props.slug )

    let energyLevel = props.DogListMap.energyLevel
    let potentialPlayfulness = props.DogListMap.potentialPlayfulness
    let energyNeeds = props.DogListMap.energyNeeds
    let intensity = props.DogListMap.intentsity
    let energyLevelDescription = props.DogListMap.energyLevelDescription
    let potentialPlayfulnessDescription = props.DogListMap.potentialPlayfulnessDescription
    let energyNeedsDescription = props.DogListMap.exerciseNeedsDescription
    let IntentsityDescription = props.DogListMap.intentsityDescription
    let backgroundImage = props.DogListMap.backgroundImage

    return(
        <>
            <div 
                 style={{backgroundImage: `url(${backgroundImage})`}} 
                className="physical-needs-section section"
            >
                <div className="container">
                    <div className="physical-needs-container">
                        <div className="purple-signage">
                            <img src={PurpleBar} alt="purplebar" />
                            <h2>PHYSICAL NEEDS</h2>
                        </div>
                        <div className="element-container">
                            <img src={props.DogListMap.extraElementA} alt="" />
                        </div>
                        <div className="bar-division-container">
                            <Bar 
                                needs={"Energy Level"}
                                bar={energyLevel}
                                description={energyLevelDescription}
                                slug={props.slug}
                                starName={"starEnergyLevel"}
                            />

                            <Bar 
                                needs={"Potential Playfulness"}
                                bar={potentialPlayfulness}
                                description={potentialPlayfulnessDescription}
                                slug={props.slug}
                                starName={"starPotentialPlayfulness"}
                            />
                        </div>
                        <div className="bar-division-container">
                            <Bar
                                needs={"Exercise Needs"}
                                bar={energyNeeds}
                                description={energyNeedsDescription}
                                slug={props.slug}
                                starName={"starExerciseNeeds"}
                             />
                            <Bar
                                needs={"Intensity"}
                                bar={intensity}
                                description={IntentsityDescription}
                                slug={props.slug} 
                                starName={"starIntensity"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}