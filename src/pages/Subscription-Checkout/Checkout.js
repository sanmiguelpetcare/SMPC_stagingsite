import React, { useEffect } from "react";
import { ReduxConnect } from "helpers/HOC";
import Request from "config/API";
import OrderSummary from "./OrderSummary/OrderSummary";

import ShippingDetails from "./ShippingDetails/ShippingDetails";
import DeliveryMethod from "./DeliveryMethod/DeliveryMethod";
import BillingDetails from "./BillingDetails/BillingDetails";
import ReviewDetails from "./ReviewDetails/ReviewDetails";

import { Link } from "react-router-dom"
import { CollectionsOutlined } from "@mui/icons-material";

const Checkout = props => {
    useEffect(() => {
        props.fe_subscription_actions.updateCart({});
        props.common_actions.updateLoading(true);
    }, []);

    useEffect(() => {
        if( props.fe_user_state.loggedUser ) {
            const params = {
                userID: props.fe_user_state.loggedUser.id
            };

            Request().get("/subscription/cart", params)
                .then( response => {
                    props.fe_subscription_actions.updateCart( response.data );
                    props.common_actions.updateLoading(false);
                });
        }
    }, [props.fe_user_state.loggedUser]);

    const firstStep = React.useRef()
    const secondStep = React.useRef()
    const thirdStep = React.useRef()
    const fourthStep = React.useRef()

    const [activeStep, setActiveStep] = React.useState();

    console.log("props.fe_subscription_state.cart.name", props.fe_subscription_state.cart.name)

    return(
        <>
            <div className="checkout-header-section">
                <div className="container">
                   <div className="checkout-header-content-container">
                        <div className="checkout-logo-container">
                            <img src="" alt="" />
                            <div className="head">
                                <h3>CHECKOUT</h3>
                                <h6>{ props.fe_subscription_state.cart.name }</h6>
                            </div>
                        </div>
                        <div className="checkout-continue-shopping">
                            <Link to="/products">
                                <h6>Continue Shopping</h6>
                            </Link>
                        </div>
                   </div>
                </div>
            </div>
            <div className="checkout-page-main-container">
                <div className="container">
                    <div className="checkout-page-content-container">
                        <div className="step-content-container">
                            <div className="content-container">
                                <div className="shipping-details-container step-container">
                                    <div classname="shipping-content-container">
                                        <div onClick={() => setActiveStep("first")} className="step-heading-container">
                                            <h3>1. Shipping Details</h3>
                                        </div>
                                        <div 
                                            className={`${activeStep == "first" ? `accordion-container active` : `accordion-container inactive`}`}
                                            style={{height: activeStep == "first" ? firstStep.current.clientHeight : 0}}
                                        >
                                            <div ref={firstStep} className="accordion-content">
                                                <ShippingDetails onProceed={() => setActiveStep("second")} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="delivery-method-container step-container">
                                    <div className="delivery-method-content-container">
                                        <div onClick={() => setActiveStep("second")} className="step-heading-container">
                                            <h3>2. Payment Options</h3>
                                        </div>
                                        <div 
                                            className={`${activeStep == "second" ? `accordion-container active` : `accordion-container inactive`}`}
                                            style={{height: activeStep == "second" ? secondStep.current.clientHeight : 0}}
                                        >
                                            <div ref={secondStep} className="accoridion-content">
                                                <DeliveryMethod onProceed={() => setActiveStep("third")} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="payment-details-container step-container">
                                    <div className="oayment-details-content-container">
                                        <div onClick={() => setActiveStep("third")} className="step-heading-container">
                                            <h3>3. Billing Address</h3>
                                        </div>
                                        <div 
                                            className={`${activeStep == "third" ? `accordion-container active` : `accordion-container inactive`}`}
                                            style={{height: activeStep == "third" ? thirdStep.current.clientHeight : 0}}
                                        >
                                            <div ref={thirdStep} className="accordion-content">
                                                <BillingDetails onProceed={() => setActiveStep("fourth")} />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="review-place-order-container step-container">
                                    <div className="review-place-order-content-container">
                                        <div onClick={() => setActiveStep("fourth")} className="step-heading-container">
                                            <h3>3. Review Details</h3>
                                        </div>
                                        <div 
                                            className={`${activeStep == "fourth" ? `accordion-container active` : `accordion-container inactive`}`}
                                            style={{height: activeStep == "fourth" ? fourthStep.current.clientHeight : 0}}
                                        >
                                            <div ref={fourthStep} className="accordion-content">
                                                <ReviewDetails />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </>
    )
} 

export default ReduxConnect(Checkout, ["fe_subscription", "fe_user", "subscription"]);