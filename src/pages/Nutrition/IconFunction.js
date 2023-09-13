import React from "react"
import IconList from "./IconList"
import orange from "../../assets/media/nutrition/orange.svg"
import blue from "../../assets/media/nutrition/blue.svg"

export default function IconFunction() {

    const nutritionIcons = IconList.map((icon) => {
        
        return(
            <div className="single-icon-container">
                <img id={icon.id} onClick={clickNutritionIcon} className="single-icon" src={icon.blueIcon} />
                <h6>{icon.title}</h6>
            </div>
        )
    })

    const [activeDescription, setactiveDescription] = React.useState([
        IconList[0].blueDescription, 
        IconList[0].orangeDescription,
        IconList[0].blueIcon,
        IconList[0].orangeIcon,
        IconList[0].title
    ])

    function clickNutritionIcon(e) {
        let clickedId = e.target.id
        setactiveDescription([
            IconList[clickedId].blueDescription, 
            IconList[clickedId].orangeDescription,
            IconList[clickedId].blueIcon,
            IconList[clickedId].orangeIcon,
            IconList[clickedId].title
        ])
    }

    return(
        <div className="lets-talk-about-content-container">
            <div className="lets-talk-about-icons-container">
                {nutritionIcons}
            </div>
            <div className="lets-talk-about-description-container">
                <div className="lets-talk-about-description-heading-container">
                    <h1>{activeDescription[4]}</h1>
                </div>
                <div className="description-withicon-container">
                    <div className="icon-image-container">
                        <img className="description-icon" src={activeDescription[3]}/>
                    </div>
                    <div className="box-description-container">
                        <div className="image-box">
                            <img src={orange}/>
                        </div>
                        <div className="description-container">
                            <p>{activeDescription[0]}</p>
                        </div>
                    </div>
                </div>
                <div className="description-withicon-container">
                    <div className="icon-image-container">
                        <img className="description-icon" src={activeDescription[2]}/>
                    </div>
                    <div className="box-description-container">
                        <div className="image-box">
                            <img src={blue}/>
                        </div>
                        <div className="description-container">
                            <p>{activeDescription[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}