import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'

import { Helmet } from 'react-helmet-async';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import UnitsAndTenantsTabNav from '../../Components/UnitsAndTenantsTabNav';
import UnitsList from '../../Components/UnitsList';


function Units() {

    const location = useLocation()

    const area = location.state.area
    const residenceDetails = location.state

    const activeTab = 'units'

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id='Page-container'>
            <div className="Page-content">

                <UnitsAndTenantsTabNav
                    residenceDetails={residenceDetails}
                    area={area}
                    activeTab={activeTab} />

                <Link to={{ state: residenceDetails, area, pathname: '/Add-unit' }} >
                    <AiOutlinePlusCircle
                        title='Add a Unit.'
                        size={40}
                        className='AiOutlinePlusCircle' />
                </Link>

                <div className='Page-title'>
                    {residenceDetails.name}
                </div>

                <UnitsList area={area} residenceDetails={residenceDetails} />
            </div>

        </div>
    );
}

export default Units;