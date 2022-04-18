import React from 'react';
import { Link } from 'react-router-dom';

import { RiNotification2Fill } from 'react-icons/ri';

import './tenantDashHeader.css';
import TenantPortalTabNav from '../TenantPortalTabNav';


function TenantDashHeader({ activeTab }) {
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
                            size={30}
                            className='RiNotification2Fill' />
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