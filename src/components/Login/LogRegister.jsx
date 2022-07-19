import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogIn } from '../../redux/auth';
import css from './Login.module.css'

const LogRegister = () => {
    const dispatch = useDispatch();
    const [register, setRegister] = useState(false);
    const [loginValues, setLoginValues] = useState({ email: "", password: "" });

    const guestUser = { email: "maadan1982@gmail.com", password: "123456" }

    const submitHandle = (e) => {
        e.preventDefault();
        if (loginValues.email === guestUser.email && loginValues.email === guestUser.email) {
            dispatch(LogIn(loginValues));
            setLoginValues({ email: "", password: "" });
        }
    }
    window.scroll({ top: 0 });

    return <div className={css.container}>
        {!register ? (
            <form onSubmit={submitHandle} action="" className={css.form}>
                <h1>LOG IN PLEASE</h1>
                <input value={loginValues.email} onChange={(e) => setLoginValues({ ...loginValues, email: e.target.value })} type="email" name="email" id="email" placeholder='your email' />
                <input value={loginValues.password} onChange={(e) => setLoginValues({ ...loginValues, password: e.target.value })} type="password" name="password" id="password" placeholder='your password' />
                <button type="submit" className={css.btn}>LOGIN</button>
                <div className={css.sign}>
                    <button onClick={() => setRegister(true)} className={css.btn_sign}>Signup </button>
                    <span > email: {guestUser.email}</span>
                    <span > password: {guestUser.password}</span>
                </div>
            </form>
        ) : (
            <form onSubmit={(e) => e.preventDefault()} action="" className={css.form}>
                <h1 >REGISTER</h1>
                <input type="text" name="name" id="name" placeholder='your full name' />
                <div className={css.registr}>
                    <div className="form-check">
                        <input type="radio" name="male" id="male" />
                        <label htmlFor="flexRadioDefault1">Male</label>
                    </div>
                    <div className="form-check ml-8">
                        <input type="radio" name="female" id="female" />
                        <label htmlFor="flexRadioDefault1"> Female</label>
                    </div>
                </div>
                <input value="" type="email" name="email" id="email" placeholder='your email' />
                <input value="" type="phone" name="phonenumber" id="phonenumber" placeholder='your phone number' />
                <input value="" type="password" name="password" id="password" placeholder='your password' />
                <button value="" type="submit" className={css.btn}>GO</button>
                <p className={css.signup}>SignUp not working! use guest details <span onClick={() => setRegister(false)} className={css.btn}>LOG IN</span></p>
            </form>
        )}
    </div>
};

export default LogRegister;
