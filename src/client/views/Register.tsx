import React from "react";
import AppBarContainer from "../features/AppBar/AppBarContainer";
import RegisterForm, { UserRegisterData } from "../features/RegisterForm";

export interface RegisterProps {

}

export const Register: React.FunctionComponent<RegisterProps> = ({ }) => {
    const onRegister = (user: UserRegisterData) => {

    }
    return (
        <AppBarContainer>
            <RegisterForm onRegister={onRegister} />
        </AppBarContainer>
    );
};

export default Register;