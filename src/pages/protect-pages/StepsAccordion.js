import React from "react"

export default function StepsAccordion(props) {

     const content = () => {
            // if(props.accordionClicked === props.accordionID) {
                return(props.content)
            // } 
     }

    return(
        <>
            {content()}
        </>
    )
}