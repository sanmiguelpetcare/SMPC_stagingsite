import Request from "config/API";

export const fetchCartItems = ( userState, cartActions ) => {
    if( userState.loggedUser ) {
        Request().get( `/cart/user/${ userState.loggedUser.id }` )
            .then( response => {
                
                cartActions.updateCart(response.data.result);
            });
    } else {
        cartActions.updateCart(localStorage.getItem("cart") ? JSON.parse( localStorage.getItem("cart") ) : []);
    }
}