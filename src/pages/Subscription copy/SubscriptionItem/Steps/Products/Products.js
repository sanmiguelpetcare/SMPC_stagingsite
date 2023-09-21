import React from "react";
import { ReduxConnect } from "helpers/HOC";

import Regular from "./Regular/Regular";
import Custom from "./Custom/Custom";

const Products = props => {
    const deliveryOption = props.fe_subscription_state.deliveryOption;
    const activeToggle = props.fe_subscription_state.toggle;

    let timer;

    const onOpenToggle = () => {
        if( deliveryOption ) {
            props.fe_subscription_actions.updateActiveToggle({ id: "2nd", contentHeight: props.secondContentHeightRef.current.clientHeight });

            clearTimeout( timer );
            timer = setTimeout(() => {
                props.fe_subscription_actions.updateActiveToggle({ id: "2nd", contentHeight: "auto" });
            }, 500);
        }
    };

    const onNextToggle = () => {
        props.fe_subscription_actions.updateActiveToggle({ id: "3rd", contentHeight: props.thirdContentHeightRef.current.clientHeight });

        clearTimeout( timer );
        timer = setTimeout(() => {
            props.fe_subscription_actions.updateActiveToggle({ id: "3rd", contentHeight: "auto" });
        }, 500);
    };

    return (
        <div className="second-step-main-container step-main-container">
            <div onClick={ onOpenToggle } className="step-heading">
                <h4>2. Add Order</h4>
            </div>
            <div className="second-step-monthly-container">
                <div className={ activeToggle.id === "2nd" ? `accordion-content-container active` : `accordion-content-container inactive`} style={{ height: activeToggle.id === "2nd" ? activeToggle.contentHeight : 0 }}>
                    <div ref={ props.secondContentHeightRef } className="accordion-content">
                        { deliveryOption === 1 && <Regular onNextToggle={ onNextToggle } /> }
                        { deliveryOption === 2 && <Custom subscription={ props.subscription } onNextToggle={ onNextToggle } /> }
                    </div>
                </div>
            </div>  
        </div>
    )
};

export default ReduxConnect( Products, ["fe_subscription"] );