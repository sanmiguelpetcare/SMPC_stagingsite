import React, { useEffect } from "react";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";
import TrioLogo from "assets/media/subscription-landing-page/TRIO_positive.png"
import PlusLogo from "assets/media/subscription-landing-page/PLUS_positive.png"
import MaxLogo from "assets/media/subscription-landing-page/MAX_negative.png"
import BlueWaveTop from "../../assets/media/new-home-page/Top.svg"
import BlueWaveBottom from "../../assets/media/new-home-page/Bottom.svg"
import { Link } from "react-router-dom"
import Modal from "../../common/cta/modal/Modal";
import Auth from "config/Auth";
import DistributorModal from "../Products/DistributorModal"


const Subscription = props => {
    useEffect(() => {
        if( props.fe_user_state.loggedUser ) {
            Request().get(`/subscription/subscribed/${ props.fe_user_state.loggedUser.id }`)
                .then( response => {
                    props.fe_user_actions.updateSubscription( response.data );
                });
        }
    }, [props.fe_user_state.loggedUser]);

    const [protectMaxLink, setProtectMaxLink] = React.useState()
    const [protectPlusLink, setProtectPlusLink] = React.useState()
    const [pMaxDropDown, setpMaxDropDown] = React.useState(false);
    const [pPlusDropDown, setpPlusDropDown] = React.useState(false);

    const [modalStatus, setModalstatus] = React.useState(false);

    // const handleOpenModal = function() {
    //     setModalstatus(true);
    // };

    console.log("subscription.js", props.fe_subscription_state)

    useEffect(() => {
        if(Auth.token_id === null && Auth.user_token === null) {
            setModalstatus(true)
        }
    })

    const handleClosemodal = function() {
        window.location.href = "/";
    };

    const protectMaxCategory = [
        {   
            id: 0,
            item: "One-time Payment",
            link: "/nc-protect/max-a"
        },
        {
            id: 1,
            item: "Billed Semi-annually",
            link: "/nc-protect/max-b"
        },
        {
            id: 2,
            item: "Billed Quarterly",
            link: "/nc-protect/max-c"
        },
    ]

    const protectPlusCategory = [
        {
            id: 0,
            item: "One-time Payment",
            link: "/nc-protect/plus-a"
        },
        {
            id: 1,
            item: "Billed Semi-annually",
            link: "/nc-protect/plus-b"
        },
    ]

    const Popup = (props) => {
     
        const handleLink = (id) => {
            if(pMaxDropDown) {
                setProtectMaxLink(id)
            }

            if(pPlusDropDown) {
                setProtectPlusLink(id)
            }
        }

        const protectCategoryMap = props.Content.map(item => {
            return (
                <>
                    <div onClick={() => handleLink(item.id)} className="popup-content">
                        <p>{item.item}</p>
                    </div>
                </>
            )
        })


        
        return (
                <>
                    <div className="protect-popup-container">
                        <div className="protect-popup-content-container">
                            {protectCategoryMap}
                        </div>
                    </div>
                </>
            )
    }

    if( props.fe_user_state.subscription ) {
        return (
            <div className="subscription-exists text-center">
                <p>You already have a subscription.</p>
                <a href="/mysubscription">See your subscription</a>
            </div>
        );
    }

    return(
        <>
            <Modal
                modalStatus={modalStatus}
                heading={"You need to log in to subscribe"}
                handleClose={handleClosemodal}
            />
            <DistributorModal />
            <div className="subscription-page">
                <img className="blue-wave-top" src={BlueWaveTop} alt="" />
                <div className="subscription-page-banner-section">
                    <div className="container">
                        <div className="subcription-page-main-banner-container">
                            <div className="subscription-content-heading-container">
                                <div className="subscription-content-heading">
                                    <h1>Pick the best plan for your fur baby</h1>
                                </div>
                                <div className="subscription-content-subheading">
                                    <p>Choose among our 3 PROTECT plans: TRIO, PLUS, and MAX. Enjoy discounts and exclusive bark packs when you upgrade to our Nutri Chunks Protect MAX plan. </p>
                                </div>
                            </div>
                            <div className="video-container">
                                <iframe src=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="blue-wave-bottom" src={BlueWaveBottom} alt="" />
                <div className="subscription-content-section">
                    <div className="container">
                        <div className="subscription-type-container">
                            <div className="subscription-trio-container subscription-type-individual-container">
                                <div className="heading">
                                    <div className="subscription-type-logo-container">
                                        <img src={TrioLogo} alt="" />
                                    </div>
                                    <div className="text-container">
                                        <div className="subscription-type-heading-container">
                                            <h4>Nutri Chunks Protect Trio</h4>
                                        </div>
                                        <div className="subscription-type-subheading-container">
                                            <h6>3-month subscription</h6>
                                        </div>
                                    </div>  
                                </div>
                                <div className="inclussion-main-container">
                                    <div className="inclussion-content">
                                        <div className="subscription-type-inclussion-container">
                                            <ul>
                                                <li className="check">Free Delivery</li>
                                                <li className="check">Dog Insurance Package</li>
                                                <li className="check">Bark Pack<br/> {`(`}Subscription Freebies{`)`}</li>
                                                <li className="cross">Pet Care Package</li>
                                                <li className="cross">Discount</li>
                                            </ul>
                                        </div>
                                        <div className="subscription-type-payment-container">
                                            <div className="payment-mode-container">
                                                <p>One Time Payment</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="subscription-type-button-container">
                                        <Link to="/nc-protect/trio">
                                            <button>Subscribe</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="subscription-max-container subscription-type-individual-container">
                                 <div className="heading">
                                    <div className="subscription-type-logo-container">
                                        <img src={MaxLogo} alt="" />
                                    </div>
                                    <div className="text-container">
                                        <div className="subscription-type-heading-container">
                                            <h4>Nutri Chunks Protect Max</h4>
                                        </div>
                                        <div className="subscription-type-subheading-container">
                                            <h6>1 year subscription</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="inclussion-main-container">
                                    <div className="inclussion-content">
                                        <div className="subscription-type-inclussion-container">
                                            <ul>
                                                <li className="check"><img src="" alt=""/>Free Delivery</li>
                                                <li className="check"><img src="" alt=""/>Dog Insurance Package</li>
                                                <li className="check"><img src="" alt=""/>Bark Pack<br/> {`(`}Subscription Freebies{`)`}</li>
                                                <li className="check"><img src="" alt=""/>Pet Care Package</li>
                                                <li className={protectMaxLink === 2 ? "cross" : "check"}><img src="" alt=""/>Discount {protectMaxLink === 0 ? "8%" : protectMaxLink === 1 ? "5%" : ""}</li>
                                            </ul>
                                        </div>
                                        <div 
                                            onClick={() => setpMaxDropDown(!pMaxDropDown)}
                                            className="subscription-type-payment-container"
                                        >
                                            <div className="payment-mode-container choose-payment-container">
                                                <p>{protectMaxLink === 0 ? "One-time Payment" : protectMaxLink === 1 ? "Billed Semi-annually" : protectMaxLink === 2 ? "Billed Quarterly" : "Choose Payment Fequencies"}</p>
                                            </div>
                                            {pMaxDropDown ? <Popup Content={protectMaxCategory}/> : <></>}
                                        </div>
                                    </div>
                                    <div className="subscription-type-button-container">
                                        <Link to={protectMaxLink === 0 ? "/nc-protect/max-a" : protectMaxLink === 1 ? "/nc-protect/max-b" : protectMaxLink === 2 ? "/nc-protect/max-c" : ""}>
                                            <button>Subscribe</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="subscription-plus-container subscription-type-individual-container">
                               <div className="heading">
                                <div className="subscription-type-logo-container">
                                        <img src={PlusLogo} alt="" />
                                    </div>
                                    <div className="text-container">
                                        <div className="subscription-type-heading-container">
                                            <h4>Nutri Chunks Protect Plus</h4>
                                        </div>
                                        <div className="subscription-type-subheading-container">
                                            <h6>6-month subscription</h6>
                                        </div>
                                    </div>
                               </div>
                               <div className="inclussion-main-container">
                                    <div className="inclussion-content">
                                        <div className="subscription-type-inclussion-container">
                                            <ul>
                                                <li className="check"><img src="" alt=""/>Free Delivery</li>
                                                <li className="check"><img src="" alt=""/>Dog Insurance Package</li>
                                                <li className="check"><img src="" alt=""/>Bark Pack<br/> {`(`}Subscription Freebies{`)`}</li>
                                                <li className="check"><img src="" alt=""/>Pet Care Package</li>
                                                <li className="cross"><img src="" alt=""/>Discount</li>
                                            </ul>
                                        </div>
                                        <div 
                                            onClick={() => setpPlusDropDown(!pPlusDropDown)}
                                            className="subscription-type-payment-container"
                                        >
                                            <div className="payment-mode-container choose-payment-container">
                                                <p>{protectPlusLink === 0 ? "One-time Payment" : protectPlusLink === 1 ? "Billed Quarterly"  : "Choose Payment Fequencies"}</p>
                                            </div>
                                            {pPlusDropDown ? <Popup  Content={protectPlusCategory}/> : <></>}
                                        </div>
                                    </div>
                                    <div className="subscription-type-button-container">
                                        <Link to={protectPlusLink === 0 ? "/nc-protect/plus-a" : protectPlusLink === 1 ? "/nc-protect/plus-b" : ""}>
                                            <button>Subscribe</button>
                                        </Link>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReduxConnect( Subscription, ["fe_user", "fe_subscription"] );