import React from "react"
import BigKibble from "../../assets/media/nutrition/Kibble@2x.png"
import DogFood1 from "../../assets/media/products-page-assets/products/Hi-Protein-20-Kg-Front_mockup (1).png"
import DogFood2 from "../../assets/media/products-page-assets/products/Coatshine-Front-20-Kg-mockup (1).png"
import DogFood3 from "../../assets/media/products-page-assets/products/Optimum-Lamb-20-Kg-Front_-mockup (1).png"
import KibbleBG from "../../assets/media/sign_up/Kibble 02.png"
import KibbleBG2 from "../../assets/media/sign_up/Kibble 03.png"
import PawDivider from "../../assets/media/Paw_Divider.svg"
import ProductShape from "../../assets/media/nutrition/Product_shape.svg"
import ProductShape2 from "../../assets/media/nutrition/Product_shape_2.svg"
import { motion } from "framer-motion"

export default function DogFoodStandardsSection () {
    return (
        <div className="dog-food-standard-section section">
            <img className="kibble-background" src={KibbleBG}/>
            <img className="kibble-background-1" src={KibbleBG2}/>
            <div className="container">
                <div className="dog-food-standard-container">
                    <div className="dog-food-standard-image-container">
                        <motion.div animate={{rotate: [-10, -15, -10]}} transition={{repeat: Infinity, duration: 2}} className="floating-dog-food dog-food-1">
                            <img className="shape" src={ProductShape2}/>
                            <img className="dog-food" src={DogFood1}/>
                        </motion.div>
                        <motion.div animate={{rotate: [10, 15, 10]}} transition={{repeat: Infinity, duration: 2}}className="floating-dog-food dog-food-2">
                            <img src={DogFood2}/>
                        </motion.div>
                        <motion.div animate={{rotate: [20, 25, 20]}} transition={{repeat: Infinity, duration: 2}}className="floating-dog-food dog-food-3">
                            <img className="shape" src={ProductShape2}/>
                            <img className="dog-food" src={DogFood3}/>
                        </motion.div>
                        <div className="nutrition-hero-image-content">
                            <img src={ProductShape} />
                            <img className="big-kibble" src={BigKibble} />
                        </div>
                    </div>

                    <div className="dog-food-standard-content-container">
                        <h2>
                            Dog Food Standards
                        </h2>
                        <div className="dog-food-standard-content">
                            <img className="paw-odd" src={PawDivider}/>
                            <p>Association of American Feed Control Officials - Accredited</p>
                        </div>
                        <div className="dog-food-standard-content">
                            <img className="paw-even" src={PawDivider}/>
                            <p>Defines and establishes regulations for pet food and feed ingredients, as well as sets standards for nutritional adequacy.</p>
                        </div>
                        <div className="dog-food-standard-content">
                            <img className="paw-odd" src={PawDivider}/>
                            <p>Ensures that minimum standard is met in foods for each stage of dog’s life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}