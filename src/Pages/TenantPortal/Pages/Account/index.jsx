import React from 'react';
import { Helmet } from 'react-helmet-async';

import './account.css';
import TenantDashHeader from '../../Components/TenantDashHeader';



function Account() {

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
                                    value='Nephthali Salam'
                                    maxlength={100} disabled={true} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Email</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="email"
                                    value='snephthali@gmail.com'
                                    maxlength={30} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Phone Number</div>
                            <div className='tenant-account-input'>
                                <input
                                    value='+27 67 791 9267'
                                    type="text"
                                    maxlength={15} />
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
                                    maxlength={100} />
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
                                    maxlength={100} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Account;