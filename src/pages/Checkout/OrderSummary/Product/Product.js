import React from "react";
import numeral from "numeral";
import ProductImage from "common/Product/ProductImage";

const Product = props => {
    const item = props.item;

    return (
        <div className="product-list-content-container">
            <div className="product-image-name-container">
                <div className="product-image-container">
                    <ProductImage product={ item.product } />
                </div>
                <div className="product-name-container">
                    <p>{ item.product.name }</p>                   
                </div>
            </div>
           <div className="quantity-price-container">
                <div className="quantity-content-container">
                    <p>Qty: { item.qty }</p>
                </div>
                <div className="price-content-container">
                    <p>₱{ numeral( item.product.price * parseInt( item.qty ) ).format( "0,0.00" ) }</p>
                </div>
           </div>
        </div>
    );
};

export default Product;