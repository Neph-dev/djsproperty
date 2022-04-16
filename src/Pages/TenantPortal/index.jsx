import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { RiNotification2Fill, RiHistoryLine } from 'react-icons/ri';
import { BsFillPlusSquareFill, BsPlusLg } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { FaHistory } from 'react-icons/fa';


import './tenantPortal.css';


function TenantPortal() {
    return (
        <div id='tenantPortal'>
            <Helmet>
                <title>DJS PROPERTIES | TENANT PORTAL</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/tenant-portal' />
            </Helmet>

            <div className='tenantPortal-content'>
                <div className='tenantPortal-header'>
                    <div className='tenantPortal-greeting'>Hello Nephthali</div>

                    <div className='tenantPortal-notification-logout'>
                        <div><RiNotification2Fill size={30} className='RiNotification2Fill' /></div>
                        <div className='tenantPortal-logout'>
                            <Link to='Login'>log out</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='balance-payBtn'>
                        <div className='balance-container'>
                            <div className='balance-label'>Balance</div>
                            <div className='balance'>R 0.00</div>
                        </div>
                        <button className='balance-pay-btn'>Pay</button>
                    </div>

                    <div className='upload-statements-history'>
                        <div className='tenant-icon-el-container'>
                            <BsPlusLg className='tenant-icon-el' size={25} />
                            <div className='tenant-icon-label'>Upload Documents</div>
                        </div>
                        <div className='tenant-icon-el-container'>
                            <CgFileDocument className='tenant-icon-el' size={30} />
                            <div className='tenant-icon-label'>Statements</div>
                        </div>
                        <div className='tenant-icon-el-container'>
                            <RiHistoryLine className='tenant-icon-el' size={30} />
                            <div className='tenant-icon-label'>Payment History</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TenantPortal;