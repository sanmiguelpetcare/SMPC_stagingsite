import React, { useState } from "react"
import numeral from "numeral";
import { ReduxConnect } from "helpers/HOC";

import { monthButtons, subscriptionMonths } from "./Config";


import Products from "./Products/Products";

const Custom = (props) => {
    const output = () => {
        let arr = [];

        for(let i = 0; i < subscriptionMonths[props.subscription] ? subscriptionMonths[props.subscription] : 0; i++) {
            const noOfSelectedProducts = Object.values((props.fe_subscription_state.customSubscription.selected[i] || {}).products || {0: { qty: 0 }}).map( p => p.qty ).reduce((total, n) => total + n);
            const getPreviousWeight = (index) => Object.values((props.fe_subscription_state.customSubscription.selected[index] || {}).products || {0: { weight: "0", qty: 0 }}).map( p => parseInt( p.weight.replace("kg", "") ) * p.qty ).reduce((total, n) => total + n);
            const shouldBeActive = getPreviousWeight( i ) >= 20 ? true : false;

            arr = [
                ...arr, 
                {
                    isActive: shouldBeActive,
                    html: (
                        <div className="product-item">
                            <div onClick={() => props.fe_subscription_actions.updateCustomActiveMonth(i)} className={`month-button-container ${ shouldBeActive ? "enabled" : "disabled" }`}>
                                <h6>{ monthButtons[i] }</h6>
                                <div className="month-details">
                                    <span># of selected items: { noOfSelectedProducts }</span>
                                    <span>Total amount: ₱{ numeral((props.fe_subscription_state.customSubscription.selected[i] || {}).total || 0).format( "0,0.00" ) }</span>
                                </div>
                            </div>
                            <div className={ props.fe_subscription_state.customSubscription.activeMonth === i ? `product-list-container active` : `product-list-container inactive`}>
                                <div className="product-with-subheading-container">
                                    <div className="monthly-subheading-container">
                                        <p>Minimum purchase requirements apply. Buy at least 20kg of Nutri Chunks Premium Dog Food and one ProtekTODO pack every month.</p>
                                    </div>
                                    <Products month={ i } />
                                </div>
                            </div>
                        </div>
                    )
                }
            ];
        }

        return arr;
    }
    
    return(
        <>
            <div className="custom-container">
                <div className="step-subheading">
                    <p>Let's talk about what you want for each month.</p>
                </div>
                { output().map( o => o.html ) }
            </div>
            <div className="next-button">
                <button className={`${ output().filter( o => o.isActive ).length === subscriptionMonths[props.subscription] ? "enable" : "" }`} onClick={ props.onNextToggle }>Next</button>
            </div> 
        </>
    )
}

export default ReduxConnect( Custom, ["fe_subscription"] );