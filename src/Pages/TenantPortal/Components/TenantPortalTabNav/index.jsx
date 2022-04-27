import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { RiAccountCircleLine } from 'react-icons/ri';
import { BsPlusLg } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';

import './tenantPortalTabNav.css';


function TenantPortalTabNav({ activeTab }) {

    const [statementFocused, setStatementFocused] = useState(false)
    const [personalInfoFocused, setPersonalInfoFocused] = useState(false)
    const [uploadFocused, setUploadFocused] = useState(false)

    return (
        <div className='upload-statements-history'>

            <Link to='/Tenant-portal-statements' >
                <div
                    onMouseEnter={() => setStatementFocused(true)}
                    onMouseLeave={() => setStatementFocused(false)}
                    className='tenant-icon-el-container'
                    title='STATEMENTS'>
                    <CgFileDocument
                        className={activeTab === 'statements'
                            ? 'tenant-icon-el-active'
                            : 'tenant-icon-el'}
                        size={25} />
                    <div className='tenant-icon-label'>
                        {statementFocused && 'Statements'}
                    </div>
                </div>
            </Link>

            <Link to='/Tenant-portal-account'>
                <div
                    onMouseEnter={() => setPersonalInfoFocused(true)}
                    onMouseLeave={() => setPersonalInfoFocused(false)}
                    className='tenant-icon-el-container'
                    title='Account'>
                    <RiAccountCircleLine
                        className={activeTab === 'account'
                            ? 'tenant-icon-el-active'
                            : 'tenant-icon-el'}
                        size={25} />
                    <div className='tenant-icon-label'>
                        {personalInfoFocused && 'Account'}
                    </div>
                </div>
            </Link>

            <Link to='/Tenant-portal-upload'>
                <div
                    onMouseEnter={() => setUploadFocused(true)}
                    onMouseLeave={() => setUploadFocused(false)}
                    className='tenant-icon-el-container'
                    title='UPLOAD DOCUMENTS'>
                    <BsPlusLg
                        className={activeTab === 'upload'
                            ? 'tenant-icon-el-active'
                            : 'tenant-icon-el'}
                        size={25} />
                    <div className='tenant-icon-label'>
                        {uploadFocused && 'Upload Documents'}
                    </div>
                </div>
            </Link>

        </div >
    );
}

export default TenantPortalTabNav;