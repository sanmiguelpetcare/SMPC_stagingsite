import React, { useState, useEffect } from "react";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";

import Table from "./Table/Table";
import Form from "./Form/Form";
import Filters from "./Filters/Filters";
import Details from "./Details/Details";
import Search from "./Search/Search";

const Product = props => {
    useEffect(() => {
        onFetchData();
    }, []);

    const onFetchData = () => {
        props.common_actions.updateLoading(true);

        Request().get("/product")
            .then(response => {
                props.product_actions.updateList(response.data);
                props.common_actions.updateLoading(false);
            });
    }

    const [ openModal, setOpenModal ] = useState(false);
    const [ openDetailsModal, setOpenDetailsModal ] = useState(false);

    return (
        <>
            <div className="content-header">
                <div className="header-container">
                    <h1>Products ({ props.product_state.count.total})</h1>
                    <div className="actions-container">
                        <Search />
                        <button className="bttn" onClick={ () => { props.product_actions.resetItem(); setOpenModal(true); } }>
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
                    <Table 
                        onOpenForm={ () => setOpenModal(true) }
                        onOpenModal={ () => setOpenDetailsModal(true) } 
                    />
                </div>
            </div>
            { openModal && <Form onCloseModal={ () => setOpenModal(false) } /> }
            { openDetailsModal && <Details onCloseModal={ () => setOpenDetailsModal(false) } /> }
        </>
    )
}

export default ReduxConnect(Product, ["product"]);