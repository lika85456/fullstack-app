import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login, UserState, UserStatus } from "../../reducers/UserReducer";

export interface RegisterFormProps {
    onRegister: (username: string, password: string) => void;
    status: UserStatus;
    error: string | null;
}

export const RegisterForm: React.FunctionComponent<RegisterFormProps> = ({
    onRegister,
    status,
    error
}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <div className="container box is-max-desktop p-4 mt-6" style={{ maxWidth: "600px" }}>
            <div className="title">
                Register
            </div>
            <div className="field">
                <label className="label">Email</label>
                <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check" />
                    </span>
                </p>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button className={`button is-primary ${status == UserStatus.LOGGING_IN ? "is-disabled is-loading" : ""}`} onClick={() => {
                        onRegister(
                            email,
                            password
                        )
                    }}>
                        Register
                    </button>
                </p>
            </div>
            <div className={`message is-danger ${error ? "" : "is-hidden"}`}>
                <div className="message-body">
                    {
                        error
                    }
                </div>
            </div>
        </div>
    );
};

export interface RegisterFormContainerProps {

}

export const RegisterFormContainer: React.FunctionComponent<RegisterFormContainerProps> = ({ }) => {
    const dispatch = useDispatch();
    const onRegister = (email: string, password: string) => dispatch(Login({ email, password }));

    const userState = useSelector(UserState);

    return (
        <div>
            <RegisterForm
                onRegister={onRegister}
                error={userState.loginError}
                status={userState.userStatus}
            />
        </div>
    );
};

export default RegisterFormContainer;