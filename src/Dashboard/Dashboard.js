import React, { useState, useEffect } from "react";
import { ReduxConnect } from "helpers/HOC";
import Sidebar from "./Common/Sidebar/Sidebar";
import Header from "./Common/Header/Header";
import CryptoJS from "crypto-js";
import CircularProgress from "@mui/material/CircularProgress";

import Loader from "./Loader/Loader";
import Product from "./Product/Product";
import Members from "./Members/Members";
import Distributor from "./Distributor/Distributor";
import Orders from "./Orders/Orders";
import Subscriptions from "./Subscriptions/Subscriptions";
import Analytics from "./Analytics/Analytics";
import Coupons from "./Coupons/Coupons";
import Login from "./Login/Login";

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

const AdminPage = (props) => {
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        const token_id = localStorage.getItem('admin_token_id');
        const user_token = localStorage.getItem('admin_logged_user');

        if(token_id && user_token) {
            const data = JSON.parse(CryptoJS.AES.decrypt(user_token, token_id).toString(CryptoJS.enc.Utf8));

            if( data.email === "admin@creativestudio.com" && data.password === "BlinkCreativeStudio1234" ) {
                if(props.user_actions.setLoggedUser) {
                    props.user_actions.setLoggedUser(data);
                }
            } else {
                if(props.user_actions.setLoggedUser) {
                    props.user_actions.setLoggedUser(null);
                }
            }
        } else {
            if(props.user_actions.setLoggedUser) {
                props.user_actions.setLoggedUser(null);
            }
        }
        
        setLoading(false);
    }, []);

    const Container = (innerProps) => {
        if( props.user_state.loggedUser ) {
            return (
                <>
                    <Header />
                    <div id="dashboard-content">
                        <Sidebar/>
                        <div className="admin-dashboard-main-content-container">
                            { innerProps.component }
                        </div>
                    </div>
                </>
            )
        } else if( isLoading === false ) {
            return <Navigate to="/admin" replace />;
        }
    
        return null;
    };

    return (
        <Router>
            <div id="admin-dashboard">
                <div className={`main-content`}>
                    <Routes>
                        <Route exact path="/admin" element={ props.user_state.loggedUser ? <Container component={ <Navigate to="/admin/orders" replace /> } /> : <Login /> } />
                        <Route exact path="/admin/products" element={ <Container component={ <Product/> } /> } />
                        <Route exact path="/admin/members" element={ <Container component={ <Members/> } /> } />
                        <Route exact path="/admin/distributors" element={ <Container component={ <Distributor/> } /> } />
                        <Route exact path="/admin/orders" element={ <Container component={ <Orders/> } />} />
                        <Route exact path="/admin/subscriptions" element={ <Container component={ <Subscriptions/> } />} />
                        <Route exact path="/admin/analytics" element={ <Container component={ <Analytics /> } /> } />
                        <Route exact path="/admin/coupons" element={ <Container component={ <Coupons /> } /> } />
                    </Routes>
                </div>
                <Loader />
            </div>
        </Router>
    )
}

export default ReduxConnect( AdminPage, ["user"] );