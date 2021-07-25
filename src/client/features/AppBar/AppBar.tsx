import React from "react";
import { NavLink } from "react-router-dom";

export interface AppBarProps {

}

export const AppBar: React.FunctionComponent<AppBarProps> = ({
}) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink className="navbar-item"
                    to={"/"}
                    exact
                >
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </NavLink>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Documentation
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <NavLink
                                className="button is-primary"
                                to="/register"
                                exact
                            >
                                <strong>Sign up</strong>
                            </NavLink>
                            <NavLink
                                className="button is-light"
                                to="/login"
                                exact
                            >
                                Log in
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AppBar;