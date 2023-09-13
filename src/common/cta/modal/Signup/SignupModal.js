import { PropaneSharp } from "@mui/icons-material";
import React from "react";
// import { auth } from '../../../firebase';

import FailedLoginModal from "./FailedSignup";
// import Signup from "./Signup";

export default function Modal({modalStatus, handleClose, heading, content}) {
    
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
                    <FailedLoginModal 
                        handleClose={ handleClose } 
                        heading={heading}
                        content={content}
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

