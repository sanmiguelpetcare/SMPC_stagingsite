import React from "react"
import BlueTextBar from "../../assets/media/dog_digest/common-assets/BlueTextBar.png"
import Signage from "../../assets/media/dog_digest/common-assets/textbox.svg"
import Star from "../../assets/media/dog_digest/common-assets/star-2.svg"

export default function HeroSection(props) {

    let heroBackgroundImage = props.DogListMap.heroBackgroundImage
    let dogImage = props.DogListMap.dogImage
    let elementA = props.DogListMap.extraElementA
    let elementB = props.DogListMap.extraElementB
    let elementC = props.DogListMap.extraElementC
    let name = props.DogListMap.name
    let descriptionA = props.DogListMap.dogDescriptionA
    let descriptionB = props.DogListMap.dogDescriptionB
    let descriptionC = props.DogListMap.dogDescriptionC

    // console.log(heroBackgroundImage)
    return (
        <>
            <div 
                style={{backgroundImage: `url(${heroBackgroundImage})`}} 
                className="dog-digest-hero-section section"
            >
                <div className="container">
                    <div className="dog-digest-hero-container">
                        <div className="main-content-container">
                            <div className="main-dog-container">
                                <img src={dogImage} alt="" />
                            </div>
                            <div className="about-container">
                                <div className="blue-signage-container">
                                    <div className="blue-signage-content">
                                        <img src={BlueTextBar} alt="" />
                                        <h1>{props.name}</h1>
                                    </div>
                                </div>
                                <div className="signage-container">
                                    <div className="signage-content">
                                        <img src={Signage} alt="" />
                                        <div className="description-container">
                                            <p>{descriptionA}</p>
                                            <p>{descriptionB}</p>
                                            <p>{descriptionC}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="extra-element-a-container">
                            <img src={elementA} alt="" />
                        </div>
                        <div className="extra-element-b-container">
                            <img src={elementB} alt="" />
                        </div>
                        <div className="extra-element-c-container">
                            <img src={elementC} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )  
}