import React, { useRef, useEffect, useState } from "react"
import BalancedDogFoodSection from "./BalancedDogFoodSection"
import DogFoodStandardsSection from "./DogFoodStandardsSection"
import Kibble from "../../assets/media/nutrition/Kibble@2x.png"
import LetsTalkAboutSection from "./LetsTalkAboutSection"
import NutritionBannerSection from "./NutritionBannerSection"
import PetFoodExpertSection from "./PetFoodExpertSection"
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion"
 

export default function Nutrition() {
    const ref = useRef(null);
    const { scrollY, scrollYProgress } = useScroll();
    const [ offset, setOffsetY ] = useState();
    const rotate = useTransform(scrollY, [0,1000], [30, 390])
    const dx = Math.cos(1) * 100

    // const offsetY = window.offsetY;

    const handleOffset = () => {
        setOffsetY(window.scrollY)
    }

    window.addEventListener("scroll", handleOffset)

    return (
        <div>
            <div className="nutrition-page">
                <motion.img
                    className={
                        "centerpiece-kibble"
                        // offset <= 100 ? "centerpiece-kibble" : "centerpiece-capable-kibble"
                    }
                    // style={{ rotate }}
                    animate={{ rotate: offset }}
                    src={Kibble} 
                />
                <NutritionBannerSection />
                <BalancedDogFoodSection />
                <DogFoodStandardsSection />
                <PetFoodExpertSection ref={ref}/>
                <LetsTalkAboutSection 
                />
            </div>
        </div>
    )
}