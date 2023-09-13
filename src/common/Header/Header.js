import React, { useEffect } from "react"
import "../../assets/sass/app.scss"
import logo from "../../assets/media/logo.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import NavbarMobile from "./NavbarMobile"
import SignupLoginButton from "../cta/SignupLoginButton";
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

import Cart from "./Cart/Cart";

export default function Header() {

    const borderStyle = {
        border: "1px solid #F5821F"
    }

    const [mediaPost, setMediaPost] = React.useState(0)
    const [mediaPostY, setMediaPostY] = React.useState(1)

    const offsetY = window.pageYOffset;

    const stickyChunky = () => {
        setMediaPost(window.scrollY)

        const updateScrollDirection = () => {
            setMediaPostY(offsetY)
        }

        window.addEventListener("scroll", updateScrollDirection) 
    }

    window.addEventListener("scroll", stickyChunky)

    // console.log("screen", screen)

    return (
        <div className={mediaPostY > mediaPost ? "header is-sticky" :  "header is-sticky disappear"}>
            <div className="container">
               <div className="row">
                    <div className="header-container">
                        <div className="main-logo-container">
                            <Link to="/">
                                <img src={logo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="nav-list-container">
                            <Navbar />
                            <Cart />
                            <div className="signup-component-display">
                                <SignupLoginButton 
                                    modalClassname={"signup-button-modal"}
                                    buttonContainer={"signup-button-container-nav"}
                                    buttonClass={""}
                                    style={borderStyle}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}