import React from "react"
import "../../assets/sass/app.scss"


export default function termsAndCondition() {
    return (
       <div>
            <div className="terms-and-condition">
                <div className="container">
                    <div className="row">
                        <div className="terms-and-condition-container">
                            <div className="heading-container">
                                <h1>Terms and Conditions</h1>
                                <h5>Paw Prints: Loyalty Program</h5>
                            </div>
                            <div className="main-content-container">
                               <div className="main-content">
                                    <h5 className="sub-heading">PROGRAM PERIOD</h5>
                                    <p>This Program will continue until terminated, suspended, modified, or converted to another rewards program by Nutri Chunks.</p>
                               </div>
                               <div className="main-content">
                                    <h5 className="sub-heading">MEMBERSHIP</h5>
                                    <ol className="membership-list-first-layer">
                                        <li>Free membership. No purchase is necessary to obtain membership in the Paw Prints Program. </li>
                                        <li>Be part of Paw Prints Program. Create an account at https://www.sanmiguelpetcare.com.
                                            <p>You will be required to provide the following information:</p>
                                            <ol className="membership-list-second-layer">
                                                <li>You will be required to provide the following information:</li>
                                                <li>Birthday of your dog (month, day) is optional to receive birthday offers. If you do not provide birthday information you will not receive Birthday Reward Points.</li>
                                            </ol>
                                        </li>
                                        <li>Eligibility. The Program is open to legal residents of Rizal and Greater Manila Area.</li>
                                        <li>Cancel membership. Members may cancel their account at any time. To cancel the account, send an email to nutrichunks@sanmiguelpetcare.com and write “cancel membership” in the subject line.</li>
                                    </ol>
                               </div>
                               <div className="main-content">
                                    <h5 className="sub-heading">REWARDS REDEMPTION</h5>
                                    <ol>
                                        <li>The minimum purchase for which points will apply is ₱75.00. Points may only be used online at <a href="/">https://www.sanmiguelpetcare.com</a></li>
                                        <li>Points may only be used online at <a href="/">https://www.sanmiguelpetcare.com.</a> It can be used for any Nutri Chunks products, unless otherwise expressly indicated.</li>
                                        <li>In Nutri Chunks, we value every member of the PAWmily, so points in the Paw Prints Program do not expire as long as you have an active online account.</li>
                                        <li>Points accrued in connection with Paw Points Program are promotional, have no cash value and cannot be redeemed for cash. In addition, your redemption of points accrued cannot be combined with any other offers or discounts, unless otherwise expressly indicated.</li>
                                    </ol>
                               </div>
                               <div className="main-content">
                                    <h5 className="sub-heading">REFUNDS AND RETURNS</h5>
                                    <p>Any items received as a result of Points redemption may only be exchanged for a refund of the applicable Points redeemed for such item {`(`}not cash or credit{`)`}. Purchases made with Points will ship in the normal course of business.</p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}