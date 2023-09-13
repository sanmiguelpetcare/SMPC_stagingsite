import React from "react";
import star from "../../assets/media/dog_digest/common-assets/star.svg"

export default function Bar(props) {

    return (
        <>
            <div className="physical-needs-bar">
                <div className="heading-container">
                    <h5>{props.needs}</h5>
                </div>
                <div className="bar-animation">
                    <img className="bar" src={props.bar} alt="bar" />
                    <img className="star" src={star} alt="star" id={props.starName}/>
                </div>
                <div className="bar-description">
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}