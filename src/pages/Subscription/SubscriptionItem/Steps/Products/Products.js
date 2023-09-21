import React from "react";
import { ReduxConnect } from "helpers/HOC";

import Regular from "./Regular/Regular";
import Custom from "./Custom/Custom";
import StepTwo from "../../../../../assets/media/subscription-page/STEP_2.png"


const Products = props => {
    const deliveryOption = props.fe_subscription_state.deliveryOption;
    const activeToggle = props.fe_subscription_state.toggle;

    let timer;

    const onNextToggle = () => {
        props.fe_subscription_actions.updateActiveToggle({ id: "3rd", contentHeight: props.thirdContentHeightRef.current.clientHeight });

        clearTimeout( timer );
        timer = setTimeout(() => {
            props.fe_subscription_actions.updateActiveToggle({ id: "3rd", contentHeight: "auto" });
        }, 500);
    };

    const onPrevToggle = () => {
        props.fe_subscription_actions.updateActiveToggle({ id: "1st", contentHeight: props.thirdContentHeightRef.current.clientHeight });

        clearTimeout( timer );
        timer = setTimeout(() => {
            props.fe_subscription_actions.updateActiveToggle({ id: "1st", contentHeight: "auto" });
        }, 500)
    }

    return (
        <div className={activeToggle.id === "2nd" ? "second-step-main-container step-main-container active" : "second-step-main-container step-main-container inactive"}>
            {/* <div onClick={ onOpenToggle } className="step-heading"> */}
            <div className="step-child-container">
                <div className="image-container">
                    <img src={StepTwo} alt=""/>
                </div>
                <div className="step-child-main-content"> 
                    <div className="step-heading">
                        <h4>2. Add Order</h4>
                    </div>
                    <div className="second-step-monthly-container">
                        {/* <div className={ activeToggle.id === "2nd" ? `accordion-content-container active` : `accordion-content-container inactive`} style={{ height: activeToggle.id === "2nd" ? activeToggle.contentHeight : 0 }}> */}
                        <div className={`accordion-content-container active`}>
                            <div ref={ props.secondContentHeightRef } className="accordion-content">
                                { deliveryOption === 1 && 
                                    <Regular 
                                        onNextToggle={ onNextToggle } 
                                        onPrevToggle={ onPrevToggle }
                                    /> 
                                }
                                { deliveryOption === 2 && 
                                    <Custom 
                                        subscription={ props.subscription } 
                                        onNextToggle={ onNextToggle } 
                                        onPrevToggle={ onPrevToggle }     
                                    /> 
                                }
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
};

export default ReduxConnect( Products, ["fe_subscription"] );