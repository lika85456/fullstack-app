import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import UnauthorizedRouter from "./features/Router/UnauthorizedRouter";
import "./main.scss";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <UnauthorizedRouter />
    </Provider>
    , document.getElementById("root")
);