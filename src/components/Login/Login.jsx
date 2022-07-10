import React, { useEffect, useReducer, useState } from 'react';
import css from './Login.module.css';

const emailReducer = (prevState, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes('@'),
        };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.includes('@'),
        };
    }
    return {
        value: '',
        isValid: false,
    }
}

const passwordReducer = (prevState, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.trim().length > 6
        }
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: prevState.value,
            isValid: prevState.value.trim().length > 6,
        };
    }
    return {
        value: '',
        isValid: false,
    }
}
const Login = (props) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: false,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: false,
    })
    const [formIsValid, setFormIsValid] = useState(false);
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Valid');
            setFormIsValid(emailIsValid && passwordIsValid)
        }, 1000);
        return () => {
            console.log('clean up');
            clearTimeout(identifier)
        };
    }, [setFormIsValid, emailIsValid, passwordIsValid]);
    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <section className={css.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${css.control} ${emailState.IsValid === false ? css.invalid : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${css.control} ${passwordState.IsValid === false ? css.invalid : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={css.actions}>
                    <button type="submit" className={css.btn} disabled={!formIsValid}>Login</button>
                </div>
            </form>
        </section>
    );
};

export default Login;                                              
