import React from "react"
import ActiveBoost from "../../assets/media/new-home-page/ActivBoost.svg"
import Meat from "../../assets/media/new-home-page/Meat.png"
import KibbleCapable from "../../assets/media/new-home-page/kibble_capable.png"
import Natural from "../../assets/media/new-home-page/Natural.svg"
import Prebiotics from "../../assets/media/new-home-page/Prebiotics.svg"
import Protein from "../../assets/media/new-home-page/Protein.svg"
import Kibble from "../../assets/media/new-home-page/Kibble.png"
import BottomWave from "../../assets/media/new-home-page/Bottom.svg"
import TopWave from "../../assets/media/new-home-page/Top.svg"
import NcProduct from "../../assets/media/new-home-page/NC_product.png"
import kibbleA from "../../assets/media/new-home-page/Kibbble_01.png"
import kibbleB from "../../assets/media/new-home-page/Kibble_02.png"
import { Link } from "react-router-dom"

export default function KibbleCapableFunction() {
    const data = React.useRef()

    return (
        <>  
            <div className="blue-wave-top">
                <img src={TopWave} alt="" />
            </div>
            <div className="kibble-capable section">
                <img className="blured-kibble-a" src={kibbleA}  alt=""/>
                <img className="blured-kibble-b" src={kibbleB}  alt=""/>
                <div className="container">
                    <div className="kibble-content-container">
                        <img className="unpacked-nc" src={NcProduct}  alt=""/>
                        <div className="animation-container">
                            <div className="kibble-image-container">
                                <img ref={data} className="circular-text" src={KibbleCapable} alt=""/>
                                <div className="meat-container">
                                    <img className="kibble" src={Kibble}  alt=""/>
                                    <img className="meat" src={Meat} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="cta-container">
                            <h4>The only dog food with ActivBoost {'&'} Prebiotics Fortified with Essential Vitamins and Nutrients for a complete and balanced diet.</h4>
                            <div className="icons-container">
                                <div className="active-boost-container icon-container">
                                    <img src={ActiveBoost} alt=""/>
                                </div>
                                <div className="prebiotics-container icon-container">
                                    <img src={Prebiotics} alt=""/>
                                </div>
                                <div className="natural-container icon-container">
                                    <img src={Natural} alt=""/>
                                </div>
                                <div className="quality-protein-container icon-container">
                                    <img src={Protein} alt=""/>
                                </div>
                            </div>
                            <Link to="/nutrition"><button>LEARN MORE</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blue-wave-bottom">
                <img src={BottomWave} alt="" />
            </div>
        </>
    )
}