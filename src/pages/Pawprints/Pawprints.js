import React from "react"
import PawprintsHeroImage from "../../assets/media/paw-prints/program_title.png"
import ChunkyImage from "../../assets/media/paw-prints/chunky_image.png"
import JoinUsImage from "../../assets/media/paw-prints/join-us.png"
import WaysToEarn from "../../assets/media/paw-prints/earn_bulletin.png"
import ClaimBulletin from "../../assets/media/paw-prints/claim_bulletin.png"
import TreasureChest from "../../assets/media/paw-prints/treasure_chest.png"
import PawprintSignup from "../../common/cta/PawprintSignup"
import ScrollComponent from "./ScrollComponent"
import Map from "../../assets/media/paw-prints/map.png"

export default function Pawprints() {
    return(
        <div>
                <div className="paw-prints">
                    <div className="paw-prints-hero-banner-section">
                        <div className="container">
                            <div className="paw-prints-hero-img-container">
                                <img src={ PawprintsHeroImage } alt="paw-prints-hero-image" />
                                <h3>we reward you for being as loyal as your dog</h3>
                            </div>
                        </div>
                    </div>
                    <div className="paw-prints-scroll-section">
                        <div className="container">
                            <ScrollComponent />
                        </div>
                    </div>
                    <div className="paw-prints-join-us-section">
                        <div className="container">
                            <div className="paw-prints-join-us-container">
                                <div className="chunky-image-container">
                                    <img src={ChunkyImage} alt="chunky-image"/>
                                </div>
                                <div className="join-us-image-bulletin-container">
                                    <div className="join-us-image-bulletin">
                                        <img src={JoinUsImage} />
                                    </div>
                                    <div className="join-us-image-bulletin-content">
                                        <h3>Be part of the Pawmily and start your adventure!</h3>
                                        <PawprintSignup />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paw-prints-ways-to-earn-section">
                        <div className="container">
                            <div className="paw-prints-ways-to-earn-container">
                                <div className="ways-to-earn-bulletin-container">
                                    <img src={WaysToEarn} alt="map-image" />
                                    <div className="ways-to-earn-content-container">
                                        <div className="ways-to-earn-content">
                                            <h5>CELEBRATE YOUR DOF'S BIRTHDAY</h5>
                                            <p>Earn 500 Prints</p>
                                        </div>
                                        <div className="ways-to-earn-content">
                                            <h5>PLACE AN ORDER</h5>
                                            <p>Receive 1 Print for every peso you spend</p>
                                        </div>
                                        <div className="ways-to-earn-content">
                                            <h5>FOLLOW US ON SOCIAL MEDIA</h5>
                                            <p>Earn 200 Prints</p>
                                        </div>
                                        <div className="ways-to-earn-content">
                                            <h5>SHARE OUR SOCIAL MEDIA</h5>
                                            <p>Earn 500 Prints</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="map-image-container">
                                    <img src={Map} alt="map-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paw-prints-ways-to-claim-section">
                        <div className="container">
                            <div className="paw-prints-ways-to-claim-container">
                                <div className="treasure-chest-container">
                                    <img src={TreasureChest} alt="treasure-chest-image" />
                                </div>
                                <div className="ways-to-claim-bulletin-container">
                                    <img src={ClaimBulletin} alt="map-image" />
                                    <div className="ways-to-claim-content-container">
                                        <div className="ways-to-earn-content">
                                            <h5>2,500 PRINTS</h5>
                                            <p>₱‌50.00 off</p>
                                        </div>
                                        <div className="ways-to-earn-content">
                                            <h5>5,000 PRINTS</h5>
                                            <p>₱‌100.00 off</p>
                                        </div>
                                        <div className="ways-to-earn-content">
                                            <h5>10,000 PRINTS</h5>
                                            <p>₱‌200.00 off</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paw-prints-termscondition-section">
                        <div className="container">
                            <div className="paw-prints-termscondition-container">
                                <h6>CLICK HERE FOR FULL TERMS {`&`} CONDITIONS</h6>
                                <p>Shipping not included. No other coupon code valid when redeeming reward prints. Restrictions may apply. Prints are only awarded to registered accounts. No purchase necessary to register.</p>
                                <p>Email nutrichunks@sanmiguelpetcare.com with questions or for more information.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}