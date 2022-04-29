import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Auth } from "aws-amplify";

import { useDetectClickOutside } from 'react-detect-click-outside';

import { MdOutlineClose } from 'react-icons/md';
import { RiNotification2Fill } from 'react-icons/ri';

import './tenantDashHeader.css';
import TenantPortalTabNav from '../TenantPortalTabNav';


function TenantDashHeader({ activeTab }) {

    const [signedOut, setSignedOut] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [roomNumber, setRoomNumber] = useState('')

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

            <TenantPortalTabNav activeTab={activeTab} />

        </div>
    );
}

export default TenantDashHeader;