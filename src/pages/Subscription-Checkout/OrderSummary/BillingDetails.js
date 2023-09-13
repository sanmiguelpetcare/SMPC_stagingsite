import React, { useEffect, useState } from "react";
import numeral from "numeral";
import { ReduxConnect } from "helpers/HOC";

const BillingDetails = props => {
    const [paymentMethod, setPaymentMethod] = useState("");

    useEffect(() => {
        if( props.fe_subscription_state.cart.name ) {
            const name = props.fe_subscription_state.cart.name.toLowerCase();

            if( name.indexOf( "trio" ) > -1 || name.indexOf( "max-a" ) > -1 || name.indexOf( "plus-a" ) > -1 ) {
                setPaymentMethod( "One Time Payment" );
            } else if( name.indexOf( "max-b" ) > -1 ) {
                setPaymentMethod( "Billed Semi-annually" );
            } else {
                setPaymentMethod( "Billed Quarterly" );
            }
        }
    }, [props.fe_subscription_state.cart.name]);

    return (
        <>
            <div className="total-value-details-container">
                <div className="subtotal-container value-details-container">
                    <p><strong>{ paymentMethod }</strong></p>
                </div>
                { paymentMethod === "One Time Payment" && (
                    <div className="subtotal-container value-details-container">
                        <p>To Pay Now</p>
                        <p>₱{ numeral( props.subtotal ).format( "0,0.00" ) }</p>
                    </div>
                ) }
                { paymentMethod === "Billed Semi-annually" && (
                    <div className="subtotal-container value-details-container">
                        <p>To Pay Now</p>
                        <p>₱{ numeral( props.subtotal / 2 ).format( "0,0.00" ) }</p>
                    </div>
                ) }
                { paymentMethod === "Billed Quarterly" && (
                    <div className="subtotal-container value-details-container">
                        <p>To Pay Now</p>
                        <p>₱{ numeral( props.subtotal / 4 ).format( "0,0.00" ) }</p>
                    </div>
                ) }
                { paymentMethod === "Billed Semi-annually" && (
                    <div className="subtotal-container value-details-container">
                        <p>To Pay later</p>
                        <p>₱{ numeral( props.subtotal / 2 ).format( "0,0.00" ) }</p>
                    </div>
                ) }
                { paymentMethod === "Billed Quarterly" && (
                    <div className="subtotal-container value-details-container">
                        <div className="quarterly">
                            <p>To Pay every 3-months</p>
                            <ul>
                                <li>
                                    <span>2nd quarter</span>
                                    <span>₱{ numeral( props.subtotal / 4 ).format( "0,0.00" ) }</span>
                                </li>
                                <li>
                                    <span>3nd quarter</span>
                                    <span>₱{ numeral( props.subtotal / 4 ).format( "0,0.00" ) }</span>
                                </li>
                                <li>
                                    <span>4th quarter</span>
                                    <span>₱{ numeral( props.subtotal / 4 ).format( "0,0.00" ) }</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) }
                <div className="vat-container value-details-container">
                    <p>VAT</p>
                    <p>₱{ numeral( props.vat ).format( "0,0.00" ) }</p>
                </div>
                <div className="vat-container value-details-container">
                    <p>Discount</p>
                    <p>₱{ numeral( props.vat ).format( "0,0.00" ) }</p>
                </div>
                <div className="total-value-container value-details-container">
                    <p>Total</p>
                    <p>₱{ numeral( props.total ).format( "0,0.00" ) }</p>
                </div>
            </div>
        </>
    )
}

export default ReduxConnect(BillingDetails, ["fe_subscription", "fe_user", "subscription"]);
