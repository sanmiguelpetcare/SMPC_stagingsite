import React, { useState, useEffect } from "react";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";

import Table from "./Table/Table";
import Details from "./Details/Details";
import Filters from "./Filters/Filters";
import Search from "./Search/Search";

const Members = props => {
    useEffect(() => {
        onFetchData();
    }, []);

    const onFetchData = () => {
        props.common_actions.updateLoading(true);

        Request().get("/user")
            .then(response => {
                props.member_actions.updateList(response.data);
                props.common_actions.updateLoading(false);
            });
    }

    const [ openModal, setOpenModal ] = useState(false);

    return (
        <>
            <div className="content-header">
                <div className="header-container">
                    <h1>Members ({ props.member_state.count.total})</h1>
                    <div className="actions-container">
                        <Search />
                    </div>
                </div>
                <div className="filter-container">
                    {/* <Filters /> */}
                </div>
            </div>
            <div className="content-body">
                <div className="members">
                    <Table onOpenModal={ () => setOpenModal(true) } />
                </div>
            </div>
            { openModal && <Details onCloseModal={ () => setOpenModal(false) } /> }
        </>
    )
}

export default ReduxConnect(Members, ["member"]);