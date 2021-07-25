import React from "react";
import AppBarContainer from "../features/AppBar/AppBarContainer";
import LoginForm from "../features/LoginForm/LoginForm";

export interface LoginProps {

}

export const Login: React.FunctionComponent<LoginProps> = ({
}) => {
    return (
        <AppBarContainer>
            <LoginForm/>
        </AppBarContainer>
    );
};

export default Login;