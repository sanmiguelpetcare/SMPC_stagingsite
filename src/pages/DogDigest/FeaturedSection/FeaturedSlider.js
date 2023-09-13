import React from "react"

export default function FeaturedSlider(props) {    
    return (
        <>
            <div className="featured-image-container">
                <div className="featured-image-content featured-one">
                    <img src={props.firstImage} alt=""/>
                </div>
                <div className="featured-image-content featured-two">
                    <img src={props.secondImage} alt=""/>
                </div>
            </div>
        </>
    )
}