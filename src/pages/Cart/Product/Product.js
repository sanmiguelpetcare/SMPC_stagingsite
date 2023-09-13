import React from "react";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";
import numeral from "numeral";
import { NavLink } from "react-router-dom";
import ProductImage from "common/Product/ProductImage"

const Product = props => {
    const item = props.item;

    const onChange = (e) => {
        const qty = e.target.value < 1 ? 1 : e.target.value;

        if( props.fe_user_state.loggedUser ) {
            const data = {
                qty,
                productID: item.product.id,
                userID: props.fe_user_state.loggedUser.id
            };
            
            props.common_actions.updateLoading(true);

            Request().put(`/cart/${ item.id }`, data)
                .then( response => {
                    props.fe_cart_actions.updateCart(response.data.result);
                    props.common_actions.updateLoading(false);
                });
        } else {
            let cart = localStorage.getItem("cart");
            cart = cart ? JSON.parse(cart) : [];

            for( const c of cart ) {
                if( c.product.id === item.product.id ) {
                    cart = cart.map( ct => {
                        if( c.product.id === ct.product.id ) {
                            return {
                                ...ct,
                                qty: parseInt( qty )
                            }
                        }

                        return ct;
                    });
                }
            }

            localStorage.setItem("cart", JSON.stringify(cart));
        }
        
        
        props.fe_cart_actions.updateCart( props.fe_cart_state.cart.map( (c, index) => {
            if( index === props.index ) {
                return {
                    ...c,
                    qty: qty
                }
            }

            return c;
        }));
    };

    const onDelete = (e) => {
        const qty = e.target.value;

        if( props.fe_user_state.loggedUser ) {
            props.common_actions.updateLoading(true);

            Request().delete(`/cart/${ item.id }`)
                .then( response => {
                    props.fe_cart_actions.updateCart(response.data.result);
                    props.common_actions.updateLoading(false);
                });
        } else {
            let cart = localStorage.getItem("cart");
            cart = cart ? JSON.parse(cart) : [];

            localStorage.setItem("cart", JSON.stringify(cart.filter( (c, i) => i !== props.index )));
        }
        
        props.fe_cart_actions.updateCart( props.fe_cart_state.cart.filter( (c, i) => i !== props.index ));
    };

    return (
        <div className="product-list-container">
           <div className="image-name-qty-price-container">
                <div className="product-image-container">
                    <div className="product-list-image-container">
                        <ProductImage product={ item.product } />
                    </div>
                </div>
                <div className="quantity-price-name-container">
                    <div className="product-name-price-container">
                        <p>
                            <NavLink to={`/products/${ item.product.id }`}>{ item.product.name }</NavLink>
                        </p>
                    </div>  
                    <div className="product-quantity-container">
                        <input type="number" value={ item.qty } onChange={ onChange } />
                    </div>
                    <div className="product-price-container">
                        <p>₱{ numeral( item.product.price * parseInt( item.qty ) ).format( "0,0.00" ) }</p>
                    </div>
                </div>
           </div>
            <div className="product-romve-container">
                <span className="material-icons" onClick={ onDelete }>close</span>
            </div>
        </div>
    );
}

export default ReduxConnect( Product, ["fe_user", "fe_cart"] );