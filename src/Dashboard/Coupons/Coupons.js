import React, { useState, useEffect } from "react";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";

import Table from "./Table/Table";
import Form from "./Form/Form";
import Filters from "./Filters/Filters";

const Coupons = props => {
    useEffect(() => {
        onFetchData();
    }, []);

    const onFetchData = () => {
        props.common_actions.updateLoading(true);

        Request().get("/coupon")
            .then(response => {
                props.coupon_actions.updateList(response.data);
                props.common_actions.updateLoading(false);
            });
    }

    const [ openModal, setOpenModal ] = useState(false);

    return (
        <>
            <div className="content-header">
                <div className="header-container">
                    <h1>Coupons ({ props.coupon_state.count.total})</h1>
                    <div className="actions-container">
                        <div className="search-coontainer">
                            <div className="form-container">
                                <div className="form-item">
                                    <input type="text" placeholder="Search..." />
                                </div>
                            </div>
                        </div>
                        <button className="bttn" onClick={ () => setOpenModal(true) }>
                            <i className="material-icons">add</i>
                        </button>
                    </div>
                </div>
                <div className="filter-container">
                    {/* <Filters /> */}
                </div>
            </div>
            <div className="content-body">
                <div className="products">
                    <Table />
                </div>
            </div>
            { openModal && <Form onCloseModal={ () => setOpenModal(false) } /> }
        </>
    )
}

export default ReduxConnect(Coupons, ["coupon"]);