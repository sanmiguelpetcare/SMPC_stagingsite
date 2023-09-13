import React from "react"
import { Link } from 'react-router-dom'
import "../../assets/sass/app.scss"
import DogBowl from "../../assets/media/homepage-assets/Dry Dog Food Stainless Steel Bowl.G03.2k.png"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Kibbles from "../../assets/media/homepage-assets/Kibbles.png"
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from "react-router-dom";
import { ReduxConnect } from "helpers/HOC";

function Footer(props) {
    const borderStyle = {
        border: "1px solid #F5821F"
    }

    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-container">
                        <div className="footer-details">

                            <div className="footer-details-container">
                                <div className="footer-details-content">
                                    <div className="footer-quicklinks-container">
                                        <ul>
                                            <h6>QUICK LINKS</h6>
                                            {/* <Link to="https://www.store.sanmiguelpetcare.com/"><li>Products</li></Link>
                                            <Link to="https://www.store.sanmiguelpetcare.com/"><li className="sub-products">One-Time</li></Link> */}
                                            <a href="/products/"><li>Products</li></a>
                                            {/* <li><a href="https://www.store.sanmiguelpetcare.com/" className="sub-products">One-Time</a></li> */}
                                            <NavLink to="#"><li className="sub-products">Subscription</li></NavLink>
                                            <NavLink to="/nutrition"><li>Nutrition</li></NavLink>
                                            <NavLink to="/pupstar"><li>Pup Star</li></NavLink>
                                            <NavLink to="/dog-digest"><li>Dog Digest</li></NavLink>
                                        </ul>
                                    </div>
                                    <div className="contact-us-container">
                                        <ul>
                                            <h6>CONTACT US</h6>
                                            <a href="tel:+639176399542"><li>0917-639-9542</li></a>
                                            <a href="mailto:+639176399542"><li>nutrichunks@sanmiguelpetcare.com</li></a>
                                            <a href="https://tinyurl.com/yckyf2w3" target="_blank" rel="noreferrer"><li>GMC Compund Felix Ave. Brgy. Sto. Domingo, Cainta Rizal, Cainta, Philippines</li></a>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-cta-content-container">
                                    <div className={props.fe_user_state.loggedUser ? "footer-cta-container display-none" : "footer-cta-container"}>
                                        <h6>JOIN THE PAWMILY</h6>
                                        <div className="signup-button-container-nav">
                                            <Link to="/signup">
                                                <button>SIGN UP</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="social-media-container">
                                        <a href="https://www.facebook.com/nutrichunksph/"><FacebookRoundedIcon /></a>
                                        <a href="https://www.instagram.com/nutrichunkspawmily/"><InstagramIcon /></a>
                                        <a href="https://www.youtube.com/@nutrichunkspawmily2267"><YouTubeIcon /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-image-container">
                                <img className="kibbles" src={Kibbles} />
                                <img className="dogbowl" src={DogBowl} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-container">
               <div className="container">
                    <div className="footer-copyright-content">
                        <p>Copyright © 2020 Nutri Chunks Pawmily. All rights reserved.</p>
                        <p>Privacy Policy | Terms and Conditions</p>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default ReduxConnect(Footer, ["fe_user"]);