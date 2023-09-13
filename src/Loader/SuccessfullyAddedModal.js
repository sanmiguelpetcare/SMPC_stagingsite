import React from "react";
// import { auth } from '../../../firebase';

import { Link } from "react-router-dom";

export default function SuccessfullyAddedModal() {    
    return (
        <>
            <div className="overlay-styles"/>      
            <div className="modal-container successfully-added-modal">
                <div className="heading">
                    <h4>Added to cart successfully</h4>
                </div>
                <div className="body">
                    <Link to="/cart">
                        <p>View cart</p>
                    </Link>
                    <Link to="/products">
                        <p>Continue Shopping</p>
                    </Link>
                </div>
            </div>
        </>
    )
}