import React from "react"
import productList from "../../../productList"
import { useParams } from "react-router";
import StepsAccordion from "../StepsAccordion";

export default function CustomSecondStepContent(props) {

    const [specificSubAccordion, setSpecificSubAccordion] = React.useState()
    // const [specificAccordion, setSpecificAccordion] = React.useState()

    const handleAccordion = (data) => {
        setSpecificSubAccordion(data)
    }

    const productFilter = productList.filter(item => item.productWeight === "1.3kg" || "5kg" || "10kg" || "20kg")

    const productItem = productFilter.map(item => {
        return (
            <>  
                <div className="specific-product-container">
                    <div className="product-image-container">
                        <img src={item.productImage} />
                    </div>
                    <div className="product-name-quantity-container">
                        <div className="product-name-container">
                            <p>{item.productName}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }) 

    const productWithsubHeading = () => {
        return (
            <>
                <div className="product-with-subheading-container">
                    <div className="monthly-subheading-container">
                        <p>Minimum purchase requirements apply. Buy at least 20kg of Nutri Chunks Premium Dog Food and one ProtekTODO pack every month.</p>
                    </div>
                    <div className="product-item-container">
                        {productItem}
                    </div>
                </div>
            </>
        )
    }

    const productListContainer = (monthButtonTitle, index) => {
        return (
            <>  
                <div onClick={() => handleAccordion(index)} className="month-button-container">
                    <h6>{monthButtonTitle}</h6>
                </div>
                <div className={specificSubAccordion === index ? `product-list-container active` : `product-list-container inactive`}>
                    <StepsAccordion 
                        content={productWithsubHeading()}
                        accordionID={index}
                        accordionClicked={specificSubAccordion}
                    />
                </div>
            </>
        )
    }

    const loopProductListContainer = () => {
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

        let arr = [];

        if(props.param === "trio") {
            for(let i = 0; i < 3; i++) {
                arr = [...arr, productListContainer(monthButtonTitle[i], i)];
            }
        } else if(props.param === "plus") {
            for(let i = 0; i < 6; i++){
                arr = [...arr, productListContainer(monthButtonTitle[i], i)];
            }
        } 

        return arr;
    }
    
    
    return(
        <>
            <div className="custom-container">
                <div className="step-subheading">
                    <p>CUSTOM</p>
                </div>
                {loopProductListContainer()}
                <div className="next-button">
                    <button onClick={props.NextButton}>Next</button>
                </div> 
            </div>
        </>
    )
}