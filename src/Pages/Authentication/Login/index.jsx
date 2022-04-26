import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Auth } from 'aws-amplify';

import { BiArrowBack } from 'react-icons/bi';

import { Redirect } from 'react-router-dom';

import './login.css';


function Login() {

    const [activeTab, setActiveTab] = useState('tenant');

    // Authentication states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('password1234');

    const [signedIn, setSignedIn] = useState(false);
    const [signInError, setSignInError] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    //Show Password function.
    const showPassword = () => {
        var input = document.getElementById("thePassword");
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    }

    const signIn = async () => {
        try {
            setIsLoading(true)
            await Auth.signIn(username, password);
            setIsLoading(false)
            setSignedIn(true)
        } catch (error) {
            setSignInError(error)
            setIsLoading(false)
            console.log('error signing in', error);
        }
    }

    const confirmSignIn = () => {
        Auth.signIn(username, password)
            .then(user => {
                if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                    console.log(user.challengeName)
                    const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
                    Auth.completeNewPassword(
                        user,               // the Cognito User Object
                        newPassword,
                    ).then(user => {
                        // at this time the user is logged in if no MFA required
                        console.log(user);
                    }).catch(e => {
                        console.log(e);
                    });
                } else {
                    // other situations
                }
            }).catch(e => {
                console.log(e);
            });
    }

    if (signedIn === true) {
        return <Redirect to={
            activeTab === 'tenant'
                ? '/Tenant-portal-statements'
                : '/Admin-dashboard'} />
    }

    return (
        <div id="login">

            <Helmet>
                <title>DJS PROPERTIES | LOGIN</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Login' />
            </Helmet>

            <div className='login-content'>

                {isLoading ?
                    <div className='loader-container'>
                        <div className='loader' />
                    </div>
                    : ''}

                <Link to='/'>
                    <BiArrowBack size={40} className='BiArrowBack' />
                </Link>

                <div className='login-card-container'>
                    <div className='login-card-header'>
                        <div
                            onClick={() => setActiveTab('tenant')}
                            className={
                                activeTab === 'tenant' ? 'login-card-header-title-active'
                                    :
                                    'login-card-header-title'} >
                            Tenant
                        </div>
                        <div
                            onClick={() => setActiveTab('admin')}
                            className={
                                activeTab === 'admin' ? 'login-card-header-title-active'
                                    :
                                    'login-card-header-title'}>
                            Admin
                        </div>
                    </div>
                    <div className='login-text'>Login</div>
                    <div className='login-card-input-container'>
                        <input
                            type='email'
                            placeholder='Username'
                            className='login-card-input'
                            onChange={(e) => setUsername(e.target.value)} />
                        <input
                            type='password'
                            placeholder='Password'
                            className='login-card-input'
                            id="thePassword"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='see-password'>
                        <input
                            type="checkbox"
                            onClick={showPassword} />
                        See password
                    </div>

                    <button onClick={signIn} className='login-card-btn'>
                        Login
                    </button>
                    {
                        signInError !== '' ?
                            <div className='get-help' style={{ color: ' red' }}>
                                Incorrect username or password
                            </div>
                            : ''
                    }

                    <div className='get-help'>Get help sign in</div>
                </div>
            </div>
        </div >
    );
}

export default Login;