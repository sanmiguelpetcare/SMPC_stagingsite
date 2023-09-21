import React from "react"
import DogListMapping from "./DogListMapping"
import DogType from "../../assets/media/dog_digest/common-assets/Dog-Type.png";
import Height from "../../assets/media/dog_digest/common-assets/Height.png";
import LifeSpan from "../../assets/media/dog_digest/common-assets/Life-Span.png";
import Weight from "../../assets/media/dog_digest/common-assets/Weight.png";

const StatisticsAspect = props => {
    return(
        <div className="statiscics-aspect-container" id={props.id}>
            <div className="icon-container">
                <p>{props.aspect}</p>
                <img src={props.icon} alt=""/>
            </div>
            <div className="data-container">
                <p>{props.data}</p>
            </div>
        </div>
    )
}

export default function StatisticsSection(props) {

    // const DogListMap = DogListMapping.find((dogDetails, index) => dogDetails.slug === props.slug ) 

    let backgroundImage = props.DogListMap.backgroundImage
    let dogType = props.DogListMap.dogType
    let height = props.DogListMap.height
    let weight = props.DogListMap.weight
    let years = props.DogListMap.years

    return(
        <>
            <div 
                style={{backgroundImage: `url(${backgroundImage})`}} 
                className="dog-digest-vital-statistics-section section"
            >
                <div className="container">
                    <div className="dog-digest-content-container">
                        <div className="dog-digest-statistics-container">
                            <StatisticsAspect 
                                icon={DogType}
                                aspect={"Dog Breed Group"}
                                data={dogType}
                                id={"dog-breed-group"}
                            />
                            <StatisticsAspect 
                                icon={Height}
                                aspect={"Height"}
                                data={height}
                                id={"height"}
                            />
                            <StatisticsAspect 
                                icon={Weight}
                                aspect={"Weight"}
                                data={weight}
                                id={"weight"}
                            />
                            <StatisticsAspect 
                                icon={LifeSpan}
                                aspect={"Life Span"}
                                data={years}
                                id={"life-span"}
                            />
                        </div>
                        <div className="element-container">
                            <img src={props.DogListMap.extraElementA} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}