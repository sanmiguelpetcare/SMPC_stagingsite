import React from "react"
import JoinadventureEmblem from "../../assets/media/paw-prints/join_emblem.png"
import PawprintEmblem from "../../assets/media/paw-prints/paw_print_emblem.png"
import TreasureEmblem from "../../assets/media/paw-prints/treasure_emblem.png"
import ScrollImage from "../../assets/media/paw-prints/scroll.png"

function ScrollComponent() {
    return(
        <div className="scroll-section-container">
                <div className="scroll-image-container">
                    <div className="background-image-container">
                        <img className="scroll-image" src={ScrollImage} />
                    </div>
                    <div className="program-icons-container">
                        <div className="scroll-content">
                            <img src={JoinadventureEmblem} alt=""/>
                            <div className="scroll-text-content-container">
                                <h4>JOIN ADVENTURE</h4>
                                <p>Sign up and be a part of  our Pawmily</p>
                            </div>
                        </div>
                        <div className="scroll-content">
                            <img src={PawprintEmblem} alt=""/>
                            <div className="scroll-text-content-container">
                                <h4>EARN PAW PRINTS</h4>
                                <p>Collect prints in different ways</p>
                            </div>
                        </div>
                        <div className="scroll-content">
                            <img src={TreasureEmblem} alt=""/>
                            <div className="scroll-text-content-container">
                                <h4>CLAIM TREASURE</h4>
                                <p>Get exciting perks and rewards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ScrollComponent