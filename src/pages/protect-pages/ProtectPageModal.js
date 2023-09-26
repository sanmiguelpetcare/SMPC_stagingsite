import { CollectionsOutlined, ConstructionOutlined, QrCodeScannerOutlined } from "@mui/icons-material"
import React from "react"

export default function ProtectPageModal(props) {

    // const [customTotalprice, setCustomTotalPrice] = React.useState([])

     //regular

    const selectedItems = props.regularContent
    const productQty = props.regularContentQty
    // console.log("customPricepermonth", props.customPricepermonth)
    // console.log("totalPrice", props.totalPrice)

    const selectedProductList = selectedItems.map(item => {
        return (
            <>
                <div className="regular selected-product-content">
                    <div className="image-container">
                        <img style={{width: 50}}  src={item.image}/>
                    </div>
                    <div className="product-name-container">
                        <p>{item.name}</p>
                    </div>
                    <div className="product-quantity-container">
                        <p>{productQty[item.id]}</p>
                    </div>
                    <div className="product-price-container">
                        {productQty[item.id] * item.price}
                    </div>
                </div>
            </>
        )
    })


    //custom

    const ProductSelectedDisplay = (props) => {
        
        
        const selectedproductsMapping = () => props.productContent.map(item => {
            return (
                <>
                    <div className="custom selected-product-content">
                        <div className="image-container">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="product-name-container">
                            <p>{item.name}</p>
                        </div>
                        <div className="product-quantity-container">
                            <p>{props.productQtyContent[props.monthIndex][item.id]}</p>
                        </div>
                        <div className="product-price-container">
                            <p>{props.productQtyContent[props.monthIndex][item.id] * item.price}</p>
                        </div>
                    </div>
                </>
            )
        })

        const monthDisplay = () => {
            if(props.productContent == 0){
                return <></>
            } else {
                return (
                    <h2>{props.monthTitle}</h2>
                )
            }
        }

        return (
            <>
                <div className="selected-product-permonth-container">
                    <div className="selected-product-content-container">
                        <div className="month-title-container">
                           {monthDisplay()}
                           {props.totalPriceperMonth}
                        </div>
                        <div className="product-selected-permonth">
                            {selectedproductsMapping()}
                        </div>
                    </div>
                </div> 
            </>
        )
    }

    const selectedMonthMap = () => {

        let selectedMonthIndex = Object.keys(props.customContent)

        const monthButtonTitle = [
            "1st Month",
            "2nd Month",
            "3rd Month",
            "4th Month",
            "5th Month",
            "6th Month",
            "7th Month",
            "8th Month",
            "9th Month",
            "10th Month",
            "11th Month",
            "12th Month"
        ]

        let arr=[]

        for(let i = 0; i < selectedMonthIndex.length; i++) {
            arr = [
                ...arr,
                <ProductSelectedDisplay 
                    monthTitle={monthButtonTitle[i]}
                    productContent={props.customContent[i]}
                    customContent={props.customContent}
                    productQtyContent={props.customContentQty}
                    monthIndex={i}
                    totalPriceperMonth={props.customPricepermonth[i]}
                />
            ]
        }

        return arr;
    }

    if(props.modalStatus) {
        return(
            <>  
                <div onClick={props.handleClose} className="overlay-styles"/>      
                <div className="protect-page-modal-container">
                    <div className="protect-page-modal-heading">
                        <div className="close-button">
                            <h2>{`X`}</h2>
                        </div>
                        <div className="heading-container">
                            <h4>Order Summary</h4>
                            <p>{props.totalPrice}</p>
                        </div>
                    </div>
                    <div className="protect-page-modal-content">
                            <div className="modal-subtitle-content">
                                <div className="image-container">
                                    <p>Product Image</p>
                                </div>
                                <div className="product-name-container">
                                    <p>Product Name</p>
                                </div>
                                <div className="product-quantity-container">
                                    <p>Quantity</p>
                                </div>
                                <div className="product-price-container">
                                    <p>Price</p>
                                </div>
                            </div>
                            {selectedProductList}
                            {selectedMonthMap()}
                    </div>
                </div>
            </>
        )
    } return <></>
}