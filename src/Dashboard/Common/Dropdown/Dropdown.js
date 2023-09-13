import React, { useState } from "react";

const Dropdown = props => {
    const [ isActive, setActive ] = useState( false );

    const onSetActive = () => {
        setActive( isActive ? false : true );
    }

    const onChange = option => {
        if( props.onChange ) {
            props.onChange( option );
        }   

        setActive( false );
    }

    return (
        <div className="dropdown-container">
            <label>{ props.label }</label>
            <div className="form-control dropdown" onClick={ onSetActive }>
                <span>
                   { props.value ? props.value.label : props.placeholder }
                    <i className="material-icons">
                        { isActive ? "keyboard_arrow_up" : "keyboard_arrow_down" }
                    </i>
                </span>
                { isActive && (
                    <div className="options">
                        <div className="option" onClick={ () => onChange(null) }>{ props.placeholder }</div>
                        { (props.options || []).map( option => (
                            <div className="option" onClick={ () => onChange(option) }>{ option.label }</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;