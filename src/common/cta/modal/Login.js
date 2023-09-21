import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import Request from "config/API";
import Tokenized from "config/Tokenized";
import { ReduxConnect } from "helpers/HOC";

const LoginModal = (props) => {

    const [error, setError] = useState(false)
    const [data, setLoginData] = useState({
        form: {
            email: {
                error: null, 
                value: ""
            },
            password: {
                error: null, 
                value: ""
            }
        }
    });

    const validateLogin = ({email, password, onUpdate }) => {
        return {
            required: () => {
                if(!email && !password) {
                    onUpdate([
                        {
                            field: "email",
                            key: "error",
                            value: "This field is required."
                        },
                        {
                            field: "password",
                            key: "error",
                            value: "This field is required."
                        }
                    ]);
    
                    return false;
                } else if(!email) {
                    onUpdate([
                        {
                            field: "email",
                            key: "error",
                            value: "This field is required."
                        },
                        {
                            field: "password",
                            key: "error",
                            value: null
                        }
                    ]);
    
                    return false;
                } else if(!password) {
                    onUpdate([
                        {
                            field: "email",
                            key: "error",
                            value: null
                        },
                        {
                            field: "password",
                            key: "error",
                            value: "This field is required."
                        }
                    ]);
    
                    return false;
                } 
    
                onUpdate([
                    {
                        field: "email",
                        key: "error",
                        value: null
                    },
                    {
                        field: "password",
                        key: "error",
                        value: null
                    }
                ]);
    
                return true;
            },
            response: err => {
                if(err.email) {
                    onUpdate([
                        {
                            field: "email",
                            key: "error",
                            value: err.email
                        },
                        {
                            field: "password",
                            key: "error",
                            value: null
                        }
                    ]);
    
                    return false;
                } else if(err.password) {
                    onUpdate([
                        {
                            field: "email",
                            key: "error",
                            value: null
                        },
                        {
                            field: "password",
                            key: "error",
                            value: err.password
                        }
                    ]);
    
                    return false;
                }
    
                onUpdate([
                    {
                        field: "email",
                        key: "error",
                        value: null
                    },
                    {
                        field: "password",
                        key: "error",
                        value: null
                    }
                ]);
    
                return true;
            }
        }
    };

    const onFieldUpdate = (u) => {
        let update = {};
        setError(false)

        for(const i of u) {
            update = {
                ...update,
                [i.field]: {
                    ...data.form[i.field], 
                    [i.key]: i.value
                }
            }
        }
        
        setLoginData({
            ...data, 
            form: {
                ...data.form,
                ...update
            }
        });
    };

    const onLogin = async (e) => {
        e.preventDefault();
        
        const validate = validateLogin({
            email: data.form.email.value, 
            password: data.form.password.value, 
            onUpdate: u => onFieldUpdate(u)
        });

        if(validate.required()) {
            props.common_actions.updateLoading(true);

            const inputs = {
                email: data.form.email.value, 
                password: data.form.password.value
            };
            const gtoken = Tokenized.encrypt(inputs);
            const params = {
                user: gtoken.token
            };

           

            Request().post(`/user/login/${gtoken.id}`, params)
                .then(response => {
                    if(response) {
                        if(props.fe_user_actions.setLoggedUser) {
                            props.fe_user_actions.setLoggedUser(response.data);

                            localStorage.setItem('token_id', gtoken.id);
                            localStorage.setItem('logged_user', gtoken.token);

                            props.handleClose();

                            window.location.href = "/";
                        }
                    }

                    props.common_actions.updateLoading(false);
                })
                .catch(err => {
                    if(err.response) {
                        validate.response(err.response.data.error);
                    }

                    props.common_actions.updateLoading(false);
                });
        }
    }

    return (
        <div className="login-modal-container">
            <div className="login-header-container">
                <h1>{props.heading}</h1>
            </div>
            <div className="new-on-site-container">
                <p>New to this site?</p>
                <p><a href="/signup">Sign up</a></p>
            </div>
            <div className="login-form">
                <form onSubmit={ onLogin }>
                    <div className={`form-item ${ data.form.email.error ? "haserror" : "" }`}>
                        <input type="text" placeholder="Email" name="email" onChange={ e => onFieldUpdate([ { field: "email", key: "value", value: e.target.value } ])} />
                        { data.form.email.error && <small className="error"><i class="fa fa-xmark"></i>{ data.form.email.error }</small> }
                    </div>
                    <div className={`form-item ${ data.form.password.error ? "haserror" : "" }`}>
                        <input type="password" placeholder="Password" name="password" onChange={ e => onFieldUpdate([ { field: "password", key: "value", value: e.target.value } ])} />
                        { data.form.password.error && <small className="error"><i class="fa fa-xmark"></i>{ data.form.password.error }</small> }
                    </div>
                    { error && <small className="error failed-credentials"><i class="fa fa-xmark"></i>Email or password is incorrect.</small> }
                    <div className="form-item button">
                        <button onClick={ onLogin }>LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReduxConnect(LoginModal, ["fe_user"]);