import React from "react";
import numeral from "numeral";

import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";
import Checkbox from "Dashboard/Common/Checkbox/Checkbox";

const Table = props => {
    const onDelete = item => {
        Request().delete(`/product/${ item.id }`)
            .then( response => {
                props.coupon_actions.updateList( response.data );
            });
    };

    return (
        <div className="data-list">
            <div className="data-row header">
                <div className="data-item" style={{ width: 50 }}>
                    <Checkbox />
                </div>
                <div className="data-item" style={{ width: 250 }}>Coupon</div>
                <div className="data-item" style={{ width: 200 }}>Expiration Date</div>
                <div className="data-item" style={{ width: 200 }}>Usage</div>
                <div className="data-item" style={{ width: 150 }}></div>
            </div>
            { props.coupon_state.list.length > 0 && props.coupon_state.list.map( item => {
                return(
                    <div className="data-row">
                        <div className="data-item" style={{ width: 50 }}>
                            <div className="item-container">
                                <Checkbox />
                            </div>
                        </div>
                        <div className="data-item name" style={{ width: 250 }}>
                            <div className="item-container">{ item.coupon }</div>
                        </div>
                        <div className="data-item" style={{ width: 200 }}>₱
                        
                        </div>
                        <div className="data-item greyed" style={{ width: 200 }}>

                        </div>
                        <div className="data-item actions" style={{ width: 150 }}>
                            <button className="actions delete" onClick={ () => onDelete( item ) }>
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
            { props.coupon_state.list.length === 0 && (
                <div className="data-row">
                    <div className="data-item" style={{ width: "100%" }}>
                        <span>No coupons found.</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReduxConnect(Table, ["coupon"]);