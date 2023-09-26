import React, { useState } from "react";
import { ReduxConnect } from "helpers/HOC";
import Request from "config/API";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Icon from '@mui/material/Icon';

import { Link } from "react-router-dom";

import SuccessfullyAddedModal from "Loader/SuccessfullyAddedModal.js";


const AddCart = props => {
    const [ qty, setQty ] = useState(1);
    const [validationMessage, setValidationMessage] = React.useState(false)

    const [modalStatus, setModalStatus] = useState(false)

    const onAddCart = () => {
        if(qty == "") {
            setValidationMessage(true)
            console.log("nullnullnu")
        } 
        else {
            if( !props.fe_user_state.loggedUser ) {
                let cart = localStorage.getItem("cart");
                cart = cart ? JSON.parse(cart) : [];
    
                if( cart.length > 0 ) {
                    if( cart.filter( c => c.product.id === props.item.id ).length > 0 ) {
                        cart = cart.map( c => {
                            if( c.product.id === props.item.id ) {
                                return {
                                    ...c,
                                    qty: parseInt( c.qty ) + parseInt( qty )
                                }
                            }
    
                            return c;
                        });
                    } else {
                        cart = [...cart, { qty, product: props.item }];
                    }
                } else {
                    cart = [...cart, { qty, product: props.item }];
                }
    
                props.fe_cart_actions.updateStatus(false);
                props.common_actions.updateLoading(true);
    
                localStorage.setItem("cart", JSON.stringify(cart));
    
                setTimeout(() => {
                    props.fe_cart_actions.updateStatus(true);
                    props.common_actions.updateLoading(false);
    
                    setModalStatus(true);
                }, 100);
            } else {
                const data = {
                    qty,
                    productID: props.item.id,
                    userID: props.fe_user_state.loggedUser.id
                };
                
                props.fe_cart_actions.updateStatus(false);
                props.common_actions.updateLoading(true);
    
                Request().post("/cart", data)
                    .then( response => {
                        props.fe_cart_actions.updateStatus(true);
                        props.common_actions.updateLoading(false);
    
                        setModalStatus(true);
                    });
            }
        }
    };

    const onSetQty = (e) => {
        // if(e.target.value === null) {
        //     setQty(null)
        // } else {
        //     setQty( e.target.value )
        // }
        setQty( e.target.value )
        console.log("e.traget.value", e.target.value)
    };

    console.log("aty", qty)

    return (
        <>
            {modalStatus ? <SuccessfullyAddedModal/> : <></>}
            <div className="cart-form">
                <div className="quantity-field">
                    <p>Quantity</p>
                    <div className="cta-container">
                        <div className="input-container">
                            <input  className={validationMessage ? "input bordered" : "input"} type="number" min="1" onChange={ onSetQty } value={ qty } name="productQuantity" />
                            {validationMessage ? <p className="validation-message">Invalid input</p> : <></>}
                        </div>
                        {/* <div className="productQty-container">
                            <div className="minus cta">
                                <Icon>remove</Icon>
                            </div>
                            <div className="quantity">
                                <p>1</p>
                            </div>
                            <div className="plus cta">
                                <Icon>add</Icon>
                            </div>
                        </div> */}
                        <button onClick={ onAddCart }>
                            <div className="">
                                <p>Add to cart</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReduxConnect(AddCart, ["fe_user", "fe_cart", "common"]);