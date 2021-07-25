import React from "react";

export interface LoginFormProps {
    onLogin: (username: string, password: string) => void;
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
    onLogin
}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <div>
            <div className="field">
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
                <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control">
                    <button className="button is-success" onClick={() => {
                        onLogin(
                            email,
                            password
                        )
                    }}>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;