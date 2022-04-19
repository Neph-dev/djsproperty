import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RiNotification2Fill } from 'react-icons/ri';

import './tenantDashHeader.css';
import TenantPortalTabNav from '../TenantPortalTabNav';


function TenantDashHeader({ activeTab }) {

    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)

    return (
        <div>
            <div className='tenantPortal-header'>
                <div className='tenantPortal-greeting'>
                    <Link to='Tenant-portal-statements'>
                        Hello Nephthali - Unit 7b
                    </Link>
                </div>

                <div className='tenantPortal-notification-logout'>
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