import React, { useState } from "react";
import Tokenized from "config/Tokenized";
import { ReduxConnect } from "helpers/HOC";

const Login = props => {
    const [state, setState] = useState({
        username: { value: null, error: null },
        password: { value: null, error: null }
    });

    const validate = e => {
        let errors = 0;

        if(!state.username.value) {
            setState({...state, username: {...state.username, error: "This field is required"}});
            errors += 1;
        }

        if(!state.password.value) {
            setState({...state, password: {...state.password, error: "This field is required"}});
            errors += 1;
        }
        
        return errors;
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const errcount = validate();

        if( errcount === 0 ) {
            const inputs = {
                email: state.username.value, 
                password: state.password.value
            };
            const gtoken = Tokenized.encrypt(inputs);

            // if( inputs.email === "admin@blinkcreativestudio.com" && inputs.password === "BlinkCreativeStudio1234" ) {
            if( inputs.email === "admin@gmail.com" && inputs.password === "qwerty1234" ) {
                if(props.user_actions.setLoggedUser) {
                    props.user_actions.setLoggedUser(inputs);

                    localStorage.setItem('admin_token_id', gtoken.id);
                    localStorage.setItem('admin_logged_user', gtoken.token);
                }
            }
        }
    };

    const onChange = e => {
        setState({...state, [e.target.name]: {...state.username, value: e.target.value}});
    };

    return (
        <div className="admin-login">
            <div className="login-content">
                <h1>Dashboard</h1>
                <div className="form-container">
                    <input name="username" type="text" placeholder="Username" value={ state.username.value } onChange={ onChange } />
                </div>
                <div className="form-container">
                    <input name="password" type="password" placeholder="Password" value={ state.password.value } onChange={ onChange } />
                </div>
                <div className="form-container login-btn">
                    <a href="#" onClick={ onSubmit }>Login</a>
                </div>
            </div>
        </div>
    );
}

export default ReduxConnect( Login, ["user"] );