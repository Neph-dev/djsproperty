import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import './Tenants.css';

import UnitsAndTenantsTabNav from '../../Components/UnitsAndTenantsTabNav';
import TenantList from '../../Components/TenantList';


function Tenants() {

    const location = useLocation()

    const area = location.state.area
    const residenceDetails = location.state

    console.log(location)

    const activeTab = 'manage'

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id='Page-container'>
            <div className='Page-content'>

                <UnitsAndTenantsTabNav
                    residenceDetails={residenceDetails}
                    area={area}
                    activeTab={activeTab} />

                {/* <div>
                        <input
                            className='search-tenant'
                            placeholder='Search by name or unit'
                            type='search'
                            maxLength={30}
                            autoFocus={true} />
                    </div> */}
                <Link to={{ state: residenceDetails, area, pathname: '/Add-tenant' }} >
                    <AiOutlinePlusCircle
                        title='Add a tenant.'
                        size={40}
                        className='AiOutlinePlusCircle' />
                </Link>

                <div className='Page-title'>
                    {residenceDetails.name}
                </div>

                <TenantList area={area} residenceDetails={residenceDetails} />

            </div>
        </div>
    );
}

export default Tenants;