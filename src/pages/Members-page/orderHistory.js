import React, { useEffect } from "react";
import Request from "config/API";
import numeral from "numeral";
import moment from "moment";
import { ReduxConnect } from "helpers/HOC";
import { NavLink } from "react-router-dom";

const OrderHistory = (props) => {
    useEffect(() => {
        if( props.fe_user_state.loggedUser ) {
            Request().get(`/order/user/${ props.fe_user_state.loggedUser.id }`)
                .then( response => {
                    props.fe_user_actions.updateOrders( response.data );
                });
        }
    }, [props.fe_user_state.loggedUser]);

    const orders = props.fe_user_state.orders;

    if( orders.length > 0 ) {
        return (
            <>
                <div className="order-history">
                    <div className="container">
                        <div className="order-history-container">
                            <p>Your Orders Here</p>

                            { orders.map( o => (
                                <div className="order-row">
                                    { o.orderNo }
                                    { o.status }
                                    { numeral( o.total ).format( "0,0.00" ) }
                                    { moment( o.dateCreated ).format( "MM/DD/YYYY" ) }
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="order-norecord text-center">
            <p>You have no orders.</p>
            <NavLink to="/products">Order now</NavLink>
        </div>
    )
}

export default ReduxConnect( OrderHistory, ["fe_user"] );