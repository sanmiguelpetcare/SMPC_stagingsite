import React from "react";
import { ReduxConnect } from "helpers/HOC";
import Request from "config/API";
import { toast } from "helpers/functions";

import Dropdown from "Dashboard/Common/Dropdown/Dropdown";
import Checkbox from "Dashboard/Common/Checkbox/Checkbox";
import Upload from "./Upload/Upload";
import FeedingGuide from "./FeedingGuide/FeedingGuide";
import GuaranteedAnalysis from "./GuaranteedAnalysis/GuaranteedAnalysis";
import Editor from "./Editor/Editor";

const Form = props => {
    const fields = props.product_state.item.form;

    const onChange = (e) => {
        if( e.target.name === "price" ) {
            props.product_actions.updateField([
                {
                    field: e.target.name, 
                    key: "value",
                    value: e.target.value < 0 ? 0 : e.target.value
                },
                {
                    field: e.target.name, 
                    key: "error",
                    value: null
                }
            ]);
        } else {
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
            ]);
        }
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

    const onUpdateProduct = (e) => {
        Request().put(`/product/${e.id}`, { ...e.data, images: (fields.images.value || []).filter( i => i.isRemoved ).map( i => i.id ) })
            .then(response => {
                if(response) {
                    props.product_actions.updateList(response.data);
                    props.onCloseModal();

                    toast({ type: "success", message: "Product successfully updated." });
                }
            });
    }

    const validate = async () => {
        let errors = 0;

        const onError = e => {
            props.product_actions.updateField([
                {
                    field: e.name,
                    key: "error",
                    value: e.value
                }
            ]);
        };

        if( !fields.name.value ) {
            onError({ name: "name", value: "This field is required." });
            errors += 1;
        }

        if( !fields.category.value || (fields.category.value && !fields.category.value.value) ) {
            onError({ name: "category", value: "This field is required." });
            errors += 1;
        }

        if( !fields.weight.value || (fields.weight.value && !fields.weight.value.value) ) {
            onError({ name: "weight", value: "This field is required." });
            errors += 1;
        }

        if( !fields.price.value ) {
            onError({ name: "price", value: "This field is required." });
            errors += 1;
        }

        if( !fields.description.value ) {
            onError({ name: "description", value: "This field is required." });
            errors += 1;
        }

        return errors;
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

    console.log("files 1", files)
    console.log("form", form)
    console.log("images", files.images)


    const onSubmit = (e) => {
        validate().then( errcount => {
            if( errcount === 0 ) {
                const data = {
                    page: props.product_state.count.page,
                    name: fields.name.value,
                    category: fields.category.value.value,
                    weight: fields.weight.value.value,
                    price: fields.price.value,
                    discount: fields.discount.value ? fields.discount.value : null,
                    discountPrice: fields.price.value * fields.discount.value,
                    discountType: fields.discountType.value,
                    isInStock: fields.isInStock.value,
                    isIncludedInSubscription: fields.isIncludedInSubscription.value,
                    includedInSubscriptionQty: fields.includedInSubscriptionQty.value,
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
                
                if( fields.id.value ) {
                    const isFormHasValue = form.entries().next().value;

                    if( isFormHasValue ) {
                        onUploadImages({ 
                            id: fields.id.value, 
                            data: form, 
                            callback: response => {
                                onUpdateProduct({
                                    id: fields.id.value,
                                    data: data
                                });
                            }
                        });
                    } else {
                        onUpdateProduct({ 
                            id: fields.id.value,
                            data: data
                        });
                    }
                } else {
                    Request().post("/product", data)
                        .then( response => {
                            onUploadImages({ 
                                id: response.data.id, 
                                data: form, 
                                callback: response => {
                                    props.product_actions.updateList( response.list );
                                    props.onCloseModal();

                                    toast({ type: "success", message: "Product successfully saved." });
                                }
                            });
                        });
                }
            }
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
                        <Upload />
                        <div className={`form-item ${ fields.name.error ? "haserror" : "" }`}>
                            <label>Name<sup>*</sup></label>
                            <input type="text" name="name" onChange={ onChange } value={ fields.name.value } />
                            { fields.name.error && <span className="error">{ fields.name.error }</span> }
                        </div>
                        <div className="form-row">
                            <div className="form-col c6">
                                <div className={`form-item ${ fields.category.error ? "haserror" : "" }`}>
                                    <Dropdown 
                                        label={<>Category<sup>*</sup></>}
                                        placeholder="Select Category"
                                        value={ fields.category.value }
                                        options={[
                                            { value: "Dog Food", label: "Dog Food" },
                                            { value: "Premium", label: "Premium" },
                                            { value: "Disinfectant", label: "Disinfectant" }
                                        ]}
                                        onChange={ value => onChange({ target: { name: "category", value } }) }
                                    />
                                    { fields.category.error && <span className="error">{ fields.category.error }</span> }
                                </div>
                            </div>
                            <div className="form-col c6">
                                <div className={`form-item ${ fields.weight.error ? "haserror" : "" }`}>
                                    <Dropdown 
                                        label={<>Weight<sup>*</sup></>}
                                        placeholder="Select Weight"
                                        value={ fields.weight.value }
                                        options={[
                                            { value: "1.3 kg", label: "1.3 kg" },
                                            { value: "5 kg", label: "5 kg" },
                                            { value: "10 kg", label: "10 kg" },
                                            { value: "20 kg", label: "20 kg" },
                                            { value: "100 ml", label: "20 ml" },
                                            { value: "20 g", label: "20 g" },
                                            { value: "1 kg", label: "1 kg" },
                                            { value: "-", label: "-" },
                                        ]}
                                        onChange={ value => onChange({ target: { name: "weight", value } }) }
                                    />
                                    { fields.weight.error && <span className="error">{ fields.weight.error }</span> }
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col c6">
                                <div className={`form-item ${ fields.price.error ? "haserror" : "" }`}>
                                    <label>Price<sup>*</sup></label>
                                    <input type="number" min="0" name="price" onChange={ onChange } value={ fields.price.value } />
                                    { fields.price.error && <span className="error">{ fields.price.error }</span> }
                                </div>
                            </div>
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
                        </div>
                        <div className="form-row">
                            <div className="form-col c12">
                                <div className="form-item is-in-stock">
                                    <label>Is product in stock?</label>
                                    <Checkbox checked={ fields.isInStock.value } onClick={ () => onChange({ target: { name: "isInStock", value: fields.isInStock.value ? false : true } }) } />
                                </div>
                            </div>
                            <div className="form-col c6">
                                <div className="form-item is-in-stock">
                                    <label>Is included in subscription?</label>
                                    <Checkbox checked={ fields.isIncludedInSubscription.value } onClick={ () => onChange({ target: { name: "isIncludedInSubscription", value: fields.isIncludedInSubscription.value ? false : true } }) } />
                                    { Boolean(fields.isIncludedInSubscription.value) && (
                                        <div className={`form-item`}>
                                            <label>Included qty</label>
                                            <input type="number" min="0" name="includedInSubscriptionQty" onChange={ onChange } value={ fields.includedInSubscriptionQty.value } />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={`form-item ${ fields.description.error ? "haserror" : "" }`}>
                            <label>Description<sup>*</sup></label>
                            <Editor name="description" onChange={ onChange } value={ fields.description.value } />
                            { fields.description.error && <span className="error">{ fields.description.error }</span> }
                            
                        </div>
                        <div className="form-item">
                            <label>Ingredients</label>
                            <Editor name="ingredients" onChange={ onChange } value={ fields.ingredients.value } />
                        </div>
                        <FeedingGuide />
                        <GuaranteedAnalysis />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReduxConnect(Form, ["product"]);