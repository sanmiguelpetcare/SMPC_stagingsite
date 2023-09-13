import React from "react";

import { colors } from "./Config";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";
import Checkbox from "Dashboard/Common/Checkbox/Checkbox";

const Table = props => {
    const onDelete = item => {
        Request().delete(`/product/${ item.id }`)
            .then( response => {
                props.member_actions.updateList( response.data );
            });
    };

    const onSelect = (e, member) => {
        e.preventDefault();

        props.member_actions.updateSelected( member );
        props.onOpenModal();
    };

    return (
        <div className="data-list">
            <div className="data-row header">
                <div className="data-item" style={{ width: 300 }}><Checkbox /> Name</div>
                <div className="data-item" style={{ width: 200 }}>City, Country</div>
                <div className="data-item" style={{ width: 250 }}>Email Address</div>
                <div className="data-item" style={{ width: 150 }}>Type</div>
            </div>
            { props.member_state.list.length > 0 && props.member_state.list.map( member => {
                return(
                    <div className="data-row">
                        <div className="data-item name" style={{ width: 300 }}>
                            <div className="item-container">
                                <Checkbox />
                                <a href="#" onClick={ e => onSelect( e, member ) }>
                                    <div className="item-container">
                                        <div className="initials" style={{ backgroundColor: colors[member.firstName.charAt(0)] }}>{`${ member.firstName.charAt(0) }${ member.lastName.charAt(0) }`}</div>
                                        { `${ member.firstName } ${ member.lastName }` }
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="data-item" style={{ width: 200 }}>
                            { member.city }, { member.country ? member.country : "PH" }
                        </div>
                        <div className="data-item" style={{ width: 250 }}>
                            { member.email }
                        </div>
                        <div className="data-item actions greyed" style={{ width: 150 }}>
                            { member.type === "member" ? "Member" : "Guest" }
                        </div>
                    </div>
                );
            }) }
            { props.member_state.list.length === 0 && (
                <div className="data-row">
                    <div className="data-item" style={{ width: "100%" }}>
                        <span>No members found.</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReduxConnect(Table, ["member"]);