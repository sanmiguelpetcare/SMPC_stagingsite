import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    distributor: null
};

const distributioner = createSlice({
    name: 'fe_distributioner',
    initialState: initialState,
    reducers: {
        setDistributorLocation: (state, action) => {
            return {
                distributor: action.payload
            }
        },
    }
});

export default distributioner;