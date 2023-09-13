import React from "react"
import 'toastr/build/toastr.css';
import './assets/sass/app.scss';
import Routes from "./Routes";

import { Provider } from "react-redux";
import store from "redux/store";

function App(props) {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  )
}

export default App;
