import React from "react"
import QuoteIcon from "../../../assets/media/homepage-assets/quote-left.svg"

export default function TestimonySingle(props) {
    return (
        <div className="testimonial-content">
            <div className="testimonial-white-box">
                <img className="experts-image" src={props.Image} />
                <h4>{props.Name}</h4>
                <p>{props.Position}</p>
                <div className="testimony-container">
                    <img className="icon-image" src={QuoteIcon}></img>
                    <p>{props.Testimony}</p>
                </div>
            </div>
        </div>
    )
}