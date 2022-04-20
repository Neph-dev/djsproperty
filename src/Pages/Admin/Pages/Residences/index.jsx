import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//import aws api and components.
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listAreas, listResidences } from '../../../../graphql/queries';

import { AiOutlinePlusCircle, AiTwotoneHome } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';

import './residences.css';


function Residences() {

    const [stateListArea, setStateListArea] = useState([])

    const [stateListResidence, setStateListResidence] = useState([])

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);

        const fetchAreas = async () => {
            try {
                // Areas
                const areaResults = await API.graphql(
                    graphqlOperation(listAreas)
                )
                let area = areaResults.data.listAreas.items
                setStateListArea(area)

                // Residence
                const residenceResults = await API.graphql(
                    graphqlOperation(listResidences)
                )
                let residence = residenceResults.data.listResidences.items
                setStateListResidence(residence)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchAreas();
    }, [])

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

                <Link to='/Add-residence'  >
                    <AiOutlinePlusCircle
                        title='Add a residence.'
                        size={40}
                        className='AiOutlinePlusCircle' />
                </Link>
                {
                    stateListArea.map((area) => (
                        <div key={area.id} >
                            <div className='residence-area-name'>
                                {area.name}
                            </div>

                            <div className='residences-cards-container'>
                                {stateListResidence.map((residence) => (
                                    residence.areaID === area.id ?
                                        <div key={residence.id} className='residences-card'>
                                            <div>
                                                <img
                                                    src={residence.image}
                                                    alt=''
                                                    className='residences-card-img' />
                                                <div className='residences-card-details'>
                                                    <div className='residences-card-location'>
                                                        {residence.name}
                                                    </div>
                                                    <div className='residences-card-type'>
                                                        {residence.address}, {residence.city}, {residence.postalCode}
                                                    </div>

                                                    <div className='residences-card-tenant-units'>
                                                        <div className='residences-card-total-units'>
                                                            <div>{residence.totalUnits}</div>
                                                            <AiTwotoneHome size={20} className='AiTwotoneHome' />
                                                        </div>
                                                        <div className='residences-card-total-units'>
                                                            <div>{residence.totalCapacity}</div>
                                                            <MdPeopleAlt size={20} className='AiTwotoneHome' />
                                                        </div>
                                                    </div>

                                                    <div className='residences-card-view'>
                                                        <Link to={{
                                                            state: residence, area: area,
                                                            pathname: '/units-tenants'
                                                        }}
                                                        >
                                                            Access Residence
                                                        </Link>
                                                    </div>
                                                    <div className='residences-card-view'>
                                                        <Link to={{
                                                            state: residence, area: area,
                                                            pathname: '/Residence-details'
                                                        }}>
                                                            Residence Details
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
                    ))
                }

            </div>
        </div>
    );
}

export default Residences;