import React, { useState, useEffect } from "react";
import moment from "moment";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";

import Table from "./Table/Table";
import MemberDetails from "../Members/Details/Details";
import Search from "./Search/Search";

const Subscriptions = props => {
    useEffect(() => {
        onFetchData();
    }, []);

    const onFetchData = () => {
        props.common_actions.updateLoading(true);

        Request().get("/subscription")
            .then(response => {
                props.subscription_actions.updateList(response.data);
                props.common_actions.updateLoading(false);
            });
    }

    const [ openMemberModal, setOpenMemberModal ] = useState(false);

    return (
        <>
            <div className="content-header">
                <div className="header-container">
                    <div className="header-title">
                        <h1>Subscriptions</h1>
                        <p>{ moment().format( "MMMM YYYY" ) }</p>
                    </div>
                    <div className="actions-container">
                        <Search />
                    </div>
                </div>
            </div>
            <div className="content-body">
                <div className="products">
                    <Table onOpenMemberModal={() => setOpenMemberModal(true)} />
                </div>
            </div>
            { openMemberModal && <MemberDetails onCloseModal={ () => setOpenMemberModal(false) } /> }
        </>
    )
}

export default ReduxConnect(Subscriptions, ["subscription"]);