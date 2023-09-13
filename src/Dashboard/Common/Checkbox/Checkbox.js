import React, { useState } from "react";

const Checkbox = props => {
    const onClick = () => {
        if( props.onClick ) {
            props.onClick();
        }
    };

    return (
        <div className={`form-control checkbox ${ props.checked ? "checked" : "" }`} onClick={ onClick }>
            { props.checked && (
                <div className="check">
                    <i className="material-icons">
                        done
                    </i>
                </div>
            )}
        </div>  
    );
};

export default Checkbox;