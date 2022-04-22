import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { tenants } from '../../../../Mock';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import './manageTenants.css';

import UnitsAndTenantsTabNav from '../../Components/UnitsAndTenantsTabNav';


function ManageTenants() {

    const location = useLocation()

    const area = location.state.area
    const residenceDetails = location.state

    const activeTab = 'manage'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='unitsAndTenants'>
            <div className='us-ts-content'>

                <UnitsAndTenantsTabNav
                    residenceDetails={residenceDetails} area={area}
                    activeTab={activeTab} />

                <div className='search-and-add'>
                    <div>
                        <input
                            className='search-tenant'
                            placeholder='Search by name or unit'
                            type='search'
                            maxLength={30}
                            autoFocus={true} />
                    </div>
                    <Link to={{ state: residenceDetails, area, pathname: '/Add-tenant' }} >
                        <AiOutlinePlusCircle
                            title='Add a tenant.'
                            size={40}
                            className='AiOutlinePlusCircle' />
                    </Link>
                </div>

                <div className='residence-area-name'>Berario Palms</div>
                {
                    tenants.map((tenant) => (
                        <div key={tenant.id} >
                            <div className='tenants-unit-label'>
                                Unit {tenant.unit}
                            </div>
                            <div className='residences-cards-container'>
                                <div className='tenant-card'>
                                    <div className='tenant-card-unit-number'>
                                        {tenant.unitNumber}
                                    </div>
                                    <div className='tenant-card-el'>
                                        {tenant.firstName} {tenant.lastName}
                                    </div>
                                    <div className='tenant-card-el'>
                                        {tenant.email}
                                    </div>
                                    <div className='tenant-card-el'>
                                        {tenant.phoneNumber}
                                    </div>
                                    <button className='tenant-card-btn'>
                                        <Link to={{ state: residenceDetails, area, pathname: '/Tenant-details' }}>
                                            Tenants details
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default ManageTenants;