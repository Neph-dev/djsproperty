import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';

import { Auth } from 'aws-amplify';

import './adminDashHeader.css';
import AddNotification from '../AddNotification';
import Notifications from '../../../../Components/Notifications';


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

                <Notifications
                    setShowNotification={setShowNotification}
                    notificationRef={notificationRef}
                    showNotification={showNotification}
                    setAddNotification={setAddNotification} />

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