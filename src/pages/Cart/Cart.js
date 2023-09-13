import React, { useState, useEffect } from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";

import { ReduxConnect } from "helpers/HOC";
import Product from "./Product/Product";

const Cart = props => {
    if( props.fe_cart_state.cart.length > 0) {
        return (
            <>
                <div className="cart-page">
                    <div className="container">
                        <div className="cart-page-content-container">
                            <div className="cart-page-product-list-container">
                                <div className="product-list-heading-container">
                                    <div className="product-list-heading">
                                        <h4>My Cart</h4>
                                    </div>
                                </div>
                                <div className="product-list-single-container">
                                    { props.fe_cart_state.cart.map( ( item, i ) => <Product item={ item } index={ i } /> ) }
                                </div>
                            </div>
                            <div className="cart-page-checkout-container">
                                <div className="cart-page-checkout-header-container">
                                    <div className="cart-page-checkout-heading">
                                        <h4>Price Summary</h4>
                                    </div>
                                </div>
                                <div className="cart-page-checkout-content-container">
                                    <div className="cart-page-subtotal-container">
                                        <div className="subtotal-title">
                                            <h5>Subtotal</h5>
                                        </div>
                                        <div className="total-price">
                                            <h5>₱{ numeral( props.fe_cart_state.subtotal ).format( "0,0.00" ) }</h5>
                                        </div>
                                    </div>
                                    <div className="cart-page-checkout-button">
                                        <div className="cart-page-checkout-button-container">
                                            <Link to="/checkout">
                                                <button className="">Checkout</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } 
    
    return (
        <>
            <div className="cart-page">
                <div className="container">
                    <div className="empty-cart-container">
                        <p>You have no Item on Cart</p>
                        <Link to="/">
                            <p>Shop Now</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReduxConnect(Cart, ["fe_cart", "fe_user"]);