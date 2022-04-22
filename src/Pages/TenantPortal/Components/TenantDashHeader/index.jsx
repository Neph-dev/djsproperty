import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDetectClickOutside } from 'react-detect-click-outside';

import { MdOutlineClose } from 'react-icons/md';
import { RiNotification2Fill } from 'react-icons/ri';

import './tenantDashHeader.css';
import TenantPortalTabNav from '../TenantPortalTabNav';


function TenantDashHeader({ activeTab }) {

    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)

    const closeNotificationDropdown = () => {
        setShowNotificationDropdown(false);
    }
    const notificationRef = useDetectClickOutside({ onTriggered: closeNotificationDropdown });

    return (
        <div>
            <div className='tenantPortal-header'>
                <div className='tenantPortal-greeting'>
                    <Link to='Tenant-portal-statements'>
                        Hello Nephthali - Unit 7b
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
                    <div className='tenantPortal-logout'>
                        <Link to='Login'>log out</Link>
                    </div>
                </div>
            </div>

            <TenantPortalTabNav activeTab={activeTab} />

        </div>
    );
}

export default TenantDashHeader;