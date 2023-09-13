import React, { useState } from "react";
import Furbabies from "../Furbabies/Furbabies";
import { Select } from 'antd';
import { ReduxConnect } from "helpers/HOC";
import { provinces as _provincesList } from "covered-provinces";
import { regions, provinces, cities, barangays, provinceByName, regionByName, cityByNameAndCode } from "select-philippines-address";
import zipcodes from 'zipcodes-ph';
import { areas } from "covered-shipping-areas";

const Form = (props) => {
    const [ _regions, setRegions ] = useState([])
    const [ _region, setRegion ] = useState()
    regions()
        .then((region) => {
            setRegions(region.map(reg => {
                return {
                    label: reg.region_name,
                    value: reg.region_name,
                }
            })) 
        })

    const data = props.fe_signup_state.item.form;
    const provinceList = Object.keys(_provincesList);
    const provincesList = provinceList.map(prov => {
        return({
            value: prov,
            label: prov,
            target: {
                name: "province",
                value: prov
            }
        })
    });
    const [ filteredProvinceList, setFilteredProvinceList ] = useState(provinceList)
    const [ provincePlaceholderColor, setProvincePlaceholderColor ] = useState(false);
    const [ cityPlaceholderColor, setCityPlaceholderColor ] = useState(false);
    const [ barangayPlaceholderColor, setBarangayPlaceholderColor ] = useState(false);
    const [ _provinceList, setProvinceList ] = useState([]);
    const [ province, setProvince ] = useState();
    const [ cityList, setCityList ] = useState([]);
    const [ city, setCity ] = useState();
    const [ barangayList, setBarangayList ] = useState([]);
    const [ barangay, setBarangay ] = useState();
    const [ provinceDropdown, setProvinceDropdown ] = useState(false);

    // TO EDIT
    const _area = areas.map(areas => {return areas.Region})
    const _province = _area.filter((item, index, arr) => arr.indexOf(item) === index).map(area => {return {value: area, label: area}})
    const _bulacanCities = areas.filter(areas => areas.Region === "Bulacan").map(city => {return city.City})
    const _manilaCities = areas.filter(areas => areas.Region === "National Capital Region").map((city) => {return city.City}).filter((item, index, arr) => arr.indexOf(item) === index)
    const _rizalCities = areas.filter(areas => areas.Region === "Rizal").map(city => {return city.City})


    const placeholderInputColor = "#8F8F8F"
    const black = "#000"

    const unsetStyle = {
        color: placeholderInputColor,
        opacity: 0.8
    }

    const handleRegionChange = e => {
        regionByName(e)
            .then((region) => {
                provinces(region.region_code)
                    .then((province) => {
                        setProvinceList(province.map(prov => {
                            return {
                                label: prov.province_name,
                                value: prov.province_name,
                            }
                        })) 
                    })
            })
    }

    const handleProvinceChange = e => {
        props.fe_signup_actions.updateField([
            {
                field: "province",
                key: "value",
                value: e
            },
            {
                field: "province",
                key: "error",
                value: null
            }
        ]);

        setProvince(e);

        // let _cities = areas.filter(areas => areas.Region === e).map((area) => {return area.City}).filter((item, index, arr) => arr.indexOf(item) === index).sort().map(city => {return {value: city, lable: city}})
        // setCityList(_cities);

        provinceByName(e)
            .then((province) => {
                cities(province.province_code)
                    .then((city) => {
                        setCityList(city.map(ct => {
                            return {
                                label: ct.city_name,
                                value: ct.city_name,
                            }
                        }))
                    })
            })

        setProvincePlaceholderColor(true)
    }

    const handleCityChange = e => {
        props.fe_signup_actions.updateField([
            {
                field: "city",
                key: "value",
                value: e
            },
            {
                field: "city",
                key: "error",
                value: null
            }
        ]);

        setCity(e);

        // let _brgys = areas.filter(areas => (areas.Region === province && areas.City === e)).map((area) => {return area.Barangay}).filter((item, index, arr) => arr.indexOf(item) === index).sort().map(brgy => {return {value: brgy, lable: brgy}})
        // setBarangayList(_brgys);

        provinceByName(province)
            .then((prov) => {
                cityByNameAndCode(e, prov.province_code)
                    .then((city) => {
                        barangays(city.city_code)
                            .then(barangay => {
                                setBarangayList(barangay.map(brgy => {
                                    return {
                                        label: brgy.brgy_name,
                                        value: brgy.brgy_name,
                                    }
                                }))
                            })
                    })
            })

        setCityPlaceholderColor(true)
    }

    const handleBarangayChange = e => {
        props.fe_signup_actions.updateField([
            {
                field: "brgy",
                key: "value",
                value: e
            },
            {
                field: "brgy",
                key: "error",
                value: null
            }
        ]);

        setBarangay(e);
        setBarangayPlaceholderColor(true);

        handleZipChange(e)
    }

    // Automatic zip change does not work yet
    const handleZipChange = e => {
        var _province = province;
        var _city = city;
        var _brgy = e;

        // var area = areas.filter(area => (area.Barangay === _brgy && area.Region === _province && area.City === _city))
        var zip = zipcodes.reverse(e);
        if (!zip) {
            zip = zipcodes.reverse(city)
        }

        props.fe_signup_actions.updateField([
            {
                field: "zip",
                key: "value",
                value: zip
            },
            {
                field: "zip",
                key: "error",
                value: null
            }
        ]);
    }

    const handleChange = e => {

        props.fe_signup_actions.updateField([
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

    const handleOnProvinceClick = e => {
        if (provinceDropdown) {
            {
                filteredProvinceList.map((province, index) => {
                    return(
                        <option
                            key={index}
                            value={province} 
                        >{province}</option>
                    )
                })
            }
        }
        else {
            return(<></>)
        }
    }

    const handleProvinceDropdown = e => {
        return(
            <div className="province-option dropdown-option">
                <div className="province-list">
                    <input className="province-search-bar search-bar" type="text" placeholder="Search Location..." onKeyUp={ filterProvinceList }></input>
                    {
                        filteredProvinceList.map((province, index) => {
                            return(
                                <option
                                    key={index}
                                    name="province" 
                                    value={province} 
                                    onClick={handleProvinceChange}
                                >{province}</option>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    const filterProvinceList = e => {
        let filtered = provinceList.filter(provinces => provinces.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredProvinceList(filtered)
    }

    if( props.isFirstStep ) {
        return (
            <>
                <div className="signup-heading">
                    <div className="create-an-acoount-container">
                        <h2>Create an account</h2>
                    </div>
                    <div className="already-member-container">
                        <h6>Already a member?</h6>
                        <div className="login-button" onClick={ props.onOpenLogin }>
                            <h6> Log in</h6>
                        </div>
                    </div>
                </div>
                <div className="main-form-container">
                    <div className="form-container">
                        <div className="personal-details-container">
                            <div className="personal-details-heading-container">
                                <h4>Your Personal Details</h4>
                            </div>
                            <div className="personal-details-content-container">
                                <div className="personal-details-form-container" id="personal-details">
                                    <div className="personal-details-form-sub-container">
                                        <div className="firstName-field-container field-container">
                                            {/* <p>First Name<sup>*</sup></p> */}
                                            <input placeholder="First Name*" className={`${ data.firstName.error ? "signup-input haserror" : "signup-input" }`} type="text" onChange={ handleChange } name="firstName" value={ data.firstName.value } autoComplete="off" required/>
                                            { data.firstName.error && <span className="error"><i className="fa fa-xmark"></i>{ data.firstName.error }</span> }
                                        </div>
                                        <div className="lastName-field-container field-container">
                                            {/* <p>Last Name<sup>*</sup></p> */}
                                            <input placeholder="Last Name*" className={`${ data.lastName.error ? "signup-input haserror" : "signup-input" }`} type="text" onChange={ handleChange } name="lastName" value={ data.lastName.value } autoComplete="off"/>
                                            { data.lastName.error && <span className="error"><i className="fa fa-xmark"></i>{ data.lastName.error }</span> }
                                        </div>
                                        <div className="email-field-container field-container">
                                            {/* <p>Email<sup>*</sup></p> */}
                                            <input placeholder="Email Address*" className={`${ data.email.error ? "email-signup signup-input haserror" : "email-signup signup-input" }`} type="text" onChange={ handleChange } name="email" value={ data.email.value } autoComplete="off"/>
                                            { data.email.error && <span className="error"><i className="fa fa-xmark"></i>{ data.email.error }</span> }
                                        </div>
                                    </div>
                                    <div className="personal-details-form-sub-container">
                                        
                                        <div className="pasword-field-container field-container">
                                            {/* <p>Password<sup>*</sup></p> */}
                                            <input placeholder="Password*" className={`${ data.password.error ? "signup-input haserror" : "signup-input" }`} type="password" onChange={ handleChange } name="password" value={ data.password.value } />
                                            { data.password.error && <span className="error"><i className="fa fa-xmark"></i>{ data.password.error }</span> }
                                        </div>
                                        <div className="confirm-pasword-field-container field-container">
                                            {/* <p>Confirm Password<sup>*</sup></p> */}
                                            <input placeholder="Confirm Password*" className={`${ data.confirmPassword.error ? "signup-input haserror" : "signup-input" }`} type="password" onChange={ handleChange } name="confirmPassword" value={ data.confirmPassword.value } />
                                            { data.confirmPassword.error && <span className="error"><i className="fa fa-xmark"></i>{ data.confirmPassword.error }</span> }
                                        </div>
                                        <div className="phone-field-container field-container">
                                            {/* <p>Phone<sup>*</sup></p> */}
                                            {/* <ConfigProvider locale={en}>
                                                <CountryPhoneInput 
                                                    onChange={ handleChange }
                                                    name="phone"
                                                    phoneCode="+63"
                                                    // value={ data.phone.value }
                                                />
                                            </ConfigProvider> */}
                                            <input placeholder="Phone*" className={`${ data.phone.error ? "signup-input haserror" : "signup-input" }`}          
                                                type="text"
                                                onChange={ handleChange } name="phone" 
                                                value={ data.phone.value } 
                                                style={{appearance: "none"}}
                                                pattern="/+[0-9]*/"
                                                autoComplete="off"
                                                onFocus={ e => { 
                                                    if (e.target.value === null || e.target.value.slice(3) === "") {
                                                        return e.target.value = "+63"
                                                    }} 
                                                }
                                            />
                                            { data.phone.error && <span className="error"><i className="fa fa-xmark"></i>{ data.phone.error }</span> }
                                        </div>
                                    </div>
                                </div>
                                <div className="personal-details-form-container" id="shipping-details">
                                    <div className="personal-details-form-sub-container">
                                        <div className="province-field-container field-container" >
                                            {/* <p>Region<sup>*</sup></p> */}
                                            <Select 
                                                className="signup-input"
                                                options={_regions}
                                                placeholder="Region*"
                                                name="region"
                                                onChange={handleRegionChange}
                                                showSearch={true}
                                                autoComplete="off"
                                            />
                                            { data.province.error && <span className="error"><i className="fa fa-xmark"></i>{ data.province.error }</span> }
                                        </div>
                                        {/* <div className="province-field-container field-container">
                                            <Select 
                                                className={`${ data.province.error ? "signup-input haserror" : "signup-input" }`}
                                                options={_provinceList}
                                                placeholder="Province*"
                                                name="province"
                                                onChange={handleProvinceChange}
                                                showSearch={true}
                                                value={data.province.value}
                                                autoComplete="off"
                                                notFoundContent="Select a Region"
                                            />
                                            { data.province.error && <span className="error"><i className="fa fa-xmark"></i>{ data.province.error }</span> }
                                        </div> */}
                                        {/* <div className="city-field-container field-container">
                                            <Select
                                                className={`${ data.city.error ? "signup-input haserror" : "signup-input" }`}
                                                options={cityList}
                                                placeholder="City/Municipality*"
                                                onChange={handleCityChange}
                                                showSearch={true}
                                                value={data.city.value}
                                                autoComplete="off"
                                                notFoundContent="Select a Province or Region"
                                                name="city"
                                            />
                                            { data.city.error && <span className="error"><i className="fa fa-xmark"></i>{ data.city.error }</span> }
                                        </div> */}
                                        
                                    </div>
                                    <div className="personal-details-form-sub-container">
                                        {/* <div className="barangay-field-container field-container">
                                            <Select
                                                className={`${ data.brgy.error ? "signup-input haserror" : "signup-input" }`}
                                                options={barangayList}
                                                placeholder="Barangay/District/Locality*"
                                                onChange={handleBarangayChange}
                                                showSearch={true}
                                                value={data.brgy.value}
                                                autoComplete="off"
                                                notFoundContent="Select a City or Municipality"
                                                name="brgy"
                                            />
                                            { data.brgy.error && <span className="error"><i className="fa fa-xmark"></i>{ data.brgy.error }</span> }
                                        </div> */}
                                        <div className="address-field-container field-container">
                                            {/* <p>Address 1<sup>*</sup></p> */}
                                            <input placeholder="Unit/Building No./House/Lot & Blk No. | Street | Subdivision*" className={`${ data.address1.error ? "signup-input haserror" : "signup-input" }`} type="text" onChange={ handleChange } name="address1" value={ data.address1.value } autoComplete="off"/>
                                            { data.address1.error && <span className="error"><i className="fa fa-xmark"></i>{ data.address1.error }</span> }
                                        </div>
                                        <div className="postal-field-container field-container">
                                            {/* <p>Postal / Zip code<sup>*</sup></p> */}
                                            <input placeholder="Postal / Zip code*" className={`${ data.zip.error ? "signup-input haserror" : "signup-input" }`} type="number" onChange={ handleChange } name="zip" value={ data.zip.value } style={{appearance: "none"}} autoComplete="off"/>
                                            { data.zip.error && <span className="error"><i className="fa fa-xmark"></i>{ data.zip.error }</span> }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Furbabies />
            </>
        )
    }
}

export default ReduxConnect( Form, ["fe_signup"] );