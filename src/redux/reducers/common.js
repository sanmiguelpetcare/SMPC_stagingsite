import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: false
};

const common = createSlice({
    name: 'common',
    initialState: initialState,
    reducers: {
        updateLoading: (state, action) => {
            return {
                ...state,
                isLoading: action.payload
            }
        }
    }
});

export default common;