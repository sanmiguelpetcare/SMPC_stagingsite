import React from "react";
import { ReduxConnect } from "helpers/HOC";
import Product from "./Product/Product";

const Products = props => {
    return (
        <div className="product-items-container">
            { props.fe_subscription_state.products.filter(item => item.weight == "10 kg" || item.weight == "20 kg").map( product => <Product product={ product } month={ props.month } /> ) }
        </div>
    )
}

export default ReduxConnect( Products, ["fe_subscription"] );