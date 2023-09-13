import React from "react"
import MainImage from "../../assets/media/HomepageBannerSlider/header_image.png"
import NcProtect from "../../assets/media/nc-protect/NC_Protect_Asset.png"
import { motion, AnimatePresence } from "framer-motion"
import {Link} from "react-router-dom"

export default function HeroSection() {

    const [elements, setElements] = React.useState(1)

    // let elemArray = [1, 2, 3, 4, 5];
    let elemArray = [1, 2];
    let count = 1;

    React.useEffect(() => {
    
        function cycleArray() {
    
            let elem = elemArray[count];
            // console.log(elem);
        
            setElements(elem)

            count++;
        
            if (count === elemArray.length) {
                count = 0;
            }
        }

        setInterval(cycleArray, 10000);
    }, [])

    // console.log(elements)

    const variantA = {
        init: {
            opacity: 0,
            x: -200,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        },
        current: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        },
        exit: {
            opacity: 0,
            x: -200,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        }
    }

    const variantB = {
        init: {
            opacity: 0,
            x: 200,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        },
        current: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        },
        exit: {
            opacity: 0,
            x: 200,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1,
                staggerChildren: 0.3,
            }
        }
    }

    const FirstSlide = (props) => {
        return (
            <>
                <div className="hero-section-content-container">
                   
                        <motion.div variants={variantA} key={props.key} initial="init" animate="current" exit="exit" className="text-container">
                        <motion.h1 variants={variantA} >Keep them Listo Ganado with <span>Nutri Chunks!</span></motion.h1>
                            <motion.p variants={variantA} >Sustain them from the inside with premium dog food to keep them healthy, active, and happy.</motion.p>
                            {/* <Link to="/products"><motion.button variants={variantA} >SHOP NOW</motion.button></Link> */}
                            <a href="https://www.store.sanmiguelpetcare.com/"><motion.button variants={variantA} >SHOP NOW</motion.button></a>
                        </motion.div>
                        <div className="image-container">
                            <motion.img variants={variantB}  initial="init" animate="current" exit="exit" src={MainImage} alt="" />
                        </div>
                    
                </div>
            </>
        )
    }

    const SecondSlide = (props) => {
        return (
            <>
                <div className="hero-section-content-container second-slide">
                   
                        <motion.div variants={variantA} key={props.key} initial="init" animate="current" exit="exit" className="text-container">
                            <motion.h1 variants={variantA} >Have your peace of mind</motion.h1>
                            <motion.p variants={variantA} >Life can be so unpredictable - that's why our subscription based program includes emergency insurance!</motion.p>
                            <Link to=""><motion.button variants={variantA} >SUBSCRIBE</motion.button></Link>
                        </motion.div>
                        <div className="image-container">
                            <motion.img variants={variantB}  initial="init" animate="current" exit="exit" src={NcProtect} style={{width: 80}} alt="" />
                        </div>
                    
                </div>
            </>
        )
    }
    const FifthSlide = (props) => {
        return (
            <>
                <div className="hero-section-content-container">
                   
                        <motion.div variants={variantA} key={props.key} initial="init" animate="current" exit="exit" className="text-container">
                            <motion.h1 variants={variantA} >Junifer <span>Nutri Chunks!</span></motion.h1>
                            <motion.p variants={variantA} >Sustain them from the inside with premium dog food to keep them healthy, active, and happy.</motion.p>
                            <motion.button variants={variantA} >SHOP NOW</motion.button>
                        </motion.div>
                        <div className="image-container">
                            <motion.img variants={variantB}  initial="init" animate="current" exit="exit" src={MainImage} alt="" />
                        </div>
                    
                </div>
            </>
        )
    }
    const ThirdSlide = (props) => {
        return (
            <>
                <div className="hero-section-content-container">
                   
                        <motion.div variants={variantA} key={props.key} initial="init" animate="current" exit="exit" className="text-container">
                            <motion.h1 variants={variantA} >Julius <span>Nutri Chunks!</span></motion.h1>
                            <motion.p variants={variantA} >Sustain them from the inside with premium dog food to keep them healthy, active, and happy.</motion.p>
                            <motion.button variants={variantA} >SHOP NOW</motion.button>
                        </motion.div>
                        <div className="image-container">
                            <motion.img variants={variantB}  initial="init" animate="current" exit="exit" src={MainImage} alt="" />
                        </div>
                    
                </div>
            </>
        )
    }
    const FourthSlide = (props) => {
        return (
            <>
                <div className="hero-section-content-container">
                   
                        <motion.div variants={variantA} key={props.key} initial="init" animate="current" exit="exit" className="text-container">
                            <motion.h1 variants={variantA} >JUmar <span>Nutri Chunks!</span></motion.h1>
                            <motion.p variants={variantA} >Sustain them from the inside with premium dog food to keep them healthy, active, and happy.</motion.p>
                            <motion.button variants={variantA} >SHOP NOW</motion.button>
                        </motion.div>
                        <div className="image-container">
                            <motion.img variants={variantB}  initial="init" animate="current" exit="exit" src={MainImage} alt="" />
                        </div>
                    
                </div>
            </>
        )
    }

    // console.log("elements", elements)

    return (
        <>
            <div  className="hero-section section">
                <div className="container">
                    <div className="hero-section-container">
                        <AnimatePresence>
                        {
                            elements == 1 ? <FirstSlide key={'a'}/> : 
                            elements == 2 ? <SecondSlide key={'b'}/> : 
                            /*elements == 3 ? <ThirdSlide key={'c'}/> : 
                             elements == 4 ? <FourthSlide key={'d'}/> : 
                            elements== 5 ? <FifthSlide key={'e'}/> : */""}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    )
}