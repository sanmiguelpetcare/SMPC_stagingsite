import React from "react"
import PawprintLogo from "../../assets/media/paw-prints/white-paw.png"
import PawprintPopup from "./pawprintPopup"

export default function PawPrintButton() {

    const [popupStatus, setPopupStatus] = React.useState(false)

    return(
        <>
           <div className="pawprint-popup">
                {popupStatus ? <PawprintPopup /> : <></>}
                <div onClick={() => setPopupStatus(!popupStatus)} className="pawprint-button">
                        <div className="pawprint-button-container">
                            <div className="pawprint-logo">
                                <img src={PawprintLogo} />
                            </div>
                            <div className="pawprint-text">
                                <p>Paw Prints</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}