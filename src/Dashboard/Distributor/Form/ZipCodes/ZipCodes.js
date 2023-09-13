import React from "react";
import { ReduxConnect } from "helpers/HOC";
import Request from "config/API";

const ZipCodes = props => {
    const zips = props.distributor_state.item.zips;

    const onAddZip = (e, i) => {
        e.preventDefault();

        let formatted = [...zips];

        formatted.splice(i + 1, 0, props.distributor_state.item.zipEntry);

        props.distributor_actions.updateZips( formatted );
    };

    const onRemoveZip = (e, i) => {
        e.preventDefault();

        props.distributor_actions.updateZips( zips.filter( (z, index) => index !== i ) );
    };

    const onChange = (e, i) => {
        props.distributor_actions.updateZips( [...zips].map( (z, index) => {
            if( index === i ) {
                return {
                    ...z,
                    [e.target.name]: e.target.value
                }
            }

            return z;
        } ) );
    };

    console.log(zips);

    return (
        <div className={`form-item`}>
            <label>Zip<sup>*</sup></label>
            <div className="container">
                { zips.map( (z, i) => (
                    <div className="row" key={ `zips_${ i }`}>
                        <div className="col">
                            <input type="text" placeholder="Town" name="town" value={ z.town } onChange={ e => onChange(e, i) } />
                        </div>
                        <div className="col">
                            <input type="number" placeholder="Zip" name="zip" value={ z.zip } onChange={ e => onChange(e, i) } />
                        </div>
                        <div className="col">
                            <a href="/" onClick={ e => onAddZip(e, i) }>
                                <i className="material-icons">add</i>
                            </a>
                            { zips.length > 1 && (
                                <a href="/" onClick={ e => onRemoveZip(e, i) }>
                                    <i className="material-icons">remove</i>
                                </a>
                            )}
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default ReduxConnect(ZipCodes, ["distributor"]);