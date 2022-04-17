import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { RiNotification2Fill } from 'react-icons/ri';

import './adminDashHeader.css';
import AddNotification from '../AddNotification';


function AdminDashHeader() {

    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)
    const [addNotification, setAddNotification] = useState(false)

    return (
        <div className='admin-header'>
            <div className='admin-greeting'>
                <Link to='./Admin-dashboard'>Admin Dashboard</Link>
            </div>

            {addNotification && (<AddNotification setAddNotification={setAddNotification} />)}

            <div className='admin-notification-logout'>
                <div>
                    <RiNotification2Fill
                        onClick={() => setShowNotificationDropdown((prevState) => !prevState)}
                        size={30}
                        className='RiNotification2Fill' />

                    {
                        showNotificationDropdown && (
                            <div
                                onClick={() => setShowNotificationDropdown((prevState) => !prevState)}
                                className='showNotification-dropdown'>

                                <div className='showNotification-dropdown-el'>
                                    <div
                                        onClick={() => setAddNotification(true)}
                                        className='showNotification-dropdown-title-ur'>
                                        Add a notification
                                    </div>
                                </div>

                                <div className='showNotification-dropdown-el'>
                                    <div>
                                        <div className='showNotification-dropdown-title-ur'>
                                            New Entry code at Beraria Building
                                        </div>
                                        <div className='showNotification-dropdown-msg'>
                                            The New Entry code at Beraria Building is 000000
                                        </div>
                                    </div>
                                </div>

                                <div className='showNotification-dropdown-el'>
                                    <div>
                                        <div className='showNotification-dropdown-title'>
                                            New Entry code at Beraria Building
                                        </div>
                                        <div className='showNotification-dropdown-msg'>
                                            The New Entry code at Beraria Building is 000000
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
                <div className='admin-logout'>
                    <Link to='Login'>log out</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminDashHeader;