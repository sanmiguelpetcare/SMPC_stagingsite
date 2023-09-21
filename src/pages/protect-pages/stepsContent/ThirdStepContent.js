import React from "react"
import StepsAccordion from "../StepsAccordion"
import Calendar from "../../../assets/media/subscription-page/Calendar.png"

export default function ThirdStepContent(props) {

    const [selectedWeek, setSelectedWeek] = React.useState()

    const handleWeekButton = (data) => {
        setSelectedWeek(data)
    }

    return(
        <>
            <div className="step-subheading">
                <p>choose delivery week</p>
            </div>
            <div className="calendar-container">
                <div className="week-button-container">
                    <div className="button-container">
                        <button onClick={() => handleWeekButton(1)}>Week 1</button>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleWeekButton(2)}>Week 2</button>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleWeekButton(3)}>Week 3</button>
                    </div>
                    <div className="button-container">
                        <button onClick={() => handleWeekButton(4)}>Week 4</button>
                    </div>
                </div>
                <div className="calendar-image-container">
                    <img src={Calendar} alt="calendar" />
                    <div className={
                                    selectedWeek === 1 ? "circle-image week-one"
                                :  selectedWeek === 2 ? "circle-image week-two"
                                :  selectedWeek === 3 ? "circle-image week-three"
                                :  selectedWeek === 4 ? "circle-image week-four" 
                                : ""
                            }></div>
                </div>
            </div>
            <div className="next-button">
                <button onClick={props.NextButton}>Next</button>
            </div> 
        </>
    )
}