import React from "react";
import Products from "./Products/Products";
import { ReduxConnect } from "helpers/HOC";

const Regular = props => {
    const totalWeight = () => {
        let count = 0;
        const arr = Object.values( props.fe_subscription_state.regularSubscription.selected );

        for(let i = 0; i < arr.length; i++) {
            count += parseInt( arr[i].qty ) * parseInt( arr[i].weight.replace( "kg", "" ) );
        }

        return count;
    }
    
    return (
        <>
            <div className="regular-container">
                <div className="step-subheading">
                    <p>Pick your regular favorites and we'll ship them to you. Minimum purchase requirements apply. Buy at least 20kg of Nutri Chunks Premium dog food and one ProtekTODO pack every month. </p>
                </div>
                <div className="product-list-container">
                    <Products />
                </div>
            </div>
            <div className="next-button">
                <button className={`${ totalWeight() >= 20 ? "enable" : "" }`} onClick={ props.onNextToggle }>Next</button>
            </div> 
        </>
    );
}

export default ReduxConnect( Regular, ["fe_subscription"] );