import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isUpdated: false,
    cart: [],
    subtotal: 0,
    coupon: null
};

const cart = createSlice({
    name: 'fe_cart',
    initialState: initialState,
    reducers: {
        updateStatus: (state, action) => {
            return {
                ...state,
                isUpdated: action.payload
            }  
        },
        updateCart: (state, action) => {
            let subtotal = 0;

            for(const item of action.payload || []) {
                subtotal = subtotal + ( item.product.price * item.qty );    
            }

            return {
                ...state,
                cart: action.payload,
                subtotal: subtotal
            }
        },
        updateSubtotal: (state, action) => {
            return {
                ...state,
                subtotal: action.payload
            }
        }
    }
});

export default cart;