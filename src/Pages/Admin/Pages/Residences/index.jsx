import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { AiOutlinePlusCircle, AiTwotoneHome } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';

import './residences.css';


function Residences() {
    return (
        <div id="residences">

            <Helmet>
                <title>DJS PROPERTIES | ADMIN DASHBOARD</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Admin-dashboard' />
            </Helmet>

            <div className='residences-content'>

                <div className='residence-title-container'>
                    <div className='residence-title-label'>Residences</div>
                </div>

                <AiOutlinePlusCircle
                    title='Add a residence.'
                    size={40}
                    className='AiOutlinePlusCircle' />

                <div className='residence-area-name'>Berario</div>

                <div className='residences-cards-container'>
                    <div className='residences-card'>
                        <div>
                            <div className='residences-card-img' />
                            <div className='residences-card-details'>
                                <div className='residences-card-location'>
                                    Berario Palms
                                </div>
                                <div className='residences-card-type'>
                                    185 Arkansas Avenue, Berario, Johannesburg 2181
                                </div>

                                <div className='residences-card-tenant-units'>
                                    <div className='residences-card-total-units'>
                                        <div>10</div> <AiTwotoneHome size={20} className='AiTwotoneHome' />
                                    </div>
                                    <div className='residences-card-total-units'>
                                        <div>48</div> <MdPeopleAlt size={20} className='AiTwotoneHome' />
                                    </div>
                                </div>

                                <div className='residences-card-view'>
                                    <Link to='/units-tenants'>Access Residence</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Residences;