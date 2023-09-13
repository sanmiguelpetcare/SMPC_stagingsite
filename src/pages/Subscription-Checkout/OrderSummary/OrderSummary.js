import React, { useEffect } from "react";
import numeral from "numeral";
import { ReduxConnect } from "helpers/HOC";
import Product from "./Product/Product";
import BillingDetails from "./BillingDetails"
import { fetchCartItems } from "helpers/cart";

const OrderSummary = props => {
    // useEffect(() => {
    //     fetchCartItems(props.fe_user_state, props.fe_cart_actions);
    // }, [props.fe_user_state.loggedUser]);

    const subtotal = parseFloat( props.fe_subscription_state.cart.total );
    const shipping = subtotal < 1000 ? 0 : 0;
    const vat = 0;
    const total = subtotal + shipping + vat;

    return (
        <div className="order-summary-container">
            <div className="order-summary-content-container">
                <div className="order-summary-heading">
                    <div className="order-container">
                        <h5>Order Summary</h5>
                    </div>
                </div>
                <div className="product-list-container">
                    { ( props.fe_subscription_state.cart.months || [] ).map( m => (
                        <>
                            { m.month > -1 && (
                                <div className="month-container">
                                    <p>Month { m.month + 1 }</p>
                                </div>
                            )}
                            { m.products.map( item => <Product item={ item } /> ) }
                        </>
                    ) ) }
                </div>
                <BillingDetails 
                    subtotal={subtotal}
                    vat={vat}
                    total={total}
                />
            </div>
        </div>
    );
}

export default ReduxConnect(OrderSummary, ["fe_subscription", "fe_user", "subscription"]);