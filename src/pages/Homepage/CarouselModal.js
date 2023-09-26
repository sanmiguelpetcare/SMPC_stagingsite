import React from "react"
import CoatshineD from "../../assets/media/20kg/coatshine.png"
import HiProteinD from "../../assets/media/20kg/hi-protein.png"
import MaintenanceD from "../../assets/media/20kg/maintenance.png"
import ObeefD from "../../assets/media/20kg/o-beef.png"
import OlambD from "../../assets/media/20kg/o-lamb.png"
import CarouselModalDetails from "./CarouselModalDetailsComponent"
import { Link } from "react-router-dom"
import OrangeShape from "../../assets/media/new-home-page/Product_shape.svg"
import MLamb from "../../assets/media/10kg/maintenance-lamb.png"

export default function CarouselModal(props) {
    // console.log("modalStatus", modalStatus)


    const imageArray = [
        HiProteinD,
        CoatshineD,
        MaintenanceD,
        ObeefD,
        OlambD,
        MLamb,
        HiProteinD,
        CoatshineD,
        MaintenanceD,
        ObeefD,
        OlambD,
        MLamb,
    ]

    
    if(props.modalStatus) {
        return (
            <>
                <div onClick={props.handleClose} className="carousel-overlay-styles"/>
                <div className="modal-container">
                    <p className="material-icon">
                        <i className="material-icons" onClick={props.handleClose}>close</i>
                    </p>
                    {/* <Login handleClose={ handleClose } /> */}
                    <div className="modal-content-container">
                        <div className="product-image-container">
                            <div className="product-image">
                                <img src={imageArray[props.selectedIndex]} />
                                <img src={OrangeShape} alt=""/>
                            </div>
                        </div>
                        <div className="button-and-details">
                            <div className="product-details">
                                {
                                    props.selectedIndex == 0 || props.selectedIndex == 6 ?
                                        <CarouselModalDetails 
                                            index1={0}
                                            index2={1}
                                            index3={2}
                                            index4={3}
                                        /> :
                                    props.selectedIndex == 1 || props.selectedIndex == 7 ?
                                        <CarouselModalDetails 
                                            index1={4}
                                            index2={5}
                                            index3={6}
                                            index4={7}
                                        /> :
                                    props.selectedIndex == 2 || props.selectedIndex == 8 ?
                                        <CarouselModalDetails 
                                            index1={16}
                                            index2={17}
                                            index3={18}
                                            index4={19}
                                        /> :
                                    props.selectedIndex == 3 || props.selectedIndex == 9 ?
                                        <CarouselModalDetails 
                                            index1={12}
                                            index2={13}
                                            index3={14}
                                            index4={15}
                                        /> :
                                    props.selectedIndex == 4 || props.selectedIndex == 10 ?
                                        <CarouselModalDetails 
                                            index1={8}
                                            index2={9}
                                            index3={10}
                                            index4={11}
                                        /> :
                                    // props.selectedIndex == 5 || props.selectedIndex == 11 ?
                                    //     <CarouselModalDetails 
                                    //         index1={26}
                                    //     /> :
                                    <></>
                                }
                            </div>
                            <div className="cta">
                                <Link to="/products">VIEW ALL PRODUCTS</Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </>
        )
    } else {
        return (
            <></>
        )
    }
}