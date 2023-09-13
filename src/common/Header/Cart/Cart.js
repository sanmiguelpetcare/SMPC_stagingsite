import React, { useEffect } from "react";
import { ReduxConnect } from "helpers/HOC";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Request from "config/API";

const Cart = props => {
    useEffect(() => {
        if( props.fe_user_state.loggedUser ) {
            props.common_actions.updateLoading(true);

            Request().get( `/cart/user/${ props.fe_user_state.loggedUser.id }` )
                .then( response => {
                    
                    props.fe_cart_actions.updateCart(response.data.result);
                    props.common_actions.updateLoading(false);
                });
        } else {
            props.fe_cart_actions.updateCart(localStorage.getItem("cart") ? JSON.parse( localStorage.getItem("cart") ) : []);
        }
    }, [props.fe_user_state.loggedUser, props.fe_cart_state.isUpdated]);

    const cartQuantity = () => {
        let qty = 0;

        for( const cart of props.fe_cart_state.cart ) {
            qty += parseInt( cart.qty );
        }

        return qty;
    };

    return (
        <div className="cart-icon-container">
            <Link to="/cart">
                <ShoppingCartOutlinedIcon/>
                <span>{ cartQuantity() }</span>
            </Link>
        </div>
    );
};

export default ReduxConnect(Cart, ["fe_user", "fe_cart"]);