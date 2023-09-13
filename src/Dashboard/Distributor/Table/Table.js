import React, { useState } from "react";

import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";
import { toast } from "helpers/functions";
import Checkbox from "Dashboard/Common/Checkbox/Checkbox";
import DeleteModal from "./DeleteModal/DeleteModal";

const Table = props => {
    const [isDeleting, setDelete] = useState(null);

    const onDelete = item => {
        Request().delete(`/distributor/${ item.id }`)
            .then( response => {
                props.distributor_actions.updateList( response.data );

                setDelete( null );
                toast({ type: "success", message: "Distributor successfully deleted." });
            });
    };

    const onEdit = (item) => {
        props.distributor_actions.updateField([
            { field: "id", key: "value", value: item.id },
            { field: "name", key: "value", value: item.name },
            { field: "region", key: "value", value: item.region },
            { field: "email", key: "value", value: item.email },
            { field: "city", key: "value", value: item.city }
        ]);

        if( item.zips.length > 0 ) {
            props.distributor_actions.updateZips( item.zips.map( z => ({
                zip: z.zip,
                town: z.town
            }) ) );
        }

        props.onOpenForm();
    };

    return (
        <div className="data-list">
            <div className="data-row header">
                <div className="data-item" style={{ width: 40 }}>
                    <Checkbox />
                </div>
                <div className="data-item" style={{ width: 200 }}>Name</div>
                <div className="data-item" style={{ width: 300 }}>Region</div>
                <div className="data-item" style={{ width: 300 }}>Email Address</div>
                <div className="data-item" style={{ width: 100 }}></div>
            </div>
            { props.distributor_state.list.length > 0 && props.distributor_state.list.map( item => {
                return(
                    <div className="data-row">
                        <div className="data-item" style={{ width: 40 }}>
                            <div className="item-container">
                                <Checkbox />
                            </div>
                        </div>
                        <div className="data-item name" style={{ width: 200 }}>
                            { item.name }
                        </div>
                        <div className="data-item" style={{ width: 300 }}>
                            { item.region }
                        </div>
                        <div className="data-item" style={{ width: 300 }}>
                            { item.email }
                        </div>
                        <div className="data-item actions" style={{ width: 100 }}>
                            <button className="actions delete" onClick={ () => setDelete( item ) }>
                                <i className="material-icons">
                                    delete
                                </i>
                            </button>
                            <button className="actions edit" onClick={ () => onEdit(item) }>
                                <i className="material-icons">
                                    edit
                                </i>
                            </button>
                        </div>
                    </div>
                );
            }) }
            { props.distributor_state.list.length === 0 && (
                <div className="data-row">
                    <div className="data-item" style={{ width: "100%" }}>
                        <span>No distributors found.</span>
                    </div>
                </div>
            )}

            { isDeleting && (
                <DeleteModal
                    title={ `Deleting ${ isDeleting.name }...` }
                    onClose={ () => setDelete( null ) } 
                    onDelete={ () => onDelete( isDeleting ) } 
                /> 
            ) }
        </div>
    )
}

export default ReduxConnect(Table, ["distributor"]);