import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";

import DeliveryPackage from "./Steps/DeliveryPackage/DeliveryPackage";
import Products from "./Steps/Products/Products";
import DeliveryDate from "./Steps/DeliveryDate/DeliveryDate";
// import Modal from "./Modal/Modal";

const SubscriptionItem = props => {
    useEffect(() => {
        Request().get( "/product" )
            .then( response => {
                props.fe_subscription_actions.updateProducts( response.data.result );
            });
    }, []);

    const params = useParams();
    const subscription = params.param;

    const firstContentHeightRef = React.createRef();
    const secondContentHeightRef = React.createRef();
    const thirdContentHeightRef = React.createRef();

    return (
        <div className="protect-page">
            <div className="protect-page-heading-section">
                <div className="container">
                    <div className="product-page-heading-content-container">
                        <div className="heading-container">
                            <h1>{ subscription == "trio" ? "Nutri Chunks Protect Trio" : subscription == "plus" ? "Nutri Chunks Protect Plus" : "Nutri Chunks Protect Max" }</h1>
                        </div>
                        <div className="month-subscription-container">
                            <h6>{ subscription == "trio" ? "3-month subscription" : subscription == "plus" ? "6-month subscription" : "1-year subscription" }</h6>
                        </div>
                        <div className="subheading-container">
                            <p>With our subscription-based program, you can have peace of mind. You'll receive premium dog food right to your door step, plus we offer free insurance coverage in case anything goes wrong!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="protect-page-content-section">
                <div className="container">
                    <div className="protect-page-content-container">
                        <div className="protect-page-product-main-container">
                            <DeliveryPackage firstContentHeightRef={ firstContentHeightRef } secondContentHeightRef={ secondContentHeightRef } />
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