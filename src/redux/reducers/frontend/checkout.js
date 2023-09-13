import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    item: {
        distributor: null,
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
                phone: { error: null, value: null },
                paymentMethd: { error: null, value: "Cash on Delivery" }
            }
        }
    }
};

const checkout = createSlice({
    name: 'checkout',
    initialState: initialState,
    reducers: {
        updateDistributor: (state, action) => {
            return {
                ...state,
                item: {
                    ...state.item,
                    distributor: action.payload
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
        }
    }
});

export default checkout;