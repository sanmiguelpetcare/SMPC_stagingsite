import React, { useState, useEffect } from "react";
import { ReduxConnect } from "helpers/HOC";
import HomepageOld from "./_Homepage/Homepage"
import Homepage from "./Homepage/Homepage"
import PrivacyPolicy from "./Privacy-policy/PrivacyPolicy"
import TermsAndCondition from "./Terms-and-Condition/TermsAndCondition"
import Products from "./Products/Products";
import Product from "./Products/Product/Product";
import Pawprints from "./Pawprints/Pawprints"
import Pupstart from "./Pupstar/Pupstar"
import SignupPupStar from "./Pupstar/SignupPupstar"
import Nutrition from "./Nutrition/Nutrition"
import Cart from "./Cart/Cart"
import Subscription from "./Subscription/Subscription"
import PawPrintButton from "../common/pawprints-button/PawprintsButton"
import Header from "common/Header/Header"
import Footer from "common/Footer/Footer"
import ProtectPage from "./protect-pages/ProtectPage";
import SubscriptionItem from "./Subscription/SubscriptionItem/SubscriptionItem";
import Checkout from "./Checkout/Checkout";
import SubscriptionCheckout from "./Subscription-Checkout/Checkout"
import DogDigestSingle from "./DogDigest/DogDigestSingle"
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import DogDigest from "./DogDigest/DogDigest";
import Signup from "../common/cta/modal/Signup/Signup"
import MySubscription from "./Members-page/mySubscriptions"
import OrderHistory from "./Members-page/orderHistory"
import MyProfile from "./Members-page/myProfile"
import Loader from "common/Loader/Loader";
import PageDoNotExist from "./404/404"
import Auth from "config/Auth";
// import swell from 'swell-js';

const Container = props => {

    return (
        <div className="web-app">
            <Header />
                { props.component }
                {/* <PawPrintButton /> */}
            <Footer />
        </div>
    );
};


const WebPage = props => {
    const [isLoading, setLoading] = useState(true);

    // swell.init("nutri-chunks-pawmily", "pk_p2aI2WSztUyecuubPrt5xrM1x6lEfepy");

    // const DistributorLocation = props.fe_distributioner_state.distributor

    useEffect(async () => {
        // var account = await swell.account.get();
        // console.log(account);

        if(Auth.token_id && Auth.user_token) {
            Auth.validateUser(
                user => {
                    console.log(user)
                    props.fe_user_actions.setLoggedUser(user);
                    setLoading( false );
                },
                () => {
                    Auth.logout(() => {
                        props.fe_user_actions.setLoggedUser(null);
                        window.location.replace("/");
                    });
                }
            );
        } 
        else {
            console.log( "not logged in" );
        }
        setLoading( false );
    }, []);

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Container component={ <Homepage/> } />} />
                <Route exact path="/pawprints" element={<Container component={ <Pawprints/> } />} />
                <Route exact path="/pupstar" element={<Container component={ <Pupstart/> } />} />
                <Route exact path="/pupstar-signup" element={<Container component={ <SignupPupStar/> } />} />
                <Route exact path="/products" element={<Container component={ <Products/> } />} />
                <Route exact path="/terms-and-condition" element={<Container component={ <TermsAndCondition/> } />} />
                <Route exact path="/privacy-policy" element={<Container component={ <PrivacyPolicy/> } />} />
                <Route exact path="/nutrition" element={<Container component={ <Nutrition/> } />} />
                <Route exact path={`/products/:id`} element={<Container component={ <Product/> }/>} />
                <Route exact path="/cart" element={<Container component={ <Cart/> } />} />
                <Route exact path="/subscription" element={<Container component={ <Subscription /> } />} />
                <Route exact path="/nc-protect/:param" element={<Container component={ <SubscriptionItem /> } />} />
                <Route exact path="/dog-digest" element={<Container component={ <DogDigest /> } />} />
                <Route exact path="/dog-digest/:param" element={<Container component={ <DogDigestSingle /> } />} />
                <Route exact path="/checkout" element={<Checkout/>} />
                <Route exact path="/subscription-checkout" element={<SubscriptionCheckout/>} />
                <Route exact path="/signup" element={!isLoading && !props.fe_user_state.loggedUser ? <Container component={<Signup/>}/> : ( !isLoading && props.fe_user_state.loggedUser ? <Navigate to="/" replace /> : null ) } />
                <Route exact path="/mysubscription" element={<Container component={<MySubscription/>}/> } />
                <Route exact path="/profile" element={<Container component={<MyProfile/>}/> } />
                <Route exact path="/order-history" element={<Container component={<OrderHistory/>}/> } />
            </Routes>
            { props.common_state.isLoading && <Loader /> }
        </Router>
    )
}

export default ReduxConnect( WebPage, ["fe_user", "common"] );