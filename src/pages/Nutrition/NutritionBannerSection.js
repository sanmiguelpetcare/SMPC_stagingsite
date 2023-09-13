import React from "react"
import Dog1 from "../../assets/media/nutrition/Dog_Asset_1@3x.png"
import Dog2 from "../../assets/media/nutrition/Dog_Asset2@3x.png"
import Dogfood from "../../assets/media/products-page-assets/products/Optimum-beef-10-Kg-Front_mockup.png"
import BigKibble from "../../assets/media/nutrition/Kibble@2x.png"
import Kibble from "../../assets/media/nutrition/Masarap na Kibble.png"
import KibbleBG from "../../assets/media/sign_up/Kibble 02.png"
import ProductShape from "../../assets/media/nutrition/Product_shape.svg"
import { motion } from "framer-motion"

export default function NutritionBannerSection () {

    const transitionStyle = {
        repeat: Infinity, 
        duration: 5, 
        type: "spring"
    }

    const transitionStyle1 = {
        repeat: Infinity, 
        duration: 5.2, 
        type: "spring"
    }

    const transitionStyle2 = {
        repeat: Infinity, 
        duration: 5.4, 
        type: "spring"
    }

    const transitionStyle3 = {
        repeat: Infinity, 
        duration: 10, 
        ease: "linear"
    }

    return (
        <div className="nutrition-banner-section section">
            <div className="container">
                <div className="nutrition-banner-content-container">
                    <img className="kibble-background" src={KibbleBG}/>
                    <div className="nutrition-banner-text-content-container">
                        <h1 className="keep-your-furbaby-heading">Keep your Furbaby</h1>
                        <h1 className="listo-ganado-heading">LISTO GANADO</h1>
                        <p>Nutri Chunks is a 100% nutritionally balanced and complete dog food that is approved by veterinarians, formulated by pet nutrition experts, and manufactured in an ISO-certified facility.</p>
                    </div>
                    <div className="nutrition-hero-image">
                        <div className="nutrition-hero-image-content" id="dog-1">
                            <img src={Dog1} />
                        </div>
                        <div className="nutrition-hero-image-content" id="product-shape">
                            <img src={ProductShape} />
                            <motion.img className="big-kibble" src={BigKibble}/>
                        </div>
                        <div className="nutrition-hero-image-content" id="dog-2">
                            <img id="dog" src={Dog2} />
                            <img id="dog-food" src={Dogfood} />
                        </div>

                        {/* <div className="nutrition-hero-image-content" id="dog-food">
                            <img src={Dogfood} />
                        </div> */}

                        <motion.div animate={{rotate: 360}} transition={transitionStyle} className="floating-kibble" id="kibble1">
                            <img src={Kibble} />
                        </motion.div>
                        <motion.div animate={{rotate: 360}} transition={transitionStyle1} className="floating-kibble" id="kibble2">
                            <img src={Kibble} />
                        </motion.div>
                        <motion.div animate={{rotate: 360}} transition={transitionStyle2} className="floating-kibble" id="kibble3">
                            <img src={Kibble} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}