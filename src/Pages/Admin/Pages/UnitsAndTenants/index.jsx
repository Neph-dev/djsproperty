import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { AiOutlinePlusCircle, AiTwotoneHome } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';

import './unitsAndTenants.css';
import AdminDashHeader from '../../Components/AdminDashHeader';


function UnitsAndTenants() {

    const [activeTab, setActiveTab] = useState('Units')

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='unitsAndTenants'>

            <Helmet>
                <title>DJS PROPERTIES | ADMIN DASHBOARD</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/units-tenants' />
            </Helmet>

            <div className='us-ts-content'>

                <AdminDashHeader />

                <Link to='/Admin-dashboard'>
                    <BiArrowBack size={35} className='us-ts-BiArrowBack' />
                </Link>

                <div className='us-ts-tab-container'>
                    <div
                        onClick={() => setActiveTab('Units')}
                        className={activeTab === 'Units' ? 'us-ts-tab-active' : 'us-ts-tab'}>
                        <div className='us-ts-tab-label'>Units</div>
                    </div>
                    <div
                        onClick={() => setActiveTab('manage')}
                        className={activeTab === 'manage' ? 'us-ts-tab-active' : 'us-ts-tab'}>
                        <div className='us-ts-tab-label'>Manage Tenants</div>
                    </div>
                </div>

                <Link to='/Add-unit' >
                    <AiOutlinePlusCircle
                        title='Add a Unit.'
                        size={40}
                        className='AiOutlinePlusCircle' />
                </Link>

                <div className='residence-area-name'>Berario Palms</div>

                <div className='residences-cards-container'>
                    <div className='residences-card'>
                        <div>
                            <div className='residences-card-img' />
                            <div className='residences-card-details'>
                                <div className='residences-card-location'>
                                    <b>Room / Shared Unit / 7b</b>
                                </div>

                                <div className='residences-card-tenant-units'>
                                    <div className='residences-card-total-units' title='Capacity'>
                                        <div>3</div> <MdPeopleAlt size={20} className='AiTwotoneHome' />
                                    </div>
                                </div>

                                <div className='residences-card-view'>
                                    <Link to='/'>See Unit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnitsAndTenants;