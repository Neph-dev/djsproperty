import React from 'react';

import { Link } from 'react-router-dom';

import { RiNotification2Fill } from 'react-icons/ri';

import './adminDashHeader.css';


function AdminDashHeader() {
    return (
        <div className='admin-header'>
            <div className='admin-greeting'>Admin Dashboard</div>

            <div className='admin-notification-logout'>
                <div><RiNotification2Fill size={30} className='RiNotification2Fill' /></div>
                <div className='admin-logout'>
                    <Link to='Login'>log out</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminDashHeader;