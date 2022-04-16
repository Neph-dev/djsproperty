import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BiArrowBack } from 'react-icons/bi';

import './login.css';


function Login() {

    const [activeTab, setActiveTab] = useState('tenant')


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
                            className='login-card-input' />
                        <input
                            type='password'
                            placeholder='Password'
                            className='login-card-input' />
                    </div>
                    <div className='see-password'>See password</div>

                    <buttom className='login-card-btn'>
                        <Link to='/Tenant-portal'>Login</Link>
                    </buttom>

                    <div className='get-help'>Get help sign in</div>
                </div>
            </div>
        </div>
    );
}

export default Login;