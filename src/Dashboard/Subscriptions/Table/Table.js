import React from "react";
import numeral from "numeral";

import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";
import Checkbox from "Dashboard/Common/Checkbox/Checkbox";

const Table = props => {
    const onSelectMember = (e, member) => {
        e.preventDefault();

        props.member_actions.updateSelected( member );
        props.onOpenMemberModal();
    };
    
    return (
        <div className="data-list">
            <div className="data-row header">
                <div className="data-item" style={{ width: 350 }}>
                    <Checkbox />
                    Subscription
                </div>
                <div className="data-item" style={{ width: 250 }}>Member</div>
                <div className="data-item" style={{ width: 200 }}>Type</div>
                <div className="data-item" style={{ width: 150 }}>Total</div>
                <div className="data-item" style={{ width: 150 }}></div>
            </div>
            { props.subscription_state.list.length > 0 && props.subscription_state.list.map( item => {
                return(
                    <div className="data-row">
                        <div className="data-item name" style={{ width: 350 }}>
                            <div className="item-container">
                                <Checkbox />
                                <div className="subscription-info">
                                    <a href="#">
                                        <p>{ item.name }</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="data-item" style={{ width: 250 }}>
                            <a href="#" onClick={ e => onSelectMember( e, item.user ) }>{ item.user.firstName + " " + item.user.lastName }</a>
                        </div>
                        <div className="data-item greyed" style={{ width: 200 }}>
                            { item.type === 1 ? "Regular" : "Custom" }
                        </div>
                        <div className="data-item greyed" style={{ width: 150 }}>
                            ₱{ numeral( item.total ).format( "0,0.00" ) }
                        </div>
                        <div className="data-item actions" style={{ width: 150 }}>
                            {/* <button className="actions edit">
                                <i className="material-icons">
                                    edit
                                </i>
                            </button> */}
                        </div>
                    </div>
                );
            }) }
            { props.subscription_state.list.length === 0 && (
                <div className="data-row">
                    <div className="data-item" style={{ width: "100%" }}>
                        <span>No subscriptions found.</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReduxConnect(Table, ["subscription"]);