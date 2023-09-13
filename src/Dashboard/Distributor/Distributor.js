import React, { useState, useEffect } from "react";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";

import Table from "./Table/Table";
import Form from "./Form/Form";
import Filters from "./Filters/Filters";
import Search from "./Search/Search";

const Distributor = props => {
    useEffect(() => {
        onFetchData();
    }, []);

    const onFetchData = () => {
        props.common_actions.updateLoading(true);

        Request().get("/distributor")
            .then(response => {
                props.distributor_actions.updateList(response.data);
                props.common_actions.updateLoading(false);
            });
    }

    const [ openModal, setOpenModal ] = useState(false);

    return (
        <>
            <div className="content-header">
                <div className="header-container">
                    <h1>Distributors ({ props.distributor_state.count.total})</h1>
                    <div className="actions-container">
                        <Search />
                        <button className="bttn" onClick={ () => { props.distributor_actions.resetItem(); setOpenModal(true); } }>
                            <i className="material-icons">add</i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="content-body">
                <div className="members">
                    <Table onOpenForm={ () => setOpenModal(true) } />
                </div>
            </div>
            { openModal && <Form onCloseModal={ () => setOpenModal(false) } /> }
        </>
    )
}

export default ReduxConnect(Distributor, ["distributor"]);