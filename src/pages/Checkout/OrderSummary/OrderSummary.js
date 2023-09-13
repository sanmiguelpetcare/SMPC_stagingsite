import React, { useEffect } from "react";
import numeral from "numeral";
import { ReduxConnect } from "helpers/HOC";
import Product from "./Product/Product";
import { NavLink } from "react-router-dom";

import { fetchCartItems } from "helpers/cart";

const OrderSummary = props => {
    useEffect(() => {
        fetchCartItems(props.fe_user_state, props.fe_cart_actions);
    }, [props.fe_user_state.loggedUser]);

    const subtotal = props.fe_cart_state.subtotal;
    const shipping = subtotal < 1000 ? 100 : 0;
    const vat = 0;
    const total = subtotal + shipping + vat;

    const itemOnCart = props.fe_cart_state.cart

    return (
        <div className="order-summary-container">
            <div className="order-summary-content-container">
                <div className="order-summary-heading">
                    <div className="order-container">
                        <h5>Order Summary</h5>
                    </div>
                    <h5>
                        <NavLink to="/cart">Edit Cart</NavLink>
                    </h5>
                </div>
                <div className="product-list-container">
                    { props.fe_cart_state.cart.map( item => <Product item={ item } /> ) }
                </div>
                <div className="total-value-details-container">
                    <div className="subtotal-container value-details-container">
                        <p>Subtotal</p>
                        <p>₱{ numeral( subtotal ).format( "0,0.00" ) }</p>
                    </div>
                    <div className="shipping-container value-details-container">
                        <p>Shipping</p>
                        <p>{ shipping > 0 ? `₱${ shipping }` : "--" }</p>
                    </div>
                    <div className="vat-container value-details-container">
                        <p>VAT</p>
                        <p>₱{ numeral( vat ).format( "0,0.00" ) }</p>
                    </div>
                    <div className="total-value-container value-details-container">
                        <p>Total</p>
                        <p>₱{ numeral( total ).format( "0,0.00" ) }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReduxConnect(OrderSummary, ["fe_cart", "fe_user"]);