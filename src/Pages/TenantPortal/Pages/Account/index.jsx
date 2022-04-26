import React from 'react';

import { useLocation } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

import './account.css';
import TenantDashHeader from '../../Components/TenantDashHeader';


function Account() {

    const location = useLocation()

    const userDetails = location.state

    const activeTab = 'account'

    return (
        <div id="tennant-account">

            <Helmet>
                <title>DJS PROPERTIES | TENANT PORTAL</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/tenant-portal-account' />
            </Helmet>

            <div className='tennant-account-content'>
                <TenantDashHeader activeTab={activeTab} />

                <div className='tenant-tab-name'>Account</div>

                <div className='add-unit-inputs-container'>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Full Name</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="text"
                                    value={userDetails.firstName + ' ' + userDetails.lastName}
                                    maxLength={100} disabled={true} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Email</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="email"
                                    value={userDetails.email}
                                    maxLength={30} disabled={true} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Phone Number</div>
                            <div className='tenant-account-input'>
                                <input
                                    value={userDetails.phoneNumber}
                                    type="text"
                                    maxLength={15} disabled={true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Residence Name</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="text"
                                    value='Berario Palms'
                                    maxLength={100} disabled={true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Residence Address</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="text"
                                    value='185 Arkansas avenue. berario, Johannesburg, 2181'
                                    maxLength={100} disabled={true} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Account;