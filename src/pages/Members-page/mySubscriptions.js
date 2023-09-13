import React, { useEffect } from "react";
import numeral from "numeral";
import Request from "config/API";
import { NavLink } from "react-router-dom";
import { ReduxConnect } from "helpers/HOC";
import Products from "../../ProductOrderlIst"

const MySubscriptions = (props) => {
    useEffect(() => {
        if( props.fe_user_state.loggedUser ) {
            Request().get(`/subscription/subscribed/${ props.fe_user_state.loggedUser.id }`)
                .then( response => {
                    props.fe_user_actions.updateSubscription( response.data );
                });
        }
    }, [props.fe_user_state.loggedUser]);

    const subscription = props.fe_user_state.subscription;

    if( subscription ) {
        return (
            <>
                <div className="my-subscriptions">
                    <div className="container">
                        <div className="subscription-content-container">
                            <div className="orders">
                                <div className="order-title">
                                    <h6>Product Ordered</h6>
                                </div>
                                { subscription.months.map( m => {
                                    return (
                                        <div className="month-container">
                                            { subscription.type === 2 && (
                                                <div className="header">
                                                    <h4>Month { m.month }</h4>
                                                </div>
                                            ) }
                                            <div className="products">
                                                { m.products.map( p => (
                                                    <div className="product-item">
                                                        { (p.product.images || []).length > 0 ? <img src={ `files/${ p.product.images[0].name }`} alt={ p.product.name } width={ 40 } /> : <img src={  `/images/default.png` } alt="default" width={ 40 } /> }
                                                        <div className="product-info">
                                                            { p.product.name }
                                                            <p>
                                                                ₱{ numeral( p.price ).format( "0,0.00" ) }
                                                                { p.qty }
                                                            </p>
                                                        </div>
                                                    </div>
                                                )) }
                                            </div>
                                        </div>
                                    )
                                }) }
                            </div>
                            <div className="subsciption-details">
                                <div className="subscription-type parameters">
                                    <h6>Subscription Type:</h6>
                                    <h6>{ subscription.name }</h6>
                                </div>
                                <div className="delivery-type parameters">
                                    <p>Delivery option: </p>
                                    <p>{ subscription.type === 1 ? "Regular" : "Custom" }</p>
                                </div>
                                <div className="subscription-date parameters">
                                    <p>Date of Subscription:</p>
                                    <p>{ subscription.dateCreated }</p>
                                </div>
                                <div className="subscription-delivery-week parameters">
                                    <p>Delivery Week:</p>
                                    <p>Week { subscription.deliveryWeek }</p>
                                </div>
                                <div className="billing-container parameters">
                                    <p>Total Price:</p>
                                    <p>₱{ numeral( subscription.total ).format( "0,0.00" ) }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="subscription-norecord text-center">
            <p>You have no subscriptions.</p>
            <NavLink to="/subscription">Subscribe now</NavLink>
        </div>
    )
}

export default ReduxConnect( MySubscriptions, ["fe_signup", "fe_user"] );