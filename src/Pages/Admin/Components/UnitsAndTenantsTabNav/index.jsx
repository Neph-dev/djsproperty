import React from 'react';
import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';

import './unitsAndTenantsTabNav.css';
import AdminDashHeader from '../AdminDashHeader';


function UnitsAndTenantsTabNav({ activeTab, residenceDetails, area }) {
    return (
        <div>
            <AdminDashHeader />

            <Link to='/Admin-dashboard'>
                <BiArrowBack size={35} className='us-ts-BiArrowBack' />
            </Link>

            <div className='us-ts-tab-container'>
                <div
                    className={activeTab === 'units' ? 'us-ts-tab-active' : 'us-ts-tab'}>
                    <div className={
                        activeTab === 'units'
                            ? 'us-ts-tab-label-active'
                            : 'us-ts-tab-label'}>
                        <Link to={{ state: residenceDetails, area, pathname: '/Units-tenants' }}>
                            Units
                        </Link>
                    </div>
                </div>
                <div
                    className={activeTab === 'manage' ? 'us-ts-tab-active' : 'us-ts-tab'}>
                    <div className={
                        activeTab === 'manage'
                            ? 'us-ts-tab-label-active'
                            : 'us-ts-tab-label'}>
                        <Link to={{ state: residenceDetails, area, pathname: '/Manage-tenants' }}>
                            Manage Tenants
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnitsAndTenantsTabNav;