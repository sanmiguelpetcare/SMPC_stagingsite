import React from "react"
import { Link } from "react-router-dom";
import numeral from "numeral";
import ProductImage from "common/Product/ProductImage";

import { ReduxConnect } from "helpers/HOC";

const ListItem = (props) => {
    const onClick = () => {
        props.fe_product_actions.updateSelected( props.item );
    };

    return (
        <>
            <div className="single-product-container">
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

export default ReduxConnect(ListItem, ["fe_product"]);