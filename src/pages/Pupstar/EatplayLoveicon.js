import React from "react"
import Colors from "../../common/Variables/Variables.js"

export default function EatplayLoveicon(props) {

    let colorIconName = ""

    if(props.IconName === "EAT") {
        colorIconName = Colors.colorBlue
    } else if(props.IconName === "PLAY") {
        colorIconName = Colors.colorOrange
    } else {
        colorIconName = Colors.colorRed
    }

    return(
        <div>
            <div className="icon-content-container" >
                <h4 className="pupstarAnimate" style={{color: colorIconName}}>{props.IconName}</h4>
                <img className="pupstarAnimate" src={props.IconImage} />
            </div>
        </div>
    )
}