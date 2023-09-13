import React from "react";
import numeral from "numeral";
import moment from "moment";

import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";
import Checkbox from "Dashboard/Common/Checkbox/Checkbox";

const Table = props => {
    const status = {
        unfulfilled: "Unfulfilled",
        fulfilled: "Fulfilled"
    };

    const onSelectMember = (e, member) => {
        e.preventDefault();

        props.member_actions.updateSelected( member );
        props.onOpenMemberModal();
    };

    const onSelect = (e, order) => {
        e.preventDefault();

        props.order_actions.updateSelected( order );
        props.onOpenModal();
    }

    return (
        <div className="data-list">
            <div className="data-row header">
                <div className="data-item" style={{ width: 50 }}>
                    <Checkbox />
                </div>
                <div className="data-item" style={{ width: 150 }}>Order #</div>
                <div className="data-item" style={{ width: 150 }}>Date</div>
                <div className="data-item" style={{ width: 250 }}>Customer</div>
                <div className="data-item" style={{ width: 150 }}>Status</div>
                <div className="data-item" style={{ width: 200 }}>Total</div>
            </div>
            { props.order_state.list.length > 0 && props.order_state.list.map( item => {
                return(
                    <div className="data-row">
                        <div className="data-item" style={{ width: 50 }}>
                            <div className="item-container">
                                <Checkbox />
                            </div>
                        </div>
                        <div className="data-item name" style={{ width: 150 }}>
                            <a href="#" onClick={ e => onSelect( e, item ) }>#{ item.orderNo }</a>
                        </div>
                        <div className="data-item" style={{ width: 150 }}>{ moment( item.dateCreated ).format( "MM/DD/YYYY" ) }</div>
                        <div className="data-item" style={{ width: 250 }}>
                            <a href="#" onClick={ e => onSelectMember( e, item.user ) }>{ item.user.firstName + " " + item.user.lastName }</a>
                        </div>
                        <div className="data-item" style={{ width: 150 }}>
                            <div className="status-chip">{ status[item.status] }</div>
                        </div>
                        <div className="data-item" style={{ width: 200 }}>
                            ₱{ numeral( item.total ).format( "0,0.00") }
                        </div>
                    </div>
                );
            }) }
            { props.order_state.list.length === 0 && (
                <div className="data-row">
                    <div className="data-item" style={{ width: "100%" }}>
                        <span>No orders found.</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReduxConnect(Table, ["order", "member"]);