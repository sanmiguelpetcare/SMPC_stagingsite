import React from "react";
import { ReduxConnect } from "helpers/HOC";

 const myAccount = props => {
    const user = props.fe_user_state.loggedUser;
    
    if( !user ) return null;

    return (
        <>
            <div className="my-account">
                <div className="container">
                    <div className="my-account-content-container">
                        <div className="personal-details">
                            <div className="profile-picture">
                                
                            </div>
                            <div className="personal-details-content">
                                <div className="name field-container">
                                    <p>Name:</p>
                                    <p>{ user.firstName + " " + user.lastName }</p>
                                </div>
                                <div className="email field-container">
                                    <p>Email:</p>
                                    <p>{ user.email }</p>
                                </div>
                                <div className="phone field-container">
                                    <p>Contact Number:</p>
                                    <p>{ user.phone }</p>
                                </div>
                                <div className="address field-container">
                                    <p>Address:</p>
                                    <p>{ user.address1 } { user.address2 } { user.barangay } { user.city } { user.province } { user.zip }</p>
                                </div>
                            </div>
                        </div>
                        <div className="furbaby-details">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReduxConnect(myAccount, ["fe_user"]);