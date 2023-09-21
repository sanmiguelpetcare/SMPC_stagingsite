import React from "react"
import productList from "../../../productList"

export default function SecondStepContent(props) {

    const [productToanimate, setProductToAnimate] = React.useState()

    const handleProducttoAnimate = (itemClicked) => {
        productList.find((item, index) => index === itemClicked)  
        setProductToAnimate()
        console.log(itemClicked)
    }

    const productFilter = productList.filter(item => item.productWeight === "1.3kg" || "5kg" || "10kg" || "20kg")
    
    const productItem = productFilter.map(item => {
        return (
            <>
                <div onClick={() => handleProducttoAnimate(item.productImage)} className="specific-product-container">
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

    

    return(
        <>
             <div className="regular-container">
                <div className="step-subheading">
                    <p>Pick your regular favorites and we'll ship them to you. Minimum purchase requirements apply. Buy at least 20kg of Nutri Chunks Premium dog food and one ProtekTODO pack every month. </p>
                </div>
                <div className="product-list-container">
                    {productItem}
                </div>
                <div className="next-button">
                    <button onClick={props.NextButton}>Next</button>
                </div> 
             </div>
        </>
    )
}