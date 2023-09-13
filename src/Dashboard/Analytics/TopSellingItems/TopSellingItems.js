import React from "react";
import numeral from "numeral";

import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";

const TopSellingItems = props => {
    const onDelete = item => {
        Request().delete(`/product/${ item.id }`)
            .then( response => {
                props.product_actions.updateList( response.data );
            });
    };

    return (
        <div className="top-selling-items">
            <h3>Top Selling Items</h3>
            <div className="data-list">
                <div className="data-row header">
                    <div className="data-item" style={{ width: 250 }}>Item Name</div>
                    <div className="data-item" style={{ width: 150 }}>Quantity</div>
                    <div className="data-item" style={{ width: 150 }}>Inventory</div>
                    <div className="data-item" style={{ width: 150 }}>Sales</div>
                </div>
                { props.product_state.list.length > 0 && props.product_state.list.map( product => {
                    return(
                        <div className="data-row">
                            <div className="data-item name" style={{ width: 250 }}>{ product.name }</div>
                            <div className="data-item" style={{ width: 150 }}>₱{ numeral( product.price ).format( "0,0.00") }</div>
                            <div className="data-item greyed" style={{ width: 150 }}>{ product.isInStock ? "In Stock" : "Out of stock" }</div>
                            <div className="data-item actions" style={{ width: 150 }}>
                                <button className="actions delete" onClick={ () => onDelete( product ) }>
                                    <i className="material-icons">
                                        delete
                                    </i>
                                </button>
                                <button className="actions edit">
                                    <i className="material-icons">
                                        edit
                                    </i>
                                </button>
                            </div>
                        </div>
                    );
                }) }
                { props.product_state.list.length === 0 && (
                    <div className="data-row">
                        <div className="data-item" style={{ width: "100%" }}>
                            <span>No products found.</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ReduxConnect(TopSellingItems, ["product"]);