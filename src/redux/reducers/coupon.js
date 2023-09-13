import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    query: null,
    count: {},
    list: [],
    sorting: {
        column: "id",
        order: "ASC"
    },
    filters: {},
    item: {
        selected: {},
        form: {
            id: { error: null, value: null },
            coupon: { error: null, value: null },
            desription: { error: null, value: null },
            discount: { error: null, value: null },
            discountType: { error: null, value: null },
            startDate: { error: null, value: null },
            endDate: { error: null, value: null },
            limit: { error: null, value: [] },
            limitType: { error: null, value: [] }
        }
    }
};

const coupon = createSlice({
    name: 'coupon',
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
        },
        updateFeedingGuide: (state, action) => {
            return {
                ...state,
                item: {
                    ...state.item,
                    feedingGuide: action.payload
                }
            }
        },
        updateGuaranteedAnalysis: (state, action) => {
            return {
                ...state,
                item: {
                    ...state.item,
                    guaranteedAnalysis: action.payload
                }
            }
        }
    }
});

export default coupon;