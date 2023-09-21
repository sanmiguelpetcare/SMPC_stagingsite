import React from "react"
import { Link } from "react-router-dom";
import { ReduxConnect } from "helpers/HOC";
import numeral from "numeral";
import ProductImage from "common/Product/ProductImage";

const Upsell = (props) => {

    const onClick = () => {
        props.fe_product_actions.updateSelected( props.item );
    };


//    console.log("premiumItem", props.fe_product_state.list)

   const premiumItem = props.fe_product_state.list.filter(item => item.category === "Premium")

   console.log("premiumItem", premiumItem) 

    return (
        <>
            <div className="upsell">
                <Link to={`/products/${props.item.id}`} onClick={ onClick }>
                    <div className="product-image-container">
                        <ProductImage product={ props.item } />
                    </div>
                    <div className="product-name-container">
                        <p className="product-name">{props.item.name}</p>
                    </div>
                    <div className="product-price-container">
                        <p className="product-price">₱{ numeral( props.item.price ).format( "0,0.00" ) }</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ReduxConnect(Upsell, ["fe_product"]);