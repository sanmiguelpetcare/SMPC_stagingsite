import React from "react"
import YourRewards from "./YourRewards"
import WaysToEarn from "./WaysToEarn"
import YourActivity from "./YourActivity"

export default function PawprintPopup() {

    const [pawPrintPopupStatus, setPawPrintPopupStatus] = React.useState("")

    console.log("pawprintStatus", pawPrintPopupStatus)

    return(
        <>
            <div className="pawprint-popup-container">
                <div className="pawprint-popup-content">
                    {
                        pawPrintPopupStatus === "reward"  ? 
                            <>
                                <div className="pawprint-popup-head">
                                    <p onClick={() => setPawPrintPopupStatus("")}>{"<"}</p>
                                    <p>700 Prints</p>
                                </div>
                                <YourRewards />
                            </> : 
                        pawPrintPopupStatus === "waysToearn" ?
                            <>
                                <div className="pawprint-popup-head">
                                    <p onClick={() => setPawPrintPopupStatus("")}>{"<"}</p>
                                    <p>700 Prints</p>
                                </div>
                                <WaysToEarn />
                            </> :
                        pawPrintPopupStatus === "waysToRedeem" ?
                            <>
                                <div className="pawprint-popup-head">
                                    <p onClick={() => setPawPrintPopupStatus("")}>{"<"}</p>
                                    <p>700 Prints</p>
                                </div>
                                <WaysToEarn />
                            </> :
                        pawPrintPopupStatus === "yourActivity" ?
                            <>
                                <div className="pawprint-popup-head">
                                    <p onClick={() => setPawPrintPopupStatus("")}>{"<"}</p>
                                    <p>700 Prints</p>
                                </div>
                                <YourActivity />
                            </> :
                        <>
                            <div className="pawprint-popup-head">
                                <p>Your prints</p>
                                <p>700</p>
                            </div>
                            <div className="pawprint-popup-body">
                                <div className="pawprint-popup-body-content">
                                    <div onClick={() => setPawPrintPopupStatus("reward")} className="your-rewards-button button-container">
                                        <div className="content">
                                            <p>Your Rewards</p>
                                            <p>You have 1 rewward available</p>
                                        </div>
                                        <div className="arrow">
                                            <p>{">"}</p>
                                        </div>
                                    </div>
                                    <div onClick={() => setPawPrintPopupStatus("waysToearn")} className="ways-to-earn button-container">
                                        <div className="content">
                                            <p>Ways to earn</p>
                                        </div>
                                        <div className="arrow">
                                            <p>{">"}</p>
                                        </div>
                                    </div>
                                    <div onClick={() => setPawPrintPopupStatus("waysToRedeem")} className="ways-to-redeem button-container">
                                        <div className="content">
                                            <p>Ways to redeem</p>
                                        </div>
                                        <div className="arrow">
                                            <p>{">"}</p>
                                        </div>
                                    </div>
                                    <div onClick={() => setPawPrintPopupStatus("yourActivity")} className="your-activity button-container">
                                        <div className="content">
                                            <p>Your activity</p>
                                        </div>
                                        <div className="arrow">
                                            <p>{">"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}