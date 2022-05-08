import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { RiAccountCircleLine } from 'react-icons/ri';
import { BsPlusLg } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { BiEnvelope } from 'react-icons/bi';

import './tenantPortalTabNav.css';


function TenantPortalTabNav({ activeTab }) {

    const [statementFocused, setStatementFocused] = useState(false)
    const [personalInfoFocused, setPersonalInfoFocused] = useState(false)
    const [uploadFocused, setUploadFocused] = useState(false)
    const [messageFocused, setMessageFocused] = useState(false)

    const widgets = [
        {
            id: 1,
            to: '/Tenant-portal-statements',
            title: 'Statements',
            icon: <CgFileDocument
                className={activeTab === 'statements'
                    ? 'tenant-icon-el-active'
                    : 'tenant-icon-el'}
                size={25} />,
            onMouseEnter: () => setStatementFocused(true),
            onMouseLeave: () => setStatementFocused(false),
            iconLabel: statementFocused && 'Statements'
        },
        {
            id: 2,
            to: '/Tenant-portal-account',
            title: 'Account',
            icon: <RiAccountCircleLine
                className={activeTab === 'account'
                    ? 'tenant-icon-el-active'
                    : 'tenant-icon-el'}
                size={25} />,
            onMouseEnter: () => setPersonalInfoFocused(true),
            onMouseLeave: () => setPersonalInfoFocused(false),
            iconLabel: personalInfoFocused && 'Account'
        },
        {
            id: 3,
            to: '/Tenant-portal-upload',
            title: 'UPLOAD DOCUMENTS',
            icon: <BsPlusLg
                className={activeTab === 'upload'
                    ? 'tenant-icon-el-active'
                    : 'tenant-icon-el'}
                size={25} />,
            onMouseEnter: () => setUploadFocused(true),
            onMouseLeave: () => setUploadFocused(false),
            iconLabel: uploadFocused && 'Upload Documents'
        },
        {
            id: 4,
            to: '/Tenant-portal-upload',
            title: 'MESSAGE',
            icon: <BiEnvelope
                className={activeTab === 'upload'
                    ? 'tenant-icon-el-active'
                    : 'tenant-icon-el'}
                size={25} />,
            onMouseEnter: () => setMessageFocused(true),
            onMouseLeave: () => setMessageFocused(false),
            iconLabel: messageFocused && 'Message'
        },
    ]

    return (
        <div className='upload-statements-history'>

            {
                widgets.map((widget) => (
                    <Link key={widget.id} to={widget.to} >
                        <div
                            onMouseEnter={widget.onMouseEnter}
                            onMouseLeave={widget.onMouseLeave}
                            className='tenant-icon-el-container'
                            title={widget.title.toUpperCase()}>
                            {widget.icon}
                            <div className='tenant-icon-label'>
                                {widget.iconLabel}
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div >
    );
}

export default TenantPortalTabNav;