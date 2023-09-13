import React, { useState } from "react";
import { ReduxConnect } from "helpers/HOC";
import Request from "config/API";
import Checkbox from "Dashboard/Common/Checkbox/Checkbox";

const Filters = props => {
    const [isClosing, setClosing] = useState(false);
    const [open, setOpen] = useState(false);

    const onOpen = e => {
        if( !isClosing ) {
            e.preventDefault();

            if( open ) {
                setClosing(true);

                setTimeout(() => {
                    setOpen(false);
                    setClosing(false);
                }, 200);
            } else {
                setOpen(true);
                setClosing(false);
            }
        }
    }

    const filters = props.product_state.filters;
    const onFilter = async ( key, value ) => {
        await props.product_actions.updateFilter([{ field: key, value }]);

        const data = {
            filters: {
                category: filters.category ? filters.category.value : null, 
                weight: filters.weight ? filters.weight.value : null,
                isInStock: filters.isInStock ? filters.isInStock.value : null,
                [key]: value ? value.value : value
            }
        };

        Request().post("/product/filtered", data)
            .then( response => {
                props.product_actions.updateList( response.data );
            });
    };

    return (
        <>
            <div className="filter-toggle">
                <a href="#" onClick={ onOpen }>
                    Filter 
                    <i className="material-icons">filter_list</i>
                </a>
            </div>
            {open && (
                <div className={`filter-panel ${ isClosing ? "closing" : "" }`}>
                    <div className="panel-header">
                        <a href="#" onClick={ onOpen }>
                            <i className="material-icons">
                                arrow_back
                            </i>
                            Back
                        </a>
                    </div>
                    <div className="filter-item">
                        <div className="item-header">
                            <label>Collections</label>
                            <i className="material-icons">expand_more</i>
                        </div>
                        <div className="item-container">
                            {
                                [
                                    { value: "dogfood", label: "Dog Food" },
                                    { value: "premium", label: "Premium" },
                                    { value: "disinfectant", label: "Disinfectant" },
                                ].map( option => (
                                    <div className="checkbox-container">
                                        <Checkbox />
                                        <label>{ option.label }</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="filter-item">
                        <div className="item-header">
                            <label>Weight</label>
                            <i className="material-icons">expand_more</i>
                        </div>
                        <div className="item-container">
                            {
                                [
                                    { value: "1.3 kg", label: "1.3kg" },
                                    { value: "5 kg", label: "5 kg" },
                                    { value: "10 kg", label: "10 kg" },
                                    { value: "20 kg", label: "20 kg" }
                                ].map( option => (
                                    <div className="checkbox-container">
                                        <Checkbox />
                                        <label>{ option.label }</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="filter-item">
                        <div className="item-header">
                            <label>Inventory</label>
                            <i className="material-icons">expand_more</i>
                        </div>
                        <div className="item-container">
                            {
                                [
                                    { value: true, label: "In stock" },
                                    { value: false, label: "Out of stock" }
                                ].map( option => (
                                    <div className="checkbox-container">
                                        <Checkbox />
                                        <label>{ option.label }</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ReduxConnect(Filters, ["product"]);