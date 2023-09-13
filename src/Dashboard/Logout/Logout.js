import React from "react";
import { ReduxConnect } from "helpers/HOC";

const Logout = props => {
    const onLogout = e => {
        e.preventDefault();

        console.log(props);

        if(props.user_actions.setLoggedUser) {
            props.user_actions.setLoggedUser(null);

            localStorage.removeItem('admin_token_id');
            localStorage.removeItem('admin_logged_user');

            window.location.href = "/admin";
        }
    };

    return (
        <a href="#" onClick={ onLogout }>Logout</a>
    );
}

export default ReduxConnect( Logout, ["user"] );