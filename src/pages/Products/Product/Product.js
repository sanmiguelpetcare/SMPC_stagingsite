import React from "react";
import { useParams } from "react-router-dom";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";
import numeral from "numeral";

import AddCart from "./AddCart/AddCart";
import DistributorModal from "../DistributorModal";
import ProductImage from "common/Product/ProductImage";

import Upsell from "./Upsell"

const Product = props => {
    const { id } = useParams();
    const product = props.fe_product_state.item.selected || {};
    const premiumItem = props.fe_product_state.list.filter(item => item.category == "Premium")  

    const prodInfo = React.useRef()
    const ingr = React.useRef()
    const fGuide =  React.useRef()
    const gAnalysis = React.useRef()

    const [activeInfo, setActiveInfo] = React.useState();

    React.useEffect(() => {
        onFetch();
        setActiveInfo("prodInfo")
    }, []);

    const onFetch = () => {
        props.common_actions.updateLoading(true);

        Request().get(`/product/${ id }`)
            .then(response => {
                props.fe_product_actions.updateSelected( response.data );
                props.common_actions.updateLoading(false);
            });
    };

    console.log("product", product)

    return (
        <>
            {/* <DistributorModal /> */}
            <div className="single-products-main-container">
                <div className="container">
                    <div className="single-products-content-container">
                        <div className="single-products-left-content">
                           <div className="single-products-image-container">
                                <ProductImage product={ product } />
                           </div>
                        </div>
                        <div className="single-products-right-content">
                            <div className="single-products-name">
                                <h1>{product.name}</h1>
                            </div>
                            <div className="single-products-price">
                                <h6>₱{numeral( product.price ).format( "0,0.00" )}</h6>
                            </div>
                            <div className="add-to-cart-container">
                                <AddCart item={ product } />
                            </div>
                            <div className="single-product-accordion">
                                <div className="single-products-info information-container">
                                    <div onClick={() => setActiveInfo("prodInfo")} className="title-container">
                                        <h6>Products Info</h6>
                                    </div>
                                    <div 
                                        className={`${activeInfo == "prodInfo" ? `information-parent-container active` : `information-parent-container inactive`}`}
                                        style={{height: activeInfo == "prodInfo" ? prodInfo.current.clientHeight : 0}}
                                    >
                                        <div ref={prodInfo} className="information-content-container">
                                            <div dangerouslySetInnerHTML={{__html: product.description || "N/A" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-products-ingridients information-container">
                                    <div onClick={() => setActiveInfo("ingr")} className="title-container">
                                        <h6>Ingredients</h6>
                                    </div>
                                    <div 
                                        className={`${activeInfo == "ingr" ? `information-parent-container active` : `information-parent-container inactive`}`}
                                        style={{height: activeInfo == "ingr" ? ingr.current.clientHeight : 0}}
                                    >
                                        <div ref={ingr} className="information-content-container">
                                            <div dangerouslySetInnerHTML={{__html: product.ingredients || "N/A" }} />
                                        </div>
                                    </div>
                                </div>
                                { (product.feedingGuide || []).length > 0 && (
                                    <div className="single-products-feeding-guide information-container">
                                        <div onClick={() => setActiveInfo("fGuide")} className="title-container">
                                            <h6>Feeding Guide</h6>
                                        </div>
                                        <div 
                                            className={`${activeInfo == "fGuide" ? `information-parent-container active` : `information-parent-container inactive`}`}
                                            style={{height: activeInfo == "fGuide" ? fGuide.current.clientHeight : 0}}
                                        >
                                            <div ref={fGuide} className="information-content-container">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Weight of Dog</th>
                                                            <th>Amount of Food</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {(product.feedingGuide || []).map(item => {
                                                            return (
                                                                <tr>
                                                                    <td>{ item.weightOfDog }</td>
                                                                    <td>{ item.amountOfFood }</td>
                                                                </tr>
                                                            )
                                                        })} 
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div> 
                                ) }
                                { (product.guaranteedAnalysis || []).length > 0 && (
                                    <div className="single-products-guaranteed-analysis information-container">
                                        <div onClick={() => setActiveInfo("gAnalysis")} className="title-container">
                                            <h6>Guaranteed Analysis</h6>
                                        </div>
                                        <div 
                                            className={`${activeInfo == "gAnalysis" ? `information-parent-container active` : `information-parent-container inactive`}`}
                                            style={{height: activeInfo == "gAnalysis" ? gAnalysis.current.clientHeight : 0}}
                                        >
                                            <div ref={gAnalysis} className="information-content-container">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Nutrients</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {(product.guaranteedAnalysis || []).map(item => {
                                                            return (
                                                                <tr>
                                                                    <td>{ item.nutrients }</td>
                                                                    <td>{ item.amount }</td>
                                                                </tr>
                                                            )
                                                        })} 
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                ) }
                            </div>
                        </div>
                    </div>
                    <div className="upsell-main-container">
                        {/* { premiumItem.map( product => <Upsell item={ product }/>) } */}
                        {/* <Upsell /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReduxConnect(Product, ["fe_product"]);