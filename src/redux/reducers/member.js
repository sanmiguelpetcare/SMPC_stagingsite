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
        weight: null
    },
    item: {
        selected: {},
        form: {
            id: { error: null, value: null },
            firstName: { error: null, value: null },
            lastName: { error: null, value: null },
            email: { error: null, value: null },
            phone: { error: null, value: null },
            address1: { error: null, value: null },
            address2: { error: null, value: null },
            barangay: { error: null, value: null },
            city: { error: null, value: null },
            province: { error: null, value: null },
            zip: { error: null, value: null }
        }
    }
};

const member = createSlice({
    name: 'member',
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
        },
        updateField: (state, action) => {
            let update = {...state.item.form};

            for(const i of [...action.payload]) {
                if(i.key) {
                    update = {
                        ...update,
                        [i.field]: {
                            ...update[i.field],
                            [i.key]: i.value
                        }
                    }
                } else {
                    update = {
                        ...update,
                        [i.field]: i.value
                    }
                }
            }

            return {
                ...state,
                item: {
                    ...state.item,
                    form: {
                        ...state.item.form,
                        ...update
                    }
                }
            }
        }
    }
});

export default member;