import { areas } from "covered-shipping-areas";
import { ReduxConnect } from "helpers/HOC";
import { Select } from 'antd';
import DistributionLocation from "common/distribution-location/DistributionLocation"
import Request from "config/API";
import React, { useState, useEffect } from "react";


const DistributorModal = (props) => {
    const [distributors, setDistributors] = useState([]);
    const [isOpen, setOpen] = React.useState(false)
    const [dropDownStatus, setDropdown] = React.useState(false)
    const [location, setLocation] = React.useState(null)

    const [city, setCity] = useState("");
    const [citySeparate, setCitySeparate] = useState("") 
    const [zipCode, setZipCode]= useState("");
    const [barangay, setBarangay] = useState("");
    const [barangayList, setBarangayList] = useState([]);
    const [region, setRegion] = useState("")
    const _cities = areas.map(a => {return `${a.City}, ${a.Region}`}).filter((item, index, arr) => arr.indexOf(item) === index).sort().map(ct => {return { value: ct, label: ct}});

    console.log("city_0", city)

    useEffect(() => {
        Request().get("/distributor")
            .then( response => {
                if( response ) {
                    let arr = [];

                    for( const d of response.data.result ) {
                        // arr = [...arr, ...d.zips.map( z => ({ value: z.zip, label: `${ d.region }, ${ z.town }`, email: d.email }))]
                        arr = [...arr, ({ value: d.zips.map(z => `${ z.zip }`), label: `${ d.city }`, region: d.region, email: d.email, town: d.zips.map(z => `${ z.town }`) })]
                    }

                    setDistributors(arr);
                }
            });

        if( localStorage.getItem( "distributor" ) ) {
            setOpen( false );
        } else {
            setOpen( true );
        }
    }, []);   

    const locationMapping = distributors.map(item => {
        return (
            <>
                <div onClick={() => handleLocation(item)} className="item-container">
                    <p>{item.label}</p>
                </div>
            </>
        )
    })
    
    const LocationComponent = (props) => {
        return (
            <>
              {props.dropDownItem}
            </>
        )
    }

    const handleLocation = (item) => {
        setDropdown(false)
        setLocation(item)
        // props.fe_distributioner_actions.setDistributorLocation(item)
    }

    const handleDropdown = () => {
        setDropdown(!dropDownStatus)
    }

    const handleCityChange = e => {
        setCity(e);

        let loc = e.split(", ");
        let region = loc[1];
        let city = loc[0];

        let _brgyList = areas.filter(a => (a.Region === region && a.City === city)).map(a => a.Barangay).filter((item, index, arr) => arr.indexOf(item) === index).sort().map(brgy => {return { value: brgy, label: brgy}});
        
        let zipCode = areas.filter(a => (a.Region === region && a.City === city)).map(a => a["ZIP CODE"]).filter((item, index, arr) => arr.indexOf(item) === index).sort().map(item => {return item});

        setZipCode(zipCode)

        setBarangayList(_brgyList);

        setRegion(region)

        setCitySeparate(city)
    }

    const handleBarangayChange = e => {
        setBarangay(e);

        let _location = e + ", " + city;
        let _locObject = {
            label : _location,
            value : _location,
            email : "",
            town : e,
            region : city,
        }

        setLocation(_locObject);
    }

    const onSubmit = () => {
        if( location ) {
            localStorage.setItem("distributor", `${ location.label }|${ location.value }|${ location.email }|${ location.town }|${ location.region }|${citySeparate}|${region}|${zipCode}`);
            setOpen(false);
        }
    };

    const handleCloseModal = e => {
        if (!localStorage.getItem("distributor")) {
            window.location.href = "/"
        } 
        else {
            setOpen(false)
        }
    };

    if( isOpen ) {
        return (
            <>
                <div onClick={ !localStorage.getItem("distributor") ? null : () => setOpen(false) } className="overlay-styles"/>      
                <div className="modal-container">
                    <div className="close-button">
                        <i className="fa fa-xmark" onClick={ handleCloseModal }></i>
                        {/* <i className="material-icons" onClick={setOpen(false)}>close</i> */}
                    </div>
                    <div className="distributor-modal-container">
                        <div className="distributor-header-container">
                            <h1>Your Location</h1>
                        </div>

                        <div className="distributor-modal-form">
                            <Select 
                                // className="distributor-dropdown-container"
                                options={_cities}
                                placeholder="City/Municipality"
                                showSearch={true}
                                onChange={ handleCityChange }
                            />

                            <Select 
                                // className="distributor-dropdown-container"
                                options={barangayList}
                                placeholder="Barangay/District/Locality"
                                notFoundContent="Select a City or Municipality"
                                showSearch={true}
                                onChange={ handleBarangayChange }
                            />

                            {/* <div onClick={handleDropdown} className="dropdown-field">
                                <p>{location === null ? "Your location..." : location.label}</p>
                                <p className={dropDownStatus ? "arrow-up" : "arrow-down"}></p>
                            </div>
                            {dropDownStatus ? 
                                <div className="distributor-dropdown-container">
                                    <div className="distributor-dropdown">
                                        <LocationComponent
                                            dropDownItem={locationMapping}
                                        />
                                    </div>
                                </div> : <></>
                            } */}
                            <div className="form-item button button-container" onClick={ onSubmit }>
                                <button>START SHOPPING</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <DistributionLocation onOpen={ () => setOpen(true) } />
    )
}


export default ReduxConnect(DistributorModal, ["fe_distributioner"]);

// export default DistributorModal