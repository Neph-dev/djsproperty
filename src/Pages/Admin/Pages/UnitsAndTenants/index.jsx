import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';

//import aws api and components.
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listUnits } from '../../../../graphql/queries';

import './unitsAndTenants.css';
import UnitsAndTenantsTabNav from '../../Components/UnitsAndTenantsTabNav';


function UnitsAndTenants() {

    const location = useLocation()

    const area = location.state.area
    const residenceDetails = location.state

    const activeTab = 'units'

    const [stateUnit, setStateUnit] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);

        const fetchAreas = async () => {
            try {
                setIsLoading(true);
                // Areas
                const unitResults = await API.graphql(
                    graphqlOperation(listUnits)
                )
                let unit = unitResults.data.listUnits.items
                setStateUnit(unit)

                setIsLoading(false);
            }
            catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }
        fetchAreas();
    }, [])

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

                <div className='residence-area-name'>{residenceDetails.name}</div>

                <div className='residences-cards-container'>
                    {
                        isLoading ?
                            <div className='loader-container'>
                                <div className='loader' />
                            </div>
                            :
                            stateUnit.map((unit) => (
                                unit.residenceID === residenceDetails.id ?
                                    <div key={unit.id} className='residences-card'>
                                        <div>
                                            <img src={unit.image} alt='' className='flat-card-img' />
                                            <div className='residences-card-details'>
                                                <div className='residences-card-location'>
                                                    <b>{unit.type} / {unit.style} Unit / {unit.unitNumber}</b>
                                                </div>

                                                <div className='residences-card-tenant-units'>
                                                    <div className='residences-card-total-units' title='Capacity'>
                                                        <div>{unit.capacity}</div>
                                                        <MdPeopleAlt size={20} className='AiTwotoneHome' />
                                                    </div>
                                                </div>

                                                <div className='residences-card-view'>
                                                    <Link
                                                        to={{ state: residenceDetails, area, unit, pathname: '/Unit-details' }}>
                                                        Unit Details
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : []

                            ))
                    }
                </div>
            </div>
        </div>
    );
}

export default UnitsAndTenants;