import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    deliveryOption: null,
    selectedWeek: null,
    toggle: {
        id: null,
        contentHeight: null
    },
    regularSubscription: {
        selected: {},
        total: 0
    },
    customSubscription: {
        activeMonth: null,
        selected: {},
        total: 0
    },
    includedInSubscription: [],
    paymentMethod: null,
    cart: {},
    item: {
        form: {
            shippingSameBilling: true,
            shipping: {
                email: { error: null, value: null },
                firstName: { error: null, value: null },
                lastName: { error: null, value: null },
                address1: { error: null, value: null },
                address2: { error: null, value: null },
                brgy: { error: null, value: null },
                city: { error: null, value: null },
                province: { error: null, value: null },
                country: { error: null, value: "Philippines" },
                region: { error: null, value: null },
                zip: { error: null, value: null },
                phone: { error: null, value: null },
                paymentMethd: { error: null, value: "Cash on Delivery" }
            },
            billing: {
                email: { error: null, value: null },
                firstName: { error: null, value: null },
                lastName: { error: null, value: null },
                address1: { error: null, value: null },
                address2: { error: null, value: null },
                brgy: { error: null, value: null },
                city: { error: null, value: null },
                province: { error: null, value: null },
                country: { error: null, value: null },
                region: { error: null, value: null },
                zip: { error: null, value: null },
                phone: { error: null, value: null }
            }
        }
    }
};

const subscription = createSlice({
    name: 'fe_subscription',
    initialState: initialState,
    reducers: {
        // updateSubscriptionType: (state, action) => {
        //     return {
        //         ...state,
        //         subscriptionType: action.payload
        //     }
        // },
        updateIncludedInSubscription: (state, action) => {
            return {
                ...state,
                includedInSubscription: action.payload
            }
        },
        updateCart: (state, action) => {
            return {
                ...state,
                cart: action.payload
            }
        },
        updateProducts: (state, action) => {
            return {
                ...state,
                products: action.payload
            }
        },
        updateActiveToggle: (state, action) => {
            return {
                ...state,
                toggle: {
                    ...state.toggle,
                    id: action.payload.id,
                    contentHeight: action.payload.contentHeight
                }
            }
        },
        updateDeliveryOption: (state, action) => {
            return {
                ...state,
                deliveryOption: action.payload
            }
        },
        updateSelectedWeek: (state, action) => {
            return {
                ...state,
                selectedWeek: action.payload
            }
        },
        updateRegularQtys: (state, action) => {
            return {
                ...state,
                regularSubscription: {
                    ...state.regularSubscription,
                    selected: {
                        ...state.regularSubscription.selected,
                        [action.payload.product.id]: action.payload.product
                    },
                    total: action.payload.total
                }
            }
        },
        updateCustomActiveMonth: (state, action) => {
            return {
                ...state,
                customSubscription: {
                    ...state.customSubscription,
                    activeMonth: action.payload
                }
            }
        },
        updateCustomQtys: (state, action) => {
            return {
                ...state,
                customSubscription: {
                    ...state.customSubscription,
                    selected: {
                        ...state.customSubscription.selected,
                        [action.payload.month]: {
                            ...state.customSubscription.selected[action.payload.month],
                            total: action.payload.monthlyTotal,
                            products: {
                                ...(state.customSubscription.selected[action.payload.month] || {}).products,
                                [action.payload.product.id]: action.payload.product
                            }
                        }
                    },
                    total: action.payload.total
                }
            }
        },
        updateSameShippingBilling: (state, action) => {
            return {
                ...state,
                item: {
                    ...state.item,
                    form: {
                        ...state.item.form,
                        shippingSameBilling: action.payload
                    }
                }
            }
        },
        updateShippingField: (state, action) => {
            let update = {...state.item.form.shipping};
    
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
                        shipping: {
                            ...state.item.form.shipping,
                            ...update
                        }
                    }
                }
            }
        },
        updateBillingField: (state, action) => {
            let update = {...state.item.form.billing};
    
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
                        billing: {
                            ...state.item.form.billing,
                            ...update
                        }
                    }
                }
            }
        },
        updatePaymentMethod: (state, action) => {
            return {
                ...state,
                paymentMethod: action.payload
            }
        }
    }
});

export default subscription;