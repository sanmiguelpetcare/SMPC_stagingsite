import React from "react";
import Request from "config/API";
import { ReduxConnect } from "helpers/HOC";

const Search = props => {
    const onFetchData = (v) => {
        const params = {
            query: v,
            actionType: "filterOptions"
        };

        props.common_actions.updateLoading(true);

        Request().get("/distributor", params)
            .then(response => {
                props.distributor_actions.updateList(response.data);
                props.common_actions.updateLoading(false);
            });
    }

    return (
        <div className="search-coontainer">
            <div className="form-container">
                <div className="form-item">
                    <input type="text" placeholder="Search..." onKeyDown={ e => e.key === "Enter" ? onFetchData(e.target.value) : null } />
                </div>
            </div>
        </div>
    )
}

export default ReduxConnect(Search, []);