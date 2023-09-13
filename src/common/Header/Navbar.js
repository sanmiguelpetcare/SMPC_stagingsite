import React from "react"
import { NavLink } from "react-router-dom"
import { motion, useTransform } from "framer-motion"
// import DistributorModal from "./DistributorModal"
// import product from "redux/reducers/frontend/product"
// import Popup from "../cta/popup/popup"

export default function NavbarList(props) {
    
    const [popupStatus, setPopupStatus] = React.useState(false) 
    const [activeItem, setActiveItem] = React.useState("home")
    const [sidebar, setSidebar] = React.useState(false)
    // const [modalStatus, setModalstatus] = React.useState(false)
    // const currentNavitem = localStorage.getItem(activeItem)

    // const faIcon = useTransform(sidebar, [false, true], ["fa fa-bars", "fa fa-xmark"])

    const handleClick = (item) => {
        setSidebar(!sidebar)
        setActiveItem(item)
        setPopupStatus(false)
    }

    const handlePopup = (item) => {
        setActiveItem(item)
        setPopupStatus(!popupStatus)
    }

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    
    const PopupModal = (props) => {
       return (
            <>
                <div className="popup-container">
                    <div className="popup-content-container">
                        {/* <NavLink onClick={() => handleClick()} 
                            to="https://www.store.sanmiguelpetcare.com/" 
                            className="">
                                One Time
                        </NavLink> */}
                        <NavLink to="/products"><li>One Time</li></NavLink>
                        {/* <a href="https://www.store.sanmiguelpetcare.com/dog-food">One Time</a> */}
                        {/* <NavLink onClick={() => handleClick()} 
                            to="/subscription" 
                            className="disabled">
                                Subscription
                        </NavLink> */}
                        <NavLink to="/subscription"><li>Subscription</li></NavLink>
                    </div>
                </div>
            </>
       )
    }

    const Navbar = () => {
        return (
            <>
                <ul>
                    <NavLink to="/" end><li>
                        Home
                        <div className="active-bar"></div>
                    </li></NavLink>
                    <div className= "product-nav-container">
                        <li className={ window.location.pathname === "/products" || window.location.pathname === "/subscription" ? "active" : ""}>
                            Products
                            <div className="active-bar"></div>
                        </li>
                        <div  className="products-popup-items">
                            <PopupModal />
                        </div>
                        {/* <li><a href="https://www.store.sanmiguelpetcare.com/">Products</a></li> */}
                        {/* <li><a href="/products/">Products</a></li> */}
                        {/* <li><a href="http://localhost:3333/">Products</a></li> */}
                       
                    </div>
                    {/* <Link to="/pawprints"><li onClick={() => handleClick("pawmily")} className={activeItem == "pawmily" ? "active" : "inactive"}>Pawmily</li></Link> */}
                    <NavLink to="/nutrition"><li>
                        Nutrition
                        <div className="active-bar"></div>
                    </li></NavLink>
                    <NavLink to="/pupstar"><li>
                        Pup Star
                        <div className="active-bar"></div>
                    </li></NavLink>
                    <NavLink to="/dog-digest"><li >
                        Dog Digest
                        <div className="active-bar"></div>
                    </li></NavLink>
                </ul>
            </>
        ) 
    }

    const NavbarMobile = () => {
        return (
            <>  
                <div className={sidebar ? 'navbar-mobile active' : 'navbar-mobile'}>
                {/* <i className="material-icons" onClick={() => handleClick()}>close</i> */}
                    <ul>
                        <NavLink to="/" end><li onClick={() => handleClick()}>Home</li></NavLink>
                        <div className="product-nav-container">
                            {/* <li onClick={() => handlePopup()} className={ window.location.pathname === "/products" || window.location.pathname === "/subscription" ? "active" : ""}>Products</li>
                            <div>
                                <div className="products-popup-items">
                                    {popupStatus ? <PopupModal /> : <></>}
                                </div>
                            </div> */}
                            <li><a href="/products/">Products</a></li>
                        </div>
                        {/* <NavLink to="/pawprints"><li onClick={() => handleClick()}>Pawmily</li></NavLink> */}
                        <NavLink to="/nutrition"><li onClick={() => handleClick()}>Nutrition</li></NavLink>
                        <NavLink to="/pupstar"><li onClick={() => handleClick()}>Pup Star</li></NavLink>
                        <NavLink to="/dog-digest"><li onClick={() => handleClick()}>Dog Digest</li></NavLink>
                    </ul>
                </div>
                <div className="burger-icon-container show-in-mobile">
                    <motion.i 
                        className={sidebar ? "fa fa-xmark" : "fa fa-bars"} 
                        // animate={{faIcon}}
                        onClick={() => handleSidebar()}
                    ></motion.i>
                </div>
            </>
        )
    }



    return (
        <>
            {/* <DistributorModal 
                 modalStatus={modalStatus}
                 handleClose={handleClosemodal}
            /> */}
            <div className="navbar-list">
                <Navbar/>
            </div>
            <NavbarMobile/>
        </>
    )
}