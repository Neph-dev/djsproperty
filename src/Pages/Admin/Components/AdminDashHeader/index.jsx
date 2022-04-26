import React, { useState } from 'react';

import { Auth } from 'aws-amplify';

import { Link, Redirect } from 'react-router-dom';

import { useDetectClickOutside } from 'react-detect-click-outside';

import { RiNotification2Fill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';

import './adminDashHeader.css';
import AddNotification from '../AddNotification';


function AdminDashHeader() {

    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)
    const [addNotification, setAddNotification] = useState(false)

    const [signedOut, setSignedOut] = useState(false)

    const closeNotificationDropdown = () => {
        setShowNotificationDropdown(false);
    }
    const notificationRef = useDetectClickOutside({ onTriggered: closeNotificationDropdown });

    // Sign out function
    const signOut = async () => {
        try {
            await Auth.signOut();
            setSignedOut(true)
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    if (signedOut === true) {
        return <Redirect to='/Login' />
    }

    return (
        <div className='admin-header'>
            <div className='admin-greeting'>
                <Link to='./Admin-dashboard'>Admin Dashboard</Link>
            </div>

            {addNotification && (<AddNotification setAddNotification={setAddNotification} />)}

            <div className='admin-notification-logout'>
                <div ref={notificationRef}>
                    <RiNotification2Fill
                        onClick={() => setShowNotificationDropdown((prevState) => !prevState)}
                        size={30}
                        className='RiNotification2Fill' />

                    {
                        showNotificationDropdown && (
                            <div
                                onClick={() => setShowNotificationDropdown((prevState) => !prevState)}
                                className='showNotification-dropdown'>


                                <div className='notification-dropdown'>
                                    <div className='notification-label_cross'>
                                        <div className='notification-label'>
                                            Notifications
                                        </div>
                                        <MdOutlineClose
                                            onClick={() => setShowNotificationDropdown(false)}
                                            size={20}
                                            className='notification-close' />
                                    </div>

                                    <div
                                        onClick={() => setAddNotification(true)}
                                        className='notification-el'>
                                        <div className='notification-title'>
                                            Add a notification
                                        </div>
                                    </div>
                                    <div className='notification-el'>
                                        <div className='notification-title'>
                                            This is a title
                                        </div>
                                        <div className='notification-description'>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a
                                            type specimen book. It has survived not only five centuries,
                                            but also the leap into electronic typesetting, remaining
                                            essentially unchanged.
                                        </div>
                                        <div className='notification-date'>
                                            • 1 hour ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <button onClick={signOut} className='admin-logout'>
                    Sign out
                </button>
            </div>
        </div>
    );
}

export default AdminDashHeader;