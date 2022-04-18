import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import './manageTenants.css';

import UnitsAndTenantsTabNav from '../../Components/UnitsAndTenantsTabNav';


function ManageTenants() {

    const activeTab = 'manage'

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='unitsAndTenants'>
            <div className='us-ts-content'>

                <UnitsAndTenantsTabNav activeTab={activeTab} />

                <div className='search-and-add'>
                    <div>
                        <input
                            className='search-tenant'
                            placeholder='Search by name or unit'
                            type='search'
                            maxLength={30}
                            autoFocus={true} />
                    </div>
                    <Link to='/Add-tenant' >
                        <AiOutlinePlusCircle
                            title='Add a tenant.'
                            size={40}
                            className='AiOutlinePlusCircle' />
                    </Link>
                </div>

                <div className='residence-area-name'>Berario Palms</div>

                <div>
                    <div className='tenants-unit-label'>Unit 1</div>
                    <div className='residences-cards-container'>
                        <div className='tenant-card'>
                            <div className='tenant-card-unit-number'>Unit: 7 a</div>
                            <div className='tenant-card-el'>name + surname</div>
                            <div className='tenant-card-el'>email@gmail.com</div>
                            <div className='tenant-card-el'>+27 67 791 9267</div>
                            <button className='tenant-card-btn'>
                                <Link to='/Tenant-details'>
                                    Tenants details
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ManageTenants;