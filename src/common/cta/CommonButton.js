import React from "react"


function CommonButton(props) {
    return (
        <div>
            <button className="common-button">{props.ButtonName}</button>
        </div>
    )
}

export default CommonButton