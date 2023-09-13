import React from "react"
import IconFunction from "./IconFunction"
import DogsNutrichunksLogo from "../../assets/media/nutrition/DOGS_AND_NC_2x.png"
import PawDivider from "../../assets/media/Paw_Divider.svg"

export default function LetsTalkAboutSection() {

    return(
        <div className="lets-talk-about-section section">
            <div className="container">
                <div className="lets-talk-about-heading-container">
                    <img className="paw-divider" src={PawDivider} />
                    <h1>LET'S TALK ABOUT</h1>
                    <img className="lets-talk-about-logo" src={DogsNutrichunksLogo} />
                </div>
                <IconFunction />
            </div>
        </div>
    );
}