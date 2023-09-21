import Modal from '@mui/material/Modal';
import React from 'react';
import Request from "config/API";
import Tokenized from "config/Tokenized";
import { ReduxConnect } from "helpers/HOC";

const FailedLoginModal = (props) => {

    return (
        <div className="login-modal-container">
            <div className="login-header-container">
                <h2>{props.heading}</h2>
            </div>
            <div className="new-on-site-container">
                <p style={{ textAlign : "center", marginTop: "5px" }}>{ props.content }</p>
            </div>
        </div>
    )
}

export default ReduxConnect(FailedLoginModal, ["fe_user"]);