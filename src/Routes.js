import React, { useEffect } from "react";
import Admin from "./Dashboard/Dashboard";
import Web from "./pages/Web";
import CircularProgress from '@mui/material/CircularProgress';

import { ReduxConnect } from "helpers/HOC";

function App(props) {
    return (
        <div className="App">
            { props.common_state.isLoading && <div className="loader"><CircularProgress /></div> }
            <Web />
            <Admin/>
        </div>
    )
}

export default ReduxConnect(App, ["fe_user", "common"]);
