import React from "react"
import ProductList from "../../productList"


export default function CarouselMOdalDetails(props) {

    const [productWeightselected, setProductWeight] = React.useState("20")

    const handleWeight = (weight) => {
        setProductWeight(weight)
    }

    const initialPrice = ProductList[props.index4].price

    return (
        <>
            <div className="product-name">
                <h2>{ ProductList[props.index1].name }</h2>
            </div>
            <div className="product-price">
                <h4>
                    { 
                        productWeightselected == "1.3" ? "₱" + ProductList[props.index1].price : 
                        productWeightselected == "5" ? "₱" + ProductList[props.index2].price :
                        productWeightselected == "10" ? "₱" + ProductList[props.index3].price :
                        productWeightselected == "20" ? "₱" + ProductList[props.index4].price :
                        ""
                    }
                </h4>
            </div>
            {/* <div className="product-desc">
                <p>{ ProductList[props.index1].description }</p>
            </div> */}
            <div className="product-weight-container">
                <p className="size-title">Sizes Available</p>
                <div className="product-weight">
                    <p onClick={() => handleWeight("1.3")} className={productWeightselected == "1.3" ? "selected" : ""}>1.3kg</p>
                    <p onClick={() => handleWeight("5")} className={productWeightselected == "5" ? "selected" : ""}>5kg</p>
                    <p onClick={() => handleWeight("10")} className={productWeightselected == "10" ? "selected" : ""}>10kg</p>
                    <p onClick={() => handleWeight("20")} className={productWeightselected == "20" ? "selected" : ""}>20kg</p>
                </div>
            </div>
        </>
    )
}