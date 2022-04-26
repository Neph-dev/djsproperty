import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

import { Auth } from 'aws-amplify';

import { BiArrowBack } from 'react-icons/bi';

import './Login.css';


function Login() {

    const [activeTab, setActiveTab] = useState('tenant');

    // Authentication states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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

    const signIn = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true)
            await Auth.signIn(username, password);
            setIsLoading(false)
            setSignedIn(true)
        } catch (error) {
            setSignInError(error)
            setIsLoading(false)
        }
    }

    if (signedIn === true) {
        return <Redirect to={
            activeTab === 'tenant'
                ? '/Tenant-portal-statements'
                : '/Admin-dashboard'} />
    }

    return (
        <div id="Login">

            <Helmet>
                <title>DJS PROPERTIES | LOGIN</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Login' />
            </Helmet>

            <div className='Login-content'>

                {isLoading ?
                    <div className='loader-container'>
                        <div className='loader' />
                    </div>
                    : ''}

                <Link to='/'>
                    <BiArrowBack size={30} className='BiArrowBack' />
                </Link>

                <form onSubmit={signIn} className='Login-card-container'>
                    <div className='Login-card-header'>
                        <div
                            onClick={() => setActiveTab('tenant')}
                            className={
                                activeTab === 'tenant' ? 'Login-card-header-title-active'
                                    :
                                    'Login-card-header-title'} >
                            Tenant
                        </div>
                        <div
                            onClick={() => setActiveTab('admin')}
                            className={
                                activeTab === 'admin' ? 'Login-card-header-title-active'
                                    :
                                    'Login-card-header-title'}>
                            Admin
                        </div>
                    </div>
                    <div className='Login-title'>Login</div>
                    <div className='Login-inputs-container'>
                        <input
                            type='email'
                            placeholder='Email'
                            className={signInError !== '' ? 'Login-input-red' : 'Login-input'}
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus={true} />
                        <input
                            type='password'
                            placeholder='Password'
                            className={signInError !== '' ? 'Login-input-red' : 'Login-input'}
                            id="thePassword"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='Login-show-password'>
                        <input
                            type="checkbox"
                            onClick={showPassword} />
                        Show password
                    </div>

                    <button type="submit" className='Login-btn'>
                        Login
                    </button>
                    {
                        signInError !== '' ?
                            <div
                                className='Login-centeredText'
                                style={{ color: 'red' }}>
                                Incorrect username or password
                            </div>
                            : ''
                    }

                    <div className='Login-centeredText'>Get help sign in.</div>
                </form>
            </div>
        </div >
    );
}

export default Login;