import React, { useState, useEffect } from "react";
import moment from "moment";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";

import Table from "./Table/Table";
import Search from "./Search/Search";

import Details from "./Details/Details";
import MemberDetails from "../Members/Details/Details";

const Orders = props => {
    useEffect(() => {
        onFetchData();
    }, []);

    const onFetchData = () => {
        const params = {
            from: moment().startOf("month").format( "MM/DD/YYYY" ),
            to: moment().endOf("month").format( "MM/DD/YYYY" )
        };

        props.common_actions.updateLoading(true);

        Request().get("/order", params)
            .then(response => {
                props.order_actions.updateList(response.data);
                props.common_actions.updateLoading(false);
            });
    }

    const [ openModal, setOpenModal ] = useState(false);
    const [ openMemberModal, setOpenMemberModal ] = useState(false);

    return (
        <>
            <div className="content-header">
                <div className="header-container">
                    <div className="header-title">
                        <h1>Orders</h1>
                        <p>{ moment().format( "MMMM YYYY" ) }</p>
                    </div>
                    <div className="actions-container">
                        <Search />
                    </div>
                </div>
                <div className="filter-container">
                    {/* <Filters /> */}
                </div>
            </div>
            <div className="content-body">
                <div className="products">
                    <Table onOpenMemberModal={() => setOpenMemberModal(true)} onOpenModal={() => setOpenModal(true)} />
                </div>
            </div>
            { openModal && <Details onCloseModal={ () => setOpenModal(false) } /> }
            { openMemberModal && <MemberDetails onCloseModal={ () => setOpenMemberModal(false) } /> }
        </>
    )
}

export default ReduxConnect(Orders, ["order"]);