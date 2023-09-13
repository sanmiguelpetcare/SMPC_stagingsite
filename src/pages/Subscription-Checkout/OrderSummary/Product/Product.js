import React from "react";
import numeral from "numeral";
import ProductImage from "common/Product/ProductImage";

const Product = props => {
    const item = props.item;

    return (
        <div className="product-list-content-container">
            <div className="product-image-container">
                <ProductImage product={ item.product } />
                <p>{ item.product.name }</p>    
            </div>
            <div className="quantity-content-container">
                <p>Qty: { item.qty }</p>
            </div>
            <div className="price-content-container">
                <p>₱{ numeral( item.product.price * parseInt( item.qty ) ).format( "0,0.00" ) }</p>
            </div>
        </div>
    );
};

export default Product;