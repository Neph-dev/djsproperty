import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Auth } from "aws-amplify";

import { useDetectClickOutside } from 'react-detect-click-outside';

import { MdOutlineClose } from 'react-icons/md';
import { RiNotification2Fill } from 'react-icons/ri';

import './tenantDashHeader.css';
import TenantPortalTabNav from '../TenantPortalTabNav';
import Notifications from '../../../../Components/Notifications';


function TenantDashHeader({ activeTab }) {

    const [signedOut, setSignedOut] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [roomNumber, setRoomNumber] = useState('')

    const [showNotification, setShowNotification] = useState(false)
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)

    const closeNotificationDropdown = () => {
        setShowNotificationDropdown(false);
    }
    const notificationRef = useDetectClickOutside({ onTriggered: closeNotificationDropdown });

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);

        try {
            Auth.currentAuthenticatedUser({
                // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
                bypassCache: false
            }).then(user => {
                setFirstName(user.attributes.name)
                setRoomNumber(user.attributes['custom:roomNumber'])
                // TBD
            }).catch(err => console.log(err));
        }
        catch (e) {
            console.log(e);
        }
    }, []);

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
        <div>
            <div className='tenantPortal-header'>
                <div className='tenantPortal-greeting'>
                    <Link to='Tenant-portal-statements'>
                        Hello {firstName} - Unit {roomNumber}
                    </Link>
                </div>

                <div className='tenantPortal-notification-logout'>
                    <Notifications
                        setShowNotification={setShowNotification}
                        notificationRef={notificationRef}
                        showNotification={showNotification}
                    />
                    <button
                        onClick={signOut}
                        className='Admin-logout'>
                        Sign out
                    </button>
                </div>
            </div>

            <TenantPortalTabNav activeTab={activeTab} />

        </div>
    );
}

export default TenantDashHeader;