import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';

import './unitsAndTenants.css';
import UnitsAndTenantsTabNav from '../../Components/UnitsAndTenantsTabNav';


function UnitsAndTenants() {

    const activeTab = 'units'

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

                <UnitsAndTenantsTabNav activeTab={activeTab} />

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
                            <div className='flat-card-img' />
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
                                    <Link to='/Unit-details'>Unit Details</Link>
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