import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    query: null,
    count: {},
    list: [],
    sorting: {
        column: "id",
        order: "ASC"
    },
    filters: {
        category: null,
        weight: null,
        isInStock: null
    },
    item: {
        selected: {}
    }
};

const order = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        setQuery: (state, action) => {
            return {
                ...state,
                query: action.payload
            }
        },
        resetItem: (state) => {
            return {
                ...state,
                item: {
                    ...state.item,
                    payscales: initialState.item.payscales,
                    selected: initialState.item.selected,
                    form: initialState.item.form
                }
            }
        },
        updateList: (state, action) => {
            return {
                ...state,
                list: action.payload.result,
                count: action.payload.count
            }
        },
        updateSelected: (state, action) => {
            return {
                ...state,
                item: {
                    ...state.item,
                    selected: action.payload
                }
            }
        },
        updateSorting: (state, action) => {
            return {
                ...state,
                sorting: action.payload
            }
        },
        updateFilter: (state, action) => {
            let update = {...state.filters};

            for(const i of [...action.payload]) {
                update = {
                    ...update,
                    [i.field]: i.value
                }
            }

            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...update
                }
            }
        },
        resetFilter: (state) => {
            return {
                ...state,
                filters: initialState.filters
            }
        }
    }
});

export default order;