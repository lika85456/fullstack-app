import React from "react";

export interface UserRegisterData {
    email: string,
    password: string,

}

export interface RegisterFormProps {
    onRegister: (user: UserRegisterData) => void;
}

export const RegisterForm: React.FunctionComponent<RegisterFormProps> = ({ onRegister }) => {
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
                        onRegister({
                            email,
                            password
                        })
                    }}>
                        Register
                    </button>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;