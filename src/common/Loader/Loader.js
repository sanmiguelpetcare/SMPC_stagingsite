import React from "react";
import { ReduxConnect } from "helpers/HOC";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = (props) => {
    return props.common_state.isLoading ? (
        <div className="loader">
            <CircularProgress />
        </div>
    ) : null;
}

export default ReduxConnect( Loader, ["common"] );