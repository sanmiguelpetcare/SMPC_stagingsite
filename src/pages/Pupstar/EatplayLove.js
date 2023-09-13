import React from "react"
import EatplayLoveicon from "./EatplayLoveicon"
import PupstarEat from "../../assets/media/Pupstar/eat.svg"
import PupstarPlay from "../../assets/media/Pupstar/play.svg"
import PupstarLove from "../../assets/media/Pupstar/love.svg"

export default function EatplayLove() {
    return(
        <div className="pupstar-icon-container">
            <EatplayLoveicon 
                IconName={"EAT"}
                IconImage={PupstarEat}
            />
            <EatplayLoveicon 
                IconName={"PLAY"}
                IconImage={PupstarPlay}
            />
            <EatplayLoveicon 
                IconName={"LOVE"}
                IconImage={PupstarLove}
            />
        </div>
    )
}