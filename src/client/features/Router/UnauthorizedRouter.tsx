import React from "react";
import {
    Route, BrowserRouter as Router, Switch
} from "react-router-dom";
import HomePage from "../../views/HomePage";

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
            </Switch>
        </Router>
    );
};

export default UnauthorizedRouter;