import React from "react";
import { NavLink } from "react-router-dom";
import { colors } from "./Config";
import Logout from "../../Logout/Logout";

const Header = (props) => {
    return (
        <div id="main-header">
            <div className="logo-container">
                <NavLink to="/admin">
                    <img src="/images/logo.webp" alt="logo" width="70" />
                </NavLink>
            </div>
            <div className="profile-container">
                <Logout />
            </div>
        </div>
    );
};

export default Header;