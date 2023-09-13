import React from "react";
import { connect } from "react-redux";
import Actions from "redux/actions";

export const ReduxConnect = (Component, states) => {
    const onSetState = state => {
        let list = {};

        for(const s of states) {
            list = {...list, [`${s}_state`]: state[s]};
        }

        return list;
    }

    const HOC = (props) => {
        return <Component {...props} />
    }
    
    return connect(onSetState, Actions)(HOC);
}