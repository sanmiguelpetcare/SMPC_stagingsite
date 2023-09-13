import React from "react";
import numeral from "numeral";
import moment from "moment";
import { ReduxConnect } from "helpers/HOC";
import ProductImage from "common/Product/ProductImage";

const Details = props => {
    const selected = props.order_state.item.selected;

    return (
        <div className="modal-root order-form">
            <div className="overlay"></div>
            <div className="modal-panel">
                <div className="modal-header">
                    <div className="cntner">
                        <a href="#" onClick={ props.onCloseModal }>
                            <i className="material-icons">
                                arrow_back
                            </i>
                            Back
                        </a>
                        <div className="actions">
                            {/* <button className="bttn save" onClick={ onSubmit }>Save Product</button> */}
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="order-name">
                        <h4>#{ selected.orderNo }</h4>
                        <span>{ selected.status }</span>
                    </div>
                    <div className="order-member">
                        <p><strong>Customer:</strong> { `${ selected.user.firstName } ${ selected.user.lastName }` }</p>
                        <p><strong>Date:</strong> { moment( selected.dateCreated ).format( "MM/DD/YYYY hh:mm" ) }</p>
                    </div>
                    <div className="order-delivery">
                        <h5>Shipping Details</h5>
                        <p><strong>Name:</strong> { `${ selected.shipping.firstName } ${ selected.shipping.lastName }` }</p>
                        <p><strong>Email Address:</strong> { selected.shipping.email }</p>
                        <p><strong>Phone Number:</strong> { selected.shipping.phone }</p>
                        <p><strong>Address:</strong> { selected.shipping.address1 } { selected.shipping.address2 } { selected.shipping.brgy } { selected.shipping.city } { selected.shipping.province } { selected.shipping.zip }</p>
                    </div>
                    <div className="order-delivery">
                        <h5>Billing Details</h5>
                        <p><strong>Name:</strong> { `${ selected.billing.firstName } ${ selected.billing.lastName }` }</p>
                        <p><strong>Email Address:</strong> { selected.billing.email }</p>
                        <p><strong>Phone Number:</strong> { selected.billing.phone }</p>
                        <p><strong>Address:</strong> { selected.billing.address1 } { selected.billing.address2 } { selected.billing.brgy } { selected.billing.city } { selected.billing.province } { selected.billing.zip }</p>
                    </div>
                    <div className="order-products">
                        <h5>Products ({ selected.products.length })</h5>
                        <div className="order-products">
                            { selected.products.map( item => {
                                return (
                                    <div className="order-product-item">
                                        <div className="product-img">
                                            <ProductImage product={ item.product } />
                                        </div>
                                        <div className="product-details">
                                            <h4>{ item.product.name }</h4>
                                            <p>
                                                <span>QTY: { item.qty }</span> - <span>₱{ numeral( item.price * item.qty ).format( "0,0.00" ) }</span>
                                            </p>
                                        </div>
                                    </div>
                                );
                            }) }
                        </div>
                        <div className="order-totals">
                            <p><strong>Subtotal:</strong> ₱{ numeral( selected.total ).format( "0,0.00" ) }</p>
                            <p><strong>Shipping:</strong> --</p>
                            <p><strong>VAT:</strong> --</p>
                            <p><strong>Total:</strong> ₱{ numeral( selected.total ).format( "0,0.00" ) }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReduxConnect(Details, ["order"]);