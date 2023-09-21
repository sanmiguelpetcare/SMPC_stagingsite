import React from "react";
import moment from "moment";
import { ReduxConnect } from "helpers/HOC"; 
import Request from "config/API";
import Calendar from "assets/media/subscription-page/Calendar.png";

import { Link } from "react-router-dom"

const DeliveryDate = props => {
    const state = props.fe_subscription_state;
    const selectedWeek = state.selectedWeek;
    const activeToggle = state.toggle;

    const onOpenToggle = () => {
        props.fe_subscription_actions.updateActiveToggle({ id: "3rd", contentHeight: props.thirdContentHeightRef.current.clientHeight });
    };

    const names = {
        "trio": "Nutri Chunks Protect Trio",
        "plus": "Nutri Chunks Protect Plus",
        "max-a": "Nutri Chunks Protect Max",
        "max-b": "Nutri Chunks Protect Max"
    };

    const onSubmit = () => {
        const params = {
            name: names[props.subscription],
            userID: props.fe_user_state.loggedUser.id,
            total: state.deliveryOption === 1 ? state.regularSubscription.total : state.customSubscription.total,
            dateCreated: moment().format( "MM/DD/YYYY" ),
            status: "unfulfilled",
            type: state.deliveryOption,
            deliveryWeek: state.selectedWeek,
            isActive: 0,
            months: state.deliveryOption === 1 ? [
                { 
                    month: 0, 
                    total: state.regularSubscription.total,
                    products: Object.values( state.regularSubscription.selected ).map( p => {
                        return {
                            qty: p.qty,
                            discount: p.discount,
                            discountType: p.discountType,
                            price: p.price,
                            productID: p.id
                        }
                    } ) }
            ] : Object.keys( state.customSubscription.selected ).map( k => {
                return {
                    month: k,
                    total: state.customSubscription.selected[k].total,
                    products: Object.values( state.customSubscription.selected[k].products ).map( p => {
                        return {
                            qty: p.qty,
                            discount: p.discount,
                            discountType: p.discountType,
                            price: p.price,
                            productID: p.id
                        }
                    } )
                }
            })
        };

        Request().post( "/subscription", params )
            .then( response => {
                if( response.data ) {
                    window.location.href = "/subscription-checkout";
                }
            })
    };

    return (
        <div className="third-step-main-container step-main-container">
            <div onClick={ onOpenToggle } className="step-heading">
                <h4>3. Choose Delivery Week</h4>
            </div>
            <div className={ activeToggle.id === "3rd" ? `accordion-content-container active` : `accordion-content-container inactive`} style={{ height: activeToggle.id === "3rd" ? activeToggle.contentHeight : 0 }}>
                <div ref={ props.thirdContentHeightRef } className="accordion-content">
                    <div className="step-subheading">
                        <p>choose delivery week</p>
                    </div>
                    <div className="calendar-container">
                        <div className="week-button-container">
                            <div className={selectedWeek === 1 ? "button-container active": "button-container inactive"}>
                                <button onClick={() => props.fe_subscription_actions.updateSelectedWeek(1)}>Week 1</button>
                            </div>
                            <div className={selectedWeek === 2 ? "button-container active": "button-container inactive"}>
                                <button onClick={() => props.fe_subscription_actions.updateSelectedWeek(2)}>Week 2</button>
                            </div>
                            <div className={selectedWeek === 3 ? "button-container active": "button-container inactive"}>
                                <button onClick={() => props.fe_subscription_actions.updateSelectedWeek(3)}>Week 3</button>
                            </div>
                            <div className={selectedWeek === 4 ? "button-container active": "button-container inactive"}>
                                <button onClick={() => props.fe_subscription_actions.updateSelectedWeek(4)}>Week 4</button>
                            </div>
                        </div>
                        <div className="calendar-image-container">
                            <img src={ Calendar } alt="calendar" />
                            <div className={
                                selectedWeek === 1 ? "circle-image week-one"
                                :  selectedWeek === 2 ? "circle-image week-two"
                                :  selectedWeek === 3 ? "circle-image week-three"
                                :  selectedWeek === 4 ? "circle-image week-four" 
                                : ""
                            }></div>
                        </div>
                    </div>
                    <div className="next-button">
                        <Link to="/subscription-checkout">
                            <button className={ selectedWeek ? "enable" : "" } onClick={ onSubmit }>Next</button>
                        </Link>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default ReduxConnect( DeliveryDate, ["fe_subscription", "fe_user"] );