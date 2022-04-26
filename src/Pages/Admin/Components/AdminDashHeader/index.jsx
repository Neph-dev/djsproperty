import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

import { Auth } from 'aws-amplify';

//icons
import { RiNotification2Fill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';

import './adminDashHeader.css';
import AddNotification from '../AddNotification';


function AdminDashHeader() {

    const [showNotification, setShowNotification] = useState(false)
    const [addNotification, setAddNotification] = useState(false)

    const [signedOut, setSignedOut] = useState(false)

    const closeNotificationDropdown = () => {
        setShowNotification(false);
    }
    const notificationRef = useDetectClickOutside(
        { onTriggered: closeNotificationDropdown }
    );

    // Sign out function
    const signOut = async () => {
        try {
            await Auth.signOut();
            setSignedOut(true)
        } catch (error) {
        }
    }
    if (signedOut === true) {
        return <Redirect to='/Login' />
    }

    return (
        <div id='Admin-header'>

            <Link
                to='./Admin-dashboard'
                className='Page-greeting' >
                Admin Dashboard
            </Link>

            {addNotification && (
                <AddNotification
                    setAddNotification={setAddNotification} />
            )}

            <div className='Admin-right-window-container'>
                <div ref={notificationRef}>
                    <RiNotification2Fill
                        onClick={() =>
                            setShowNotification((prevState) => !prevState)
                        }
                        size={30}
                        title='notification'
                        className='RiNotification2Fill' />

                    {
                        showNotification && (
                            <div
                                onClick={() =>
                                    setShowNotification((prevState) => !prevState)
                                }
                                className='showNotification-dropdown'>


                                <div className='notification-dropdown'>
                                    <div className='notification-header'>
                                        <div className='notification-header-label'>
                                            Notifications
                                        </div>
                                        <MdOutlineClose
                                            onClick={() => setShowNotification(false)}
                                            size={25}
                                            title='Close'
                                            className='MdOutlineClose-notification' />
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
                <button
                    onClick={signOut}
                    className='Admin-logout'>
                    Sign out
                </button>
            </div>
        </div>
    );
}

export default AdminDashHeader;