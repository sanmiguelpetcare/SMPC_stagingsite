import React from "react";
import moment from "moment";
import { ReduxConnect } from "helpers/HOC"; 
import Request from "config/API";
import Calendar from "assets/media/subscription-page/Calendar.png";
import StepTwo from "../../../../../assets/media/subscription-page/STEP_2.png"
import { useParams } from "react-router-dom"

import { Link } from "react-router-dom"

const DeliveryDate = props => {
    const state = props.fe_subscription_state;
    const selectedWeek = state.selectedWeek;
    const activeToggle = state.toggle;

    const { param } = useParams();

    const onOpenToggle = () => {
        props.fe_subscription_actions.updateActiveToggle({ id: "3rd", contentHeight: props.thirdContentHeightRef.current.clientHeight });
    };

    const names = {
        "trio": "Nutri Chunks Protect Trio",
        "plus-a": "Nutri Chunks Protect Plus-a",
        "plus-b": "Nutri Chunks Protect Plus-b",
        "max-a": "Nutri Chunks Protect Max-a",
        "max-b": "Nutri Chunks Protect Max-b",
        "max-c": "Nutri Chunks Protect Max-c"
    };

    let timer;

    const onSubmit = () => {
        const includedTotal = state.includedInSubscription.length > 0 ? Object.values( state.includedInSubscription ).map( p => p.includedInSubscriptionQty * p.price ).reduce((total, n) => total + n) : 0;

        const getRegularTotal = () => {
            let total = 0;

            const items = Object.keys( state.regularSubscription.selected ).map( k => state.regularSubscription.selected[k] );

            for( const item of items ) {
                total += parseFloat( item.price ) * item.qty;
            }

            return total;
        };

        const getCustomTotal = () => {
            let total = 0;
            
            const items = Object.keys( state.customSubscription.selected ).map( k => state.customSubscription.selected[k] );
        
            for( const item of items ) {
                total += parseFloat( item.total );
            }

            return total;
        }

        const params = {
            name: names[props.subscription],
            userID: props.fe_user_state.loggedUser.id,
            total: state.deliveryOption === 1 ? includedTotal + getRegularTotal() : includedTotal + getCustomTotal(),
            dateCreated: moment().format( "MM/DD/YYYY" ),
            status: "unfulfilled",
            type: state.deliveryOption,
            deliveryWeek: state.selectedWeek,
            isActive: 0,
            months: state.deliveryOption === 1 ? [
                { 
                    month: -1, 
                    total: includedTotal,
                    products: [
                        ...state.includedInSubscription.map( p => ({
                            qty: p.includedInSubscriptionQty,
                            discount: p.discount,
                            discountType: p.discountType,
                            price: p.price,
                            productID: p.id
                        }))
                    ]
                },
                { 
                    month: 0, 
                    total: getRegularTotal(),
                    products: [
                        ...Object.values( state.regularSubscription.selected ).map( p => {
                            return {
                                qty: p.qty,
                                discount: p.discount,
                                discountType: p.discountType,
                                price: p.price,
                                productID: p.id
                            }
                        } )
                    ]
                }
            ] : [
                { 
                    month: -1, 
                    total: includedTotal,
                    products: [
                        ...state.includedInSubscription.map( p => ({
                            qty: p.includedInSubscriptionQty,
                            discount: p.discount,
                            discountType: p.discountType,
                            price: p.price,
                            productID: p.id
                        }))
                    ]
                },
                ...Object.keys( state.customSubscription.selected ).map( k => {
                    return {
                        month: k,
                        total: state.customSubscription.selected[k].total,
                        products: [
                            ...Object.values( state.customSubscription.selected[k].products ).map( p => {
                                return {
                                    qty: p.qty,
                                    discount: p.discount,
                                    discountType: p.discountType,
                                    price: p.price,
                                    productID: p.id
                                }
                            } )
                        ]
                    }
                })
            ]
        };

        // props.fe_subscription_actions.updateSubscriptionType(param.param)

        props.common_actions.updateLoading(true);

        Request().post( "/subscription", params )
            .then( response => {
                if( response.data ) {
                    window.location.href = "/subscription-checkout";
                }
            })

    };

    const onPrevToggle = () => {
        props.fe_subscription_actions.updateActiveToggle({ id: "2nd", contentHeight: props.thirdContentHeightRef.current.clientHeight });

        clearTimeout( timer );
        timer = setTimeout(() => {
            props.fe_subscription_actions.updateActiveToggle({ id: "2nd", contentHeight: "auto" });
        }, 500)
    }

    return (
        <div className={activeToggle.id == "3rd" ? "third-step-main-container step-main-container active" : "third-step-main-container step-main-container inactive"}>
            <div className="step-child-container">
                <div className="image-container">
                    <img src={StepTwo} alt=""/>
                </div>
                <div className="step-child-main-content"> 
                    <div onClick={ onOpenToggle } className="step-heading">
                        <h4>3. Choose Delivery Week</h4>
                    </div>
                    {/* <div className={ activeToggle.id == "3rd" ? `accordion-content-container active` : `accordion-content-container inactive`} style={{ height: activeToggle.id == "3rd" ? activeToggle.contentHeight : 0 }}> */}
                    <div className={ activeToggle.id == "3rd" ? `accordion-content-container active` : `accordion-content-container inactive`}>
                        <div ref={ props.thirdContentHeightRef } className="accordion-content">
                            <div className="step-subheading">
                                <p>choose delivery week</p>
                            </div>
                            <div className="calendar-container">
                                <div className="week-button-container">
                                    <div className={selectedWeek == 1 ? "button-container active": "button-container inactive"}>
                                        <button onClick={() => props.fe_subscription_actions.updateSelectedWeek(1)}>Week 1</button>
                                    </div>
                                    <div className={selectedWeek == 2 ? "button-container active": "button-container inactive"}>
                                        <button onClick={() => props.fe_subscription_actions.updateSelectedWeek(2)}>Week 2</button>
                                    </div>
                                    <div className={selectedWeek == 3 ? "button-container active": "button-container inactive"}>
                                        <button onClick={() => props.fe_subscription_actions.updateSelectedWeek(3)}>Week 3</button>
                                    </div>
                                    <div className={selectedWeek == 4 ? "button-container active": "button-container inactive"}>
                                        <button onClick={() => props.fe_subscription_actions.updateSelectedWeek(4)}>Week 4</button>
                                    </div>
                                </div>
                                <div className="calendar-image-container">
                                    <img src={ Calendar } alt="calendar" />
                                    {/* <div className={
                                        selectedWeek == 1 ? "circle-image week-one"
                                        :  selectedWeek == 2 ? "circle-image week-two"
                                        :  selectedWeek == 3 ? "circle-image week-three"
                                        :  selectedWeek == 4 ? "circle-image week-four" 
                                        : ""
                                    }></div> */}
                                </div>
                            </div>
                            <div className="next-button">
                                <button className={ selectedWeek ? "enable" : "" } onClick={ onSubmit }>Next</button>
                                <button className="enable" onClick={ onPrevToggle }>Back</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReduxConnect( DeliveryDate, ["fe_subscription", "fe_user"] );