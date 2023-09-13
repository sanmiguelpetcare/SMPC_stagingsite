import React, { useEffect } from "react";
import { ReduxConnect } from "helpers/HOC"; 

const DeliveryPackage = props => {
    useEffect(() => {   
        onOpenToggle( true );
    }, []);
    
    const deliveryOption = props.fe_subscription_state.deliveryOption;
    const activeToggle = props.fe_subscription_state.toggle;

    let timer;

    const onSelectDeliveryPackage = val => {
        props.fe_subscription_actions.updateDeliveryOption(val);
    };

    const onOpenToggle = ( init ) => {
        props.fe_subscription_actions.updateActiveToggle({ id: "1st", contentHeight: props.firstContentHeightRef.current.clientHeight });
        
        if( !init ) {
            clearTimeout( timer );
            timer = setTimeout(() => {
                props.fe_subscription_actions.updateActiveToggle({ id: "2nd", contentHeight: "auto" });
            }, 500);
        }
    };

    const onNextToggle = () => {
        if( deliveryOption ) {
            props.fe_subscription_actions.updateActiveToggle({ id: "2nd", contentHeight: props.secondContentHeightRef.current.clientHeight });

            clearTimeout( timer );
            timer = setTimeout(() => {
                props.fe_subscription_actions.updateActiveToggle({ id: "2nd", contentHeight: "auto" });
            }, 500);
        }
    };

    return (
        <div className="first-step-main-container step-main-container">
            <div onClick={ onOpenToggle } className="step-heading">
                <h4>1. Select Delivery Package</h4>
            </div>
            <div className={ activeToggle.id == "1st" ? `accordion-content-container active` : `accordion-content-container inactive`} style={{ height: activeToggle.id == "1st" ? activeToggle.contentHeight : 0 }}>
                <div ref={ props.firstContentHeightRef } className="accordion-content">
                    <div className="first-step-container">
                        <div className="step-subheading">
                            <p>Would you like to receive the same set of products every month? You also have an option to choose different set of flavors or package sizes for each month if you like! </p>
                        </div>
                        <div className="delivery-option-button-container">
                            <div className="regular-button-container delivery-button-container">
                                <button onClick={ () => onSelectDeliveryPackage(1) } className={ deliveryOption === 1 ? `no-hover-clicked`: `only-hover` }>Regular</button>
                                <div className="delivery-button-subheading">
                                    <p>Receive my regular favorites!</p>
                                </div>
                            </div>
                            <div className="custom-button-container delivery-button-container">
                                <button onClick={ () => onSelectDeliveryPackage(2) } className={ deliveryOption === 2 ? `no-hover-clicked`: `only-hover` }>Custom</button>
                                <div className="delivery-button-subheading"> 
                                    <p>Try something different each month!</p>
                                </div>
                            </div>
                        </div>
                        <div className="next-button">
                            <button onClick={ onNextToggle } className={ deliveryOption ? "enable": "" }>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReduxConnect( DeliveryPackage, ["fe_subscription"] );