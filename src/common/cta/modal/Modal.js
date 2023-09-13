import { PropaneSharp } from "@mui/icons-material";
import React from "react";
// import { auth } from '../../../firebase';

import Login from "./Login";
// import Signup from "./Signup";

export default function Modal({modalStatus, handleClose, heading}) {
    
    if(modalStatus) {
        return (
            <>
                <div onClick={handleClose} className="overlay-styles"/>      
                <div className="modal-container">
                    {/* <p style={{ textAlign: "right" }}>
                        <i className="material-icons" onClick={handleClose}>close</i>
                    </p> */}
                    <div className="close-button">
                        <i 
                            className="fa fa-xmark"
                            onClick={handleClose}
                        ></i>
                    </div>
                    <Login 
                        handleClose={ handleClose } 
                        heading={heading}
                    />
                </div>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

