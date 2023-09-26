import React from "react";
import numeral from "numeral";
import { ReduxConnect } from "helpers/HOC";
import ProductSelected from "../../../../../../../../assets/media/new-home-page/Product_shape.svg"
import ProductImage from "common/Product/ProductImage";

const Product = (props) => {
    const product = props.product;
    const selected = props.fe_subscription_state.regularSubscription.selected;
    const total = props.fe_subscription_state.regularSubscription.total;
    const productQty = (selected[product.id] || {}).qty || 0;

    const onSelect = () => {
        console.log("onselect has been triggered")

        if( productQty == 0 ) {
            props.fe_subscription_actions.updateRegularQtys({
                product: { ...product, qty: 1 },
                total: total + ( product.price )
            });
        } else {
            props.fe_subscription_actions.updateRegularQtys({
                product: { ...product, qty: 0 },
                total: total - ( product.price )
            });
        }
    };

    const onAdd = () => {
        props.fe_subscription_actions.updateRegularQtys({
            product: { ...product, qty: productQty + 1 },
            total: total + parseFloat( product.price )
        });
    }

    const onRemove = () => {
        if( productQty > 0 ) {
            props.fe_subscription_actions.updateRegularQtys({
                product: { ...product, qty: productQty - 1 },
                total: total - parseFloat( product.price )
            });
        }
    }

    return (
        <div className="product-item-container">  
            <div onClick={ onSelect } className={productQty > 0 ? `specific-product-container bordered` : `specific-product-container only-hover`}>
                <div className="specific-product-content">
                    <div className="product-image-container">
                        <img className="product-selected" src={ProductSelected} alt />
                        <ProductImage product={ product } />
                    </div>
                    <div className="product-name-container">
                        <p>{ product.name }</p>
                        <p className="weight-price"><span>Weight: { product.weight }</span> <span>Price: ₱{ numeral( product.price ).format( "0,0.00" ) }</span></p>
                    </div>
                </div>
                {/* <div className="product-input-container">
                    <div onClick={ onAdd } className="add-button">
                        <p>+</p>
                    </div>
                    <div className="quantity">
                        <h6>{ productQty }</h6>
                    </div>
                    <div onClick={ onRemove }  className="remove-button">
                        <p>-</p>
                    </div>
                </div> */}
            </div>
            <div className="product-input-container">
                <div onClick={ onAdd } className="add-button">
                    <p>+</p>
                </div>
                <div className="quantity">
                    <h6>{ productQty }</h6>
                </div>
                <div onClick={ onRemove }  className="remove-button">
                    <p>-</p>
                </div>
            </div>
        </div>
    )
}

export default ReduxConnect( Product, ["fe_subscription"] );