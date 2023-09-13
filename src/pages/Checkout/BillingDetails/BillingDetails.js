import React from "react";
import { ReduxConnect } from "helpers/HOC";

const BillingDetails = props => {
    const fields = props.fe_checkout_state.item.form.billing;
    const isSameAsShipping = props.fe_checkout_state.item.form.shippingSameBilling;

    const onChange = e => {
        props.fe_checkout_actions.updateBillingField([
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
    };

    const onError = e => {
        props.fe_checkout_actions.updateBillingField([
            {
                field: e.name,
                key: "error",
                value: e.value
            }
        ]);
    };

    const validate = async () => {
        let errors = 0;

        if( !fields.email.value ) {
            onError({ name: "email", value: "This field is required." });
            errors += 1;
        } else if( !fields.email.value.match(/^((\w|"){0,1}([A-Za-z0-9_]+([-+.]?){0,1}[A-Za-z0-9_]+)+(\w|"){0,1}([@](\w{1}[A-Za-z0-9-]+\w{1})([.][A-Za-z0-9]{2,})+))+/g) ) {
            onError({ name: "email", value: "Enter valid email" });
            errors += 1;
        }

        if( !fields.firstName.value ) {
            onError({ name: "firstName", value: "This field is required." });
            errors += 1;
        }

        if( !fields.lastName.value ) {
            onError({ name: "lastName", value: "This field is required." });
            errors += 1;
        }

        if( !fields.address1.value ) {
            onError({ name: "address1", value: "This field is required." });
            errors += 1;
        }

        if( !fields.address2.value ) {
            onError({ name: "address2", value: "This field is required." });
            errors += 1;
        }

        if( !fields.brgy.value ) {
            onError({ name: "brgy", value: "This field is required." });
            errors += 1;
        }

        if( !fields.city.value ) {
            onError({ name: "city", value: "This field is required." });
            errors += 1;
        }

        if( !fields.province.value ) {
            onError({ name: "province", value: "This field is required." });
            errors += 1;
        }

        if( !fields.zip.value ) {
            onError({ name: "zip", value: "This field is required." });
            errors += 1;
        }

        if( !fields.phone.value ) {
            onError({ name: "phone", value: "This field is required." });
            errors += 1;
        }

        return errors;
    };

    const onProceed = () => {
        validate().then( errcount => {
            if( errcount === 0 ) {
                props.onProceed();
            }
        })
    };

    return (
        <div className="form-content-container">
            <div className="same-checkbox">
                <div className="checkbox" onClick={ () => props.fe_checkout_actions.updateSameShippingBilling( !isSameAsShipping ) }>{ isSameAsShipping ? "Yes, same" : "Nooooo!" }</div>
                <span>Same as shipping address</span>
            </div>
            { !isSameAsShipping && (
                <>
                    <div className={`field-container ${ fields.email.error ? "haserror" : "" }`}>
                        <p>Email For Confirmation<sup>*</sup></p>
                        <input type="email" name="email" value={ fields.email.value } onChange={ onChange } />
                        { fields.email.error && <span className="error">{ fields.email.error }</span> }
                    </div>
                    <div className={`field-container ${ fields.firstName.error ? "haserror" : "" }`}>
                        <p>First Name<sup>*</sup></p>
                        <input type="text" name="firstName" value={ fields.firstName.value } onChange={ onChange } />
                        { fields.firstName.error && <span className="error">{ fields.firstName.error }</span> }
                    </div>
                    <div className={`field-container ${ fields.lastName.error ? "haserror" : "" }`}>
                        <p>Last Name<sup>*</sup></p>
                        <input type="text" name="lastName" value={ fields.lastName.value } onChange={ onChange } />
                        { fields.lastName.error && <span className="error">{ fields.lastName.error }</span> }
                    </div>
                    <div className={`field-container ${ fields.address1.error ? "haserror" : "" }`}>
                        <p>Address 1<sup>*</sup></p>
                        <input type="text" name="address1" value={ fields.address1.value } onChange={ onChange } />
                        { fields.address1.error && <span className="error">{ fields.address1.error }</span> }
                    </div>
                    <div className={`field-container ${ fields.address2.error ? "haserror" : "" }`}>
                        <p>Address 2<sup>*</sup></p>
                        <input type="text" name="address2" value={ fields.address2.value } onChange={ onChange } />
                        { fields.address2.error && <span className="error">{ fields.address2.error }</span> }
                    </div>
                    <div className={`field-container ${ fields.brgy.error ? "haserror" : "" }`}>
                        <p>Barangay<sup>*</sup></p>
                        <input type="text" name="brgy" value={ fields.brgy.value } onChange={ onChange } />
                        { fields.brgy.error && <span className="error">{ fields.brgy.error }</span> }
                    </div>
                    <div className={`field-container ${ fields.city.error ? "haserror" : "" }`}>
                        <p>City<sup>*</sup></p>
                        <input type="text" name="city" value={ fields.city.value } onChange={ onChange } />
                        { fields.city.error && <span className="error">{ fields.city.error }</span> }
                    </div>
                    <div className={`field-container ${ fields.province.error ? "haserror" : "" }`}>
                        <p>Province<sup>*</sup></p>
                        <input type="text" name="province" value={ fields.province.value } onChange={ onChange } />
                        { fields.province.error && <span className="error">{ fields.province.error }</span> }
                    </div>
                    <div className={`field-container`}>
                        <p>Country<sup>*</sup></p>
                        <input type="text" name="country" value="Philippines" readOnly />
                    </div>
                    <div className={`field-container ${ fields.zip.error ? "haserror" : "" }`}>
                        <p>Zip<sup>*</sup></p>
                        <input type="text" name="zip" value={ fields.zip.value } onChange={ onChange } />
                        { fields.zip.error && <span className="error">{ fields.zip.error }</span> }
                    </div>
                    <div className={`field-container ${ fields.phone.error ? "haserror" : "" }`}>
                        <p>Phone<sup>*</sup></p>
                        <input type="text" name="phone" value={ fields.phone.value } onChange={ onChange } />
                        { fields.phone.error && <span className="error">{ fields.phone.error }</span> }
                    </div>
                    <div className="continue-button-container">
                        <button onClick={ onProceed }>Continue</button>
                    </div>
                </>
            ) }
        </div>
    );
} 

export default ReduxConnect(BillingDetails, ["fe_checkout"]);