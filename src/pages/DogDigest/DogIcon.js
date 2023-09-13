import { PropaneSharp } from "@mui/icons-material"
import React from "react"
import DogIconList from "./DogIconList"
import Scent from "../../assets/media/dog_digest/dog-digest-hero-section/scent.png"
import { Link } from 'react-router-dom'

export default function DogIcon(props) {

     const dogIcon = DogIconList[props.index].row.map(icon => {
        return (
            <>
                
                    <div className="dog-icon-container">
                        <Link to={`/dog-digest/${icon.link}`}>
                            <div className="dog-icon-image-container">
                                <img src={icon.dogImage} alt="" />
                            </div>
                            <div className="dog-icon-name">
                                <h6>{icon.dogName}</h6>
                            </div>
                            <div></div>
                        </Link>
                    </div>
            </>
        )
    })

    return (
        <>
            <div className="dog-digest-row-container">
                {dogIcon}
                <div className="dash-animation-container">
                    <div className="dash-animation-image-container">
                        <img src={Scent} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}