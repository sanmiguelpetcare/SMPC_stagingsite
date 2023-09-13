import React from "react"
import BigKibble from "../../assets/media/nutrition/Kibble@2x.png"
import DogFerds from "../../assets/media/nutrition/Doc Ferds.png"
import PawDivider from "../../assets/media/Paw_Divider.svg"
import ProductShape from "../../assets/media/nutrition/Product_shape.svg"
import { motion } from "framer-motion"

export default function PetFoodExpertSection () {
    return (
        <div className="pet-food-expert-section section">
            <div className="container">
                <div className="pet-food-expert-container">
                <div className="pet-food-expert-content-container">
                        <h2>
                            We partnered with PET FOOD Experts
                        </h2>
                        <div className="pet-food-expert-content">
                            <img className="paw-odd" src={PawDivider}/>
                            <p>Over 10 years experience in Pet Food</p>
                        </div>
                        <div className="pet-food-expert-content">
                            <img className="paw-even" src={PawDivider}/>
                            <p>State-of-the-art facility; expansion plans</p>
                        </div>
                        <div className="pet-food-expert-content">
                            <img className="paw-odd" src={PawDivider}/>
                            <p>Major player in Thailand and other markets</p>
                        </div>
                        <div className="pet-food-expert-content">
                            <img className="paw-even" src={PawDivider}/>
                            <p>"Human grade" manufacturing process</p>
                        </div>
                        <div className="pet-food-expert-content">
                            <img className="paw-odd" src={PawDivider}/>
                            <p>With In-house Animal Nutritionist</p>
                        </div>
                        <div className="pet-food-expert-content">
                            <img className="paw-even" src={PawDivider}/>
                            <p>With Expert Dog Panelists</p>
                        </div>
                        <div className="pet-food-expert-content">
                            <img className="paw-odd" src={PawDivider}/>
                            <p>18 Months Shelf-Life</p>
                        </div>
                    </div>

                    <div className="pet-food-expert-image-container">
                        <div className="floating-dogtors dogtor-1">
                            <img className="shape" src={DogFerds}/>
                        </div>
                        <div className="nutrition-hero-image-content">
                            <img src={ProductShape} />
                            <img className="big-kibble" src={BigKibble} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}