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
        selected: {},
        feedingGuide: [{weightOfDog: null, amountOfFood: null}],
        guaranteedAnalysis: [{nutrients: null, amount: null}],
        form: {
            id: { error: null, value: null },
            name: { error: null, value: null },
            category: { error: null, value: null },
            weight: { error: null, value: null },
            price: { error: null, value: null },
            discount: { error: null, value: 0 },
            discountType: { error: null, value: "percent" },
            isInStock: { error: null, value: true },
            isIncludedInSubscription: { error: null, value: false },
            includedInSubscriptionQty: { error: null, value: 1 },
            description: { error: null, value: null },
            ingredients: { error: null, value: null },
            images: { error: null, value: [] }
        }
    }
};

const product = createSlice({
    name: 'product',
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
                    feedingGuide: initialState.item.feedingGuide,
                    guaranteedAnalysis: initialState.item.guaranteedAnalysis,
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

export default product;