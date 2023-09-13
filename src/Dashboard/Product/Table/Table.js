import React, { useState } from "react";
import numeral from "numeral";

import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";
import Checkbox from "Dashboard/Common/Checkbox/Checkbox";
import { toast } from "helpers/functions";
import ProductImage from "common/Product/ProductImage";

import DeleteModal from "./DeleteModal/DeleteModal";

const Table = props => {
    const [isDeleting, setDelete] = useState( null );

    const onDelete = item => {
        Request().delete(`/product/${ item.id }`)
            .then( response => {
                props.product_actions.updateList( response.data );
                
                setDelete( null );
                toast({ type: "success", message: "Product successfully deleted." });
            });
    };

    const onSelect = (e, product) => {
        e.preventDefault();

        props.product_actions.updateSelected( product );
        props.onOpenModal();
    };

    const onEdit = (product) => {
        props.product_actions.updateField([
            { field: "id", key: "value", value: product.id },
            { field: "name", key: "value", value: product.name },
            { field: "category", key: "value", value: { value: product.category, label: product.category } },
            { field: "weight", key: "value", value: { value: product.weight, label: product.weight } },
            { field: "price", key: "value", value: product.price },
            { field: "discount", key: "value", value: product.discount },
            { field: "discountType", key: "value", value: product.discountType },
            { field: "isInStock", key: "value", value: product.isInStock },
            { field: "isIncludedInSubscription", key: "value", value: product.isIncludedInSubscription },
            { field: "includedInSubscriptionQty", key: "value", value: product.includedInSubscriptionQty },
            { field: "description", key: "value", value: product.description },
            { field: "ingredients", key: "value", value: product.ingredients },
            { field: "images", key: "value", value: product.images },
        ]);

        if( product.feedingGuide.length > 0 ) {
            props.product_actions.updateFeedingGuide( product.feedingGuide );
        }
        
        if( product.guaranteedAnalysis.length > 0 ) {
            props.product_actions.updateGuaranteedAnalysis( product.guaranteedAnalysis );
        }

        props.onOpenForm();
    };

    console.log("props.product_state", props.product_state)

    return (
        <div className="data-list">
            <div className="data-row header">
                <div className="data-item" style={{ width: 400 }}>
                    <Checkbox />
                    Name
                </div>
                <div className="data-item" style={{ width: 150 }}>Weight</div>
                <div className="data-item" style={{ width: 150 }}>Price</div>
                <div className="data-item" style={{ width: 150 }}>Inventory</div>
                <div className="data-item" style={{ width: 100 }}></div>
            </div>
            { props.product_state.list.length > 0 && props.product_state.list.map( product => {
                return(
                    <div className="data-row">
                        <div className="data-item name" style={{ width: 400 }}>
                            <div className="item-container">
                                <Checkbox />
                                <a href="#" onClick={ e => onSelect( e, product )}>
                                    <ProductImage product={ product } />
                                    { product.name }
                                </a>
                            </div>
                        </div>
                        <div className="data-item greyed" style={{ width: 150 }}>
                            { product.weight }
                        </div>
                        <div className="data-item" style={{ width: 150 }}>
                            ₱{ numeral( product.price ).format( "0,0.00") }
                        </div>
                        <div className="data-item greyed" style={{ width: 150 }}>
                            { product.isInStock ? "In Stock" : "Out of stock" }
                        </div>
                        <div className="data-item actions" style={{ width: 100 }}>
                            <button className="actions delete" onClick={ () => setDelete( product ) }>
                                <i className="material-icons">
                                    delete
                                </i>
                            </button>
                            <button className="actions edit" onClick={ () => onEdit( product ) }>
                                <i className="material-icons">
                                    edit
                                </i>
                            </button>
                        </div>
                    </div>
                );
            }) }
            { props.product_state.list.length === 0 && (
                <div className="data-row">
                    <div className="data-item" style={{ width: "100%" }}>
                        <span>No products found.</span>
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

export default ReduxConnect(Table, ["product"]);