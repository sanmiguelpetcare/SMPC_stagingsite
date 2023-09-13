import {createSlice} from '@reduxjs/toolkit';

const item = {
    species: "",
    name: "",
    breed: "",
    birthday: "",
    foodType: ""
};

const initialState = {
    item: {
        furbabies: [item],
        furbabyEntry: item,
        form: {
            firstName: { error: null, value: null },
            lastName: { error: null, value: null },
            email: { error: null, value: null },
            phone: { error: null, value: null },
            password: { error: null, value: null },
            confirmPassword: { error: null, value: null },
            address1: { error: null, value: null },
            address2: { error: null, value: null },
            brgy: { error: null, value: null },
            city: { error: null, value: null },
            province: { error: null, value: null },
            zip: { error: null, value: null },
            type: "member"
        }
    }
};

const signup = createSlice({
    name: 'fe_signup',
    initialState: initialState,
    reducers: {
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
        updateFurbabies: (state, action) => {
            return {
                ...state,
                item: {
                    ...state.item,
                    furbabies: action.payload
                }
            }
        }
    }
});

export default signup;