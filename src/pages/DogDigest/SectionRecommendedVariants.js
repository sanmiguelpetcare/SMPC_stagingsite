import React from "react"
import DogListMapping from "./DogListMapping"
import PurpleBar from "../../assets/media/dog_digest/common-assets/purpleBar.png"
import Titlebox from "../../assets/media/dog_digest/common-assets/titlebox-1.svg"

export default function RecommendedVariants(props) {

    // const DogListMap = DogListMapping.find((dogDetails, index) => dogDetails.slug  ===  props.slug ) 

    let backgroundImage = props.DogListMap.backgroundImage
    let dogFoodA = props.DogListMap.productsImageA
    let dogFoodB = props.DogListMap.productsImageB
    let dogFoodC = props.DogListMap.productsImageC
    let recommendationA = props.DogListMap.recommendationA
    let recommendationB = props.DogListMap.recommendationB

    return (
        <>
            <div 
                style={{backgroundImage: `url(${backgroundImage})`}} 
                className="recommended-variants-section section"
            >
                <div className="container">
                    <div className="recommended-variants-container">
                        <div className="recommended-products-container">
                            <div className="recommended-products dog-food-A-container">
                                <img className="dog-food-A" src={dogFoodA} alt=""/>
                            </div>
                            <div className="recommended-products dog-food-B-container">
                                <img className="dog-food-B" src={dogFoodB} alt=""/>
                            </div>
                            <div className="recommended-products dog-food-C-container">
                                <img className="dog-food-C" src={dogFoodC} alt=""/>
                            </div>
                        </div>
                        <div className="purple-bar-container">
                           <div className="purplebar-image-container">
                                <img src={PurpleBar} alt=""/>
                                <h3>RECOMMENDED VARIANTS</h3>
                           </div>

                           <div className="recommended-products-container-mobile">
                                <div className="recommended-products dog-food-A-container">
                                    <img className="dog-food-A" src={dogFoodA} alt=""/>
                                </div>
                                <div className="recommended-products dog-food-B-container">
                                    <img className="dog-food-B" src={dogFoodB} alt=""/>
                                </div>
                                <div className="recommended-products dog-food-C-container">
                                    <img className="dog-food-C" src={dogFoodC} alt=""/>
                                </div>
                            </div>

                           <div className="purplebar-description-container">
                                <p>{recommendationA}</p>
                                <p>{recommendationB}</p>
                           </div>
                           <div className="buynow-button-container">
                                <img src={Titlebox} />
                                <h3>BUY NOW</h3>
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