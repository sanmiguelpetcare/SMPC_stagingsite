import {createSlice} from '@reduxjs/toolkit';

const zipEntry = {
    town: null,
    zip: null
};
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
        zips: [zipEntry],
        zipEntry,
        form: {
            id: { error: null, value: null },
            name: { error: null, value: null },
            email: { error: null, value: null },
            region: { error: null, value: null },
            city: { error: null, value: null },
            deliveryFee: { error: null, value: null },
            freeDeliveryAmount: { error: null, value: null },
            zipField: { error: null, value: null },
            zip: { error: null, value: [] }
        }
    }
};

const distributor = createSlice({
    name: 'distributor',
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
                    zips: initialState.item.zips,
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
        updateZips: (state, action) => {
            return {
                ...state,
                item: {
                    ...state.item,
                    zips: action.payload
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

export default distributor;