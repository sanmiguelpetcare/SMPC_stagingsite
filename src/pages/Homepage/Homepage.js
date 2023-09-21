import React from "react"
import HeroSection from "./HeroSection"
import KibbleCapableSection from "./KibbleCapableSection"
import ProductsCarousel from "./ProductsCarousel"
import Testimonials from "./Testimonials"
import Kibble from "../../assets/media/new-home-page/Kibble.png"
import Kibbles from "../../assets/media/homepage-assets/Kibbles.png"
import HeroSlider from "./HeroSlider"


export default function Homepage() {

    const [kibbleAposition, setKibbleApostion] = React.useState([])
    const [kibbleview, setKibbleView] = React.useState()
    const[kibblePost, setKibblePost] = React.useState()

    const positionAx = 100
    const positionAy = 100
    const positionBx = -120
    const positionBy = -140

    const handleOnmousemovement = (e) => {
        setKibbleApostion([e.clientX, e.clientY])
    }

    const stylesA = {
        transform: `translate(${kibbleAposition[0] / positionAx}%, ${kibbleAposition[1] / positionAy}%)`
    }

    const stylesB = {
        transform: `translate(${kibbleAposition[0] / positionBx}%, ${kibbleAposition[1] / positionBy}%)`
    }

    const flowDown = () => {
        setKibbleView(window.scrollY)
    }

    // window.addEventListener("scroll", flowDown)

    const kibbleApost = React.useRef()

    // console.log(kibbleApost)

    const offsetY = window.scrollY

    const handleFlow = () => {
        setKibblePost(offsetY)
    }

    // window.addEventListener("scroll", handleFlow)


    return (
        <>
            <div /*onMouseMove={handleOnmousemovement}*/ className="homepage">
                <div className="homepage-content-container">
                    {/* <div className="falling-kibble-container">
                        <img ref={kibbleApost} style={stylesA} className="falling-kibble-animA" src={Kibble} alt=""/>
                        <img style={stylesB} className="falling-kibble-animB" src={Kibble} alt=""/>
                    </div> */}
                    <div className="falling-kibbles-container">
                        <div className="falling-kibbles-content">
                            <img src={Kibbles} className="falling-kibbles"/>
                        </div>
                    </div>
                    
                    <HeroSlider />
                    <KibbleCapableSection />
                    <ProductsCarousel />
                    <Testimonials />
                </div>
            </div>
        </>
    )
}