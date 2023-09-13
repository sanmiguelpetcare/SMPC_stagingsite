import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();

    const isActive = arr => {
        return arr.indexOf( location.pathname ) > -1;
    };

    const isActiveProducts = isActive(["/admin/products", "/admin/coupons"]);
    const isActiveContacts = isActive(["/admin/members", "/admin/distributors"]);

    return (
        <>
            <div className="dashboard-navbar-main-container">
                <div className="dashboard-navbar-container">
                    <div className="menu-container">
                        <ul>
                            <li>
                                <NavLink to="/admin/orders">Orders</NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/subscriptions">Subscription</NavLink>
                            </li>
                            <li>
                                <div className={`with-group ${ isActiveProducts ? "active" : "" }`}>
                                    <div className="group-container">
                                        <NavLink to="/admin/products">
                                            Products
                                            <i className="material-icons">{ isActiveProducts ? "expand_less" : "expand_more" }</i>
                                        </NavLink>
                                        { isActiveProducts && (
                                            <ul>
                                                <li>
                                                    <NavLink to="/admin/products">Products</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/admin/coupons" className="disabled">Coupons</NavLink>
                                                </li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={`with-group ${ isActiveContacts  ? "active" : "" }`}>
                                    <div className="group-container">
                                        <NavLink to="/admin/members">
                                            Contacts
                                            <i className="material-icons">{ isActiveContacts ? "expand_less" : "expand_more" }</i>
                                        </NavLink>
                                        { isActiveContacts && (
                                            <ul>
                                                <li>
                                                    <NavLink to="/admin/members">Members</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/admin/distributors">Distributor</NavLink>
                                                </li>
                                            </ul>
                                        )}
                                    </div>   
                                </div>
                            </li>
                            <li>
                                <NavLink to="/admin/analytics" className="disabled">Analytics</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}