import React from "react";
import { ReduxConnect } from "helpers/HOC";
import Request from "config/API";

import Dropdown from "Dashboard/Common/Dropdown/Dropdown";
import Checkbox from "Dashboard/Common/Checkbox/Checkbox";

const Form = props => {
    const fields = props.product_state.item.form;

    const onChange = (e) => {
        props.product_actions.updateField([
            {
                field: e.target.name, 
                key: "value",
                value: e.target.value
            },
            {
                field: e.target.name, 
                key: "error",
                value: null
            }
        ])
    };

    const onUploadImages = (e) => {
        Request().put(`/product/upload/${ e.id }`, e.data)
            .then(response => {
                if(response) {
                    if(e.callback) {
                        e.callback(response.data);
                    }
                }
            })
            .catch(err => {});
    }

    const onSubmit = () => {
        const data = {
            page: props.product_state.count.page,
            name: fields.name.value,
            category: fields.category.value.value,
            weight: fields.weight.value.value,
            price: fields.price.value,
            discount: fields.discount.value,
            discountType: fields.discountType.value,
            isInStock: fields.isInStock.value,
            description: fields.description.value,
            ingredients: fields.ingredients.value,
            feedingGuide: props.product_state.item.feedingGuide.filter( i => i.weightOfDog && i.amountOfFood ),
            guaranteedAnalysis: props.product_state.item.guaranteedAnalysis.filter( i => i.nutrients && i.amount ),
            isDeleted: 0
        };

        const form = new FormData();
        const files = {
            page: props.product_state.count.page,
            images: fields.images.value
        };

        for(const key of Object.keys(files)) {
            if(key === "images") {
                for(const image of files.images) {
                    form.append("images", image);
                }
            }
        }
            
        Request().post("/product", data)
            .then( response => {
                onUploadImages({ 
                    id: response.data.id, 
                    data: form, 
                    callback: response => {
                        props.product_actions.updateList( response.list );
                        props.onCloseModal();
                    }
                });
            });
    };

    return (
        <div className="modal-root product-form">
            <div className="overlay"></div>
            <div className="modal-panel">
                <div className="modal-header">
                    <div className="cntner">
                        <a href="#" onClick={ props.onCloseModal }>
                            <i className="material-icons">
                                arrow_back
                            </i>
                            Back
                        </a>
                        <div className="actions">
                            <button className="bttn save" onClick={ onSubmit }>Save Product</button>
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="form-container">
                        <div className="form-item">
                            <label>Coupon</label>
                            <input type="text" name="name" onChange={ onChange } value={ fields.name.value } />
                        </div>
                        <div className="form-row">
                            <div className="form-col c6">
                                <div className="form-item discount">
                                    <label>Discount</label>
                                    <input type="text" name="discount" onChange={ onChange } value={ fields.discount.value } />
                                    <div className="switch" onClick={ () => onChange({ target: { name: "discountType", value: fields.discountType.value === "percent" ? "peso" : "percent" } })}>
                                        <div className={`switch-item ${ fields.discountType.value === "percent" ? "active" : "" }`}>
                                            <i className="material-icons">
                                                percent
                                            </i>
                                        </div>
                                        <div className={`switch-item ${ fields.discountType.value === "peso" ? "active" : "" }`}>
                                            <i className="material-icons">
                                                local_parking
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-col c6">
                                <div className="form-item discount">
                                    <label>Limit</label>
                                    <input type="text" name="discount" onChange={ onChange } value={ fields.discount.value } />
                                    <div className="switch" onClick={ () => onChange({ target: { name: "discountType", value: fields.discountType.value === "percent" ? "peso" : "percent" } })}>
                                        <div className={`switch-item ${ fields.discountType.value === "percent" ? "active" : "" }`}>
                                            <i className="material-icons">
                                                percent
                                            </i>
                                        </div>
                                        <div className={`switch-item ${ fields.discountType.value === "peso" ? "active" : "" }`}>
                                            <i className="material-icons">
                                                local_parking
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col c6">
                                <div className="form-item discount">
                                    <label>Start Date</label>
                                    <input type="text" placeholder="MM/DD/YYYY" name="discount" onChange={ onChange } value={ fields.discount.value } />
                                </div>
                            </div>
                            <div className="form-col c6">
                                <div className="form-item discount">
                                    <label>End Date</label>
                                    <input type="text" placeholder="MM/DD/YYYY" name="discount" onChange={ onChange } value={ fields.discount.value } />
                                    <div className="instructions">
                                        <ul>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReduxConnect(Form, ["product"]);