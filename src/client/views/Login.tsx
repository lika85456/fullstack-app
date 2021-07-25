import React from "react";
import { useDispatch } from "react-redux";
import AppBarContainer from "../features/AppBar/AppBarContainer";
import LoginForm from "../features/LoginForm";
import { Login as LoginAction } from "../reducers/UserReducer";

export interface LoginProps {

}

export const Login: React.FunctionComponent<LoginProps> = ({
}) => {
    const dispatch = useDispatch();

    const onLogin = (email: string, password: string) => {
        dispatch(LoginAction({ email, password }));
    };

    return (
        <AppBarContainer>
            <LoginForm onLogin={onLogin} />
        </AppBarContainer>
    );
};

export default Login;