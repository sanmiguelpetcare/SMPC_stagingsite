import React from "react"
import BigKibble from "../../assets/media/nutrition/Kibble@2x.png"
import BottomWave from "../../assets/media/new-home-page/Bottom.svg"
import Element1 from "../../assets/media/nutrition/ActivBoost.svg"
import Element2 from "../../assets/media/nutrition/Prebiotics.svg"
import Element3 from "../../assets/media/nutrition/Natural.svg"
import Element4 from "../../assets/media/nutrition/Protein.svg"
import KibbleCapable from "../../assets/media/new-home-page/kibble_capable.png"
import TopWave from "../../assets/media/new-home-page/Top.svg"

export default function BalancedDogFoodSection () {
    return(
        <div>
            <div className="blue-wave-top">
                <img src={TopWave} alt="" />
            </div>

            <div className="nutrition-balanced-dog-food-section">
                <div className="container">
                    <div className="balanced-dog-food-container">
                        <div className="balanced-dog-food-specs-container">
                            <div className="balanced-dog-food-specs">
                                <img src={Element1} alt=""/>
                                <h3>ACTIVBOOST FORMULA</h3>
                                <p>An optimum blend of proteins, fats, and carbohydrates that support your dog's daily energy needs.</p>
                            </div>
                            <div className="balanced-dog-food-specs">
                                <img src={Element2} alt=""/>
                                <h3>PREBIOTICS</h3>
                                <p>Prevent diseases, improve digestion, nutrient absorption, and enhance your dog's immune system.</p>
                            </div>
                        </div>

                        <div className="capable-kibble-container">
                            <img className="big-kibble" src={BigKibble} />
                            <img className="circular-text" src={KibbleCapable} alt=""/>
                        </div>

                        <div className="balanced-dog-food-specs-container">
                            <div className="balanced-dog-food-specs">
                                <img src={Element3} alt=""/>
                                <h3>NATURAL</h3>
                                <p>No Artificial colors and contains only wholesome ingredients.</p>
                            </div>
                            <div className="balanced-dog-food-specs">
                                <img src={Element4} alt=""/>
                                <h3>HIGH QUALITY PROTEIN</h3>
                                <p>Made with pet grade ingredients and real meat, formulated by pet nutrition experts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blue-wave-bottom">
                <img src={BottomWave} alt="" />
            </div>
        </div>
    )
}