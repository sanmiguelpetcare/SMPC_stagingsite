import React from "react";
import { ReduxConnect } from "helpers/HOC";
import Request from "config/API";
import { toast } from "helpers/functions";
import ZipCodes from "./ZipCodes/ZipCodes";

const Form = props => {
    const fields = props.distributor_state.item.form;

    const onChange = (e) => {
        props.distributor_actions.updateField([
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

    const validate = async () => {
        let errors = 0;

        const onError = e => {
            props.distributor_actions.updateField([
                {
                    field: e.name,
                    key: "error",
                    value: e.value
                }
            ]);
        };

        if( !fields.email.value ) {
            onError({ name: "email", value: "This field is required." });
            errors += 1;
        } else if( !fields.email.value.match(/^((\w|"){0,1}([A-Za-z0-9_]+([-+.]?){0,1}[A-Za-z0-9_]+)+(\w|"){0,1}([@](\w{1}[A-Za-z0-9-]+\w{1})([.][A-Za-z0-9]{2,})+))+/g) ) {
            onError({ name: "email", value: "Enter valid email" });
            errors += 1;
        }

        if( !fields.name.value ) {
            onError({ name: "name", value: "This field is required." });
            errors += 1;
        }

        if( !fields.region.value ) {
            onError({ name: "region", value: "This field is required." });
            errors += 1;
        }

        if( !fields.city.value ) {
            onError({ name: "city", value: "This field is required." });
            errors += 1;
        }

        return errors;
    };

    const onSubmit = () => {
        validate().then( errcount => {
            if( errcount === 0 ) {
                const data = {
                    page: props.distributor_state.count.page,
                    name: fields.name.value,
                    email: fields.email.value,
                    deliveryFee: fields.deliveryFee.value,
                    freeDeliveryAmount: fields.freeDeliveryAmount.value,
                    zips: props.distributor_state.item.zips,
                    region: fields.region.value,
                    city: fields.city.value
                };
                    
                if( fields.id.value ) {
                    Request().put("/distributor/" + fields.id.value, data)
                        .then( response => {
                            props.distributor_actions.updateList( response.data );
                            props.onCloseModal();

                            toast({ type: "success", message: "Distributor successfully saved." });
                        });
                } else {
                    Request().post("/distributor", data)
                        .then( response => {
                            props.distributor_actions.updateList( response.data );
                            props.onCloseModal();

                            toast({ type: "success", message: "Distributor successfully saved." });
                        });
                    }
                }
        });
    };

    return (
        <div className="modal-root distributor-form">
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
                            <button className="bttn save" onClick={ onSubmit }>Save Distributor</button>
                        </div>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="form-container">
                        <div className={`form-item ${ fields.name.error ? "haserror" : "" }`}>
                            <label>Name<sup>*</sup></label>
                            <input type="text" name="name" value={ fields.name.value } onChange={ onChange } />
                            { fields.name.error && <span className="error">{ fields.name.error }</span> }
                        </div>
                        <div className={`form-item ${ fields.email.error ? "haserror" : "" }`}>
                            <label>Email Address<sup>*</sup></label>
                            <input type="text" name="email" value={ fields.email.value } onChange={ onChange } />
                            { fields.email.error && <span className="error">{ fields.email.error }</span> }
                        </div>
                        <div className={`form-item ${ fields.region.error ? "haserror" : "" }`}>
                            <label>Region<sup>*</sup></label>
                            <input type="text" name="region" value={ fields.region.value } onChange={ onChange } />
                            { fields.region.error && <span className="error">{ fields.region.error }</span> }
                        </div>
                        <div className={`form-item ${ fields.city.error ? "haserror" : "" }`}>
                            <label>City<sup>*</sup></label>
                            <input type="text" name="city" value={ fields.city.value } onChange={ onChange } />
                            { fields.city.error && <span className="error">{ fields.city.error }</span> }
                        </div>
                        {/* <div className="form-row">
                            <div className="form-col c6">
                                <div className="form-item">
                                    <label>Delivery Fee</label>
                                    <input type="text" name="deliveryFee" value={ fields.deliveryFee.value } onChange={ onChange } />
                                </div>
                            </div>
                            <div className="form-col c6">
                                <div className="form-item">
                                    <label>Min. amount for free delivery</label>
                                    <input type="text" name="freeDeliveryAmount" value={ fields.freeDeliveryAmount.value } onChange={ onChange } />
                                </div>
                            </div>
                        </div> */}
                        <ZipCodes onChange={ onChange } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReduxConnect(Form, ["distributor"]);