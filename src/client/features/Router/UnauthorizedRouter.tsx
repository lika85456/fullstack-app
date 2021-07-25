import React from "react";
import {
    Route, HashRouter as Router, Switch
} from "react-router-dom";
import HomePage from "../../views/HomePage";
import Login from "../../views/Login";
import Register from "../../views/Register";

export interface UnauthorizedRouterProps {

}

export const UnauthorizedRouter: React.FunctionComponent<UnauthorizedRouterProps> = ({
}) => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/register" exact>
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
};

export default UnauthorizedRouter;