import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";

import DeliveryPackage from "./Steps/DeliveryPackage/DeliveryPackage";
import Products from "./Steps/Products/Products";
import DeliveryDate from "./Steps/DeliveryDate/DeliveryDate";
import TrioLogo from "../../../assets/media/subscription-landing-page/TRIO_positive.png";
import PlusLogo from "../../../assets/media/subscription-landing-page/PLUS_positive.png";
import MaxLogo from "../../../assets/media/subscription-landing-page/MAX_negative.png";

// import Modal from "./Modal/Modal";

const SubscriptionItem = props => {
    const params = useParams();
    const subscription = params.param;

    const firstContentHeightRef = React.createRef();
    const secondContentHeightRef = React.createRef();
    const thirdContentHeightRef = React.createRef();

    useEffect(() => {
        props.common_actions.updateLoading(true);
        // props.fe_subscription_actions.updateSubscriptionType(params.param)

        Request().get( "/product" )
            .then( response => {
                props.fe_subscription_actions.updateProducts( response.data.result );      
                
                Request().get( "/product", { includedInSubscription: true })
                    .then( response => {
                        try { 
                            props.fe_subscription_actions.updateIncludedInSubscription( response.data.result );
                            props.common_actions.updateLoading(false);
                        } catch(e) {
                            console.log(e);
                        }
                    });
            });
    }, []);

    console.log("subscriptionitem.js", props.fe_subscription_state)

    return (
        <div className="protect-page">
            <div className="protect-page-heading-section">
                <div className="container">
                    <div className="protect-page-main-container">
                        <div className="logo-container">
                            <div className="logo-content-container">
                                <div className="logo-content selected">
                                    <img src={subscription === "trio" ? TrioLogo : subscription === "plus-a" || "plus-b" ? PlusLogo : subscription === "max-a" || "max-b" || "max-c" ? MaxLogo : ""} alt=""/>
                                </div>
                              <div className="not-selected">
                                <div className="logo-content inactive">
                                        <img src={subscription === "plus-a" || "plus-b" ? MaxLogo : subscription === "max-a" || "max-b" || "max-c" ? PlusLogo : TrioLogo} alt=""/>
                                    </div>
                                    <div className="logo-content inactive">
                                        <img src={subscription === "max-a" || "max-b" || "max-c" ? TrioLogo : subscription === "trio" ? PlusLogo : MaxLogo} alt=""/>
                                    </div>
                              </div>
                            </div>
                        </div>  
                        <div className="product-page-heading-content-container">
                            <div className="heading-container">
                                <h1>{ subscription === "trio" ? "Nutri Chunks Protect Trio" : subscription === "plus" ? "Nutri Chunks Protect Plus" : "Nutri Chunks Protect Max" }</h1>
                            </div>
                            <div className="month-subscription-container">
                                <h6>{ subscription === "trio" ? "3-month subscription" : subscription === "plus" ? "6-month subscription" : "1-year subscription" }</h6>
                            </div>
                            <div className="month-inclussion-container">
                                <div className="inclussion-content">
                                    {
                                        subscription === "trio" ? 
                                            <div className="content">                                               
                                                <p className="included">Free Delivery</p>
                                                <p className="included">Dog Insurance Package</p>
                                                <p className="included">{'Bark Pack (Subscription Freebies)'}</p>
                                                <p className="excluded">Pet Care Package</p>
                                                <p className="excluded">Discount</p>
                                            </div> : 
                                        subscription === "plus-a" ?
                                              <div className="content">                                               
                                                <p className="included">Free Delivery</p>
                                                <p className="included">Dog Insurance Package</p>
                                                <p className="included">{'Bark Pack (Subscription Freebies)'}</p>
                                                <p className="included">Free Delivery</p>
                                                <p className="included">Discount</p>
                                            </div> :
                                        subscription === "plus-b" ? 
                                              <div className="content">                                               
                                                <p className="included">Free Delivery</p>
                                                <p className="included">Dog Insurance Package</p>
                                                <p className="included">{'Bark Pack (Subscription Freebies)'}</p>
                                                <p className="included">Pet Care Package</p>
                                                <p className="excluded">Discount</p>
                                            </div> : 
                                        subscription === "max-a" ?
                                              <div className="content">                                               
                                                <p className="included">Free Delivery</p>
                                                <p className="included">Dog Insurance Package</p>
                                                <p className="included">{'Bark Pack (Subscription Freebies)'}</p>
                                                <p className="included">Pet Care Package</p>
                                                <p className="included">Discount 8%</p>
                                            </div> : 
                                        subscription === "max-b" ?
                                              <div className="content">                                               
                                                <p className="included">Free Delivery</p>
                                                <p className="included">Dog Insurance Package</p>
                                                <p className="included">{'Bark Pack (Subscription Freebies)'}</p>
                                                <p className="included">Pet Care Package</p>
                                                <p className="included">Discount 5%</p>
                                            </div> : 
                                        subscription === "max-c" ? 
                                              <div className="content">                                               
                                                <p className="included">Free Delivery</p>
                                                <p className="included">Dog Insurance Package</p>
                                                <p className="included">{'Bark Pack (Subscription Freebies)'}</p>
                                                <p className="included">Pet Care Package</p>
                                                <p className="excluded">Discount</p>
                                            </div> : ""}
                                </div>
                            </div>
                            <div className="subheading-container">
                                <p>With our subscription-based program, you can have peace of mind. You'll receive premium dog food right to your door step, plus we offer free insurance coverage in case anything goes wrong!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="protect-page-content-section">
                <div className="container">
                    <div className="protect-page-content-container">
                        <div className="protect-page-product-main-container">
                            <DeliveryPackage firstContentHeightRef={ firstContentHeightRef } secondContentHeightRef={ secondContentHeightRef }/>
                            <Products secondContentHeightRef={ secondContentHeightRef } thirdContentHeightRef={ thirdContentHeightRef } subscription={ subscription } />
                            <DeliveryDate thirdContentHeightRef={ thirdContentHeightRef } subscription={ subscription } />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Modal /> */}
        </div>
    );
};

export default ReduxConnect( SubscriptionItem, ["fe_subscription"] );