import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loggedUser: null,
    subscription: null,
    orders: []
};

const user = createSlice({
    name: 'fe_user',
    initialState: initialState,
    reducers: {
        setLoggedUser: (state, action) => {
            return {
                ...state,
                loggedUser: action.payload
            }
        },
        updateSubscription: (state, action) => {
            return {
                ...state,
                subscription: action.payload
            }
        },
        updateOrders: (state, action) => {
            return {
                ...state,
                orders: action.payload
            }
        }
    }
});

export default user;