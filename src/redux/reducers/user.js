import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loggedUser: null
};

const user = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setLoggedUser: (state, action) => {
            return {
                ...state,
                loggedUser: action.payload
            }
        }
    }
});

export default user;