import React, { useEffect } from "react";
import { ReduxConnect } from "helpers/HOC";
import Request from "config/API";

const ShippingDetails = props => {

    useEffect(() => {
        if( localStorage.getItem( "distributor" ) ) {
            const distributor = localStorage.getItem( "distributor" ).split( "|" );
            const city = distributor[5].split(",");
            const province = distributor[6].split(",");
            const zipCode = distributor[7].split(",");
            const town = distributor[3].split(",");


            props.fe_checkout_actions.updateShippingField([
                { field: "zip", key: "value", value: zipCode[0] },
                { field: "province", key: "value", value: province[0] },
                { field: "city", key: "value", value: city[0] },
                { field: "brgy", key: "value", value: town[0] }
            ]);
        }
    }, []);

    const fields = props.fe_checkout_state.item.form.shipping;

    const onChange = e => {
        props.fe_checkout_actions.updateShippingField([
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

        if( props.fe_checkout_state.item.form.shippingSameBilling ) {
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
        }
    };

    const onError = e => {
        props.fe_checkout_actions.updateShippingField([
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

    // const selectTownindex = (index) => {
    //     setSelectedZip(index)
    //     setdropDownStat(!dropDownStat)
    //     props.fe_checkout_actions.updateShippingField([
    //         { field: "zip", key: "value", value: selectedZip },
    //         { field: "town", key: "value", value: towns[selectedZip] },
    //     ]);
    // }

    // const handleDropdown = () => {
    //     setdropDownStat(!dropDownStat)
    // }

    // const townMapping = towns.map((item, index) => {
    //     return (
    //         <div onClick={() => selectTownindex(index)} className="towns-individual-container">
    //             <p>{item}</p>
    //         </div>
    //     )
    // })

    // const Dropdown = props => {
    //     return (props.town)
    // }

    return (
        <div className="form-content-container">
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
            {/* <div className={`field-container`}> */}
                <p>Landmark<sup>*</sup></p>
                <input type="text" name="address2" value={ fields.address2.value } onChange={ onChange } />
                { fields.address2.error && <span className="error">{ fields.address2.error }</span> }
            </div>
            <div className={`field-container ${ fields.brgy.error ? "haserror" : "" }`}>
                <p>Barangay<sup>*</sup></p>
                <input type="text" name="brgy" value={ fields.brgy.value } onChange={ onChange } />
                { fields.brgy.error && <span className="error">{ fields.brgy.error }</span> }
            </div>
            {/* <div className="barangayfield-main-container custom-main-field-container">
                <p>Barangay<sup>*</sup></p>
                <div onClick={handleDropdown} className={dropDownStat ? "barangayfield-container custom-field-container active" : "barangayfield-container custom-field-container inactive"}>
                    <p>{selectedZip != null ? towns[selectedZip] : "Select your barangay..."}</p>
                </div>
            </div>
            {
                dropDownStat ? 
                    <div className="dropdown-container">
                    <Dropdown 
                        town={townMapping}
                    /> 
                </div> : <></>
            } */}
            <div className={`field-container ${ fields.city.error ? "haserror" : "" }`}>
                <p>City<sup>*</sup></p>
                <input type="text" name="city" value={ fields.city.value } />
                { fields.city.error && <span className="error">{ fields.city.error }</span> }
            </div>
            <div className={`field-container ${ fields.province.error ? "haserror" : "" }`}>
                <p>Province<sup>*</sup></p>
                <input type="text" name="province" value={ fields.province.value } />
                { fields.province.error && <span className="error">{ fields.province.error }</span> }
            </div>
            <div className={`field-container`}>
                <p>Country<sup>*</sup></p>
                <input type="text" name="country" value="Philippines" readOnly />
            </div>
            <div className={`field-container ${ fields.zip.error ? "haserror" : "" }`}>
                <p>Zip<sup>*</sup></p>
                <input type="text" name="zip" value={ fields.zip.value } />
                { fields.zip.error && <span className="error">{ fields.zip.error }</span> }
            </div>
            {/* <div className="zipfield-main-container custom-main-field-container">
                <p>Zip<sup>*</sup></p>
                <div className="zipfield-container custom-field-container">
                    <p>{zipCodes[selectedZip]}</p>
                </div>
            </div> */}
            <div className={`field-container ${ fields.phone.error ? "haserror" : "" }`}>
                <p>Phone<sup>*</sup></p>
                <input type="text" name="phone" value={ fields.phone.value } onChange={ onChange } />
                { fields.phone.error && <span className="error">{ fields.phone.error }</span> }
            </div>
            <div className="continue-button-container">
                <button onClick={ onProceed }>Continue</button>
            </div>
        </div>
    );
} 

export default ReduxConnect(ShippingDetails, ["fe_checkout"]);