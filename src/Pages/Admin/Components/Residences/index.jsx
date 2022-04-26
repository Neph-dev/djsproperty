import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//import aws api and components.
import { API, graphqlOperation } from "aws-amplify";
import { listAreas, listResidences } from '../../../../graphql/queries';

import { AiTwotoneHome } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';

import './Residences.css';


function Residences() {

    const [area, setAreas] = useState([])

    const [residences, setResidences] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const fetchAreas_Residences = async () => {
            try {
                setIsLoading(true);
                // Areas
                const areaResult = await API.graphql(
                    graphqlOperation(listAreas)
                )
                let area = areaResult.data.listAreas.items
                setAreas(area)

                // Residences
                const residenceResult = await API.graphql(
                    graphqlOperation(listResidences)
                )
                let residences = residenceResult.data.listResidences.items
                setResidences(residences)

                setIsLoading(false);
            }
            catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }
        fetchAreas_Residences();
    }, [])

    return (
        <div className='residences-list'>
            {isLoading ?
                <div className='loader-container'>
                    <div className='loader' />
                </div>
                :
                area.map((area) => (
                    <div key={area.id} >
                        <div className='Page-title'>
                            {area.name}
                        </div>

                        <div className='cards-list'>
                            {residences.map((residence) => (residence.areaID === area.id ?
                                <div
                                    key={residence.id}
                                    className='card'>
                                    <div>

                                        <img
                                            src={residence.image}
                                            alt=''
                                            className='card-img' />

                                        <div className='card-details-container'>
                                            <div className='card-top-text'>
                                                {residence.name}
                                            </div>
                                            <div className='card-middle-text'>
                                                {residence.address}, {residence.city}, {residence.postalCode}
                                            </div>

                                            <div className='card-features-icons'>
                                                <div className='card-features-element'>
                                                    <div>{residence.totalUnits}</div>
                                                    <AiTwotoneHome
                                                        size={20}
                                                        className='card-features-icon' />
                                                </div>
                                                <div className='card-features-element'>
                                                    <div>{residence.totalCapacity}</div>
                                                    <MdPeopleAlt
                                                        size={20}
                                                        className='card-features-icon' />
                                                </div>
                                            </div>

                                            <Link to={{
                                                state: residence, area: area,
                                                pathname: '/Units'
                                            }}>
                                                <button className='card-btn'>
                                                    Access Residence
                                                </button>
                                            </Link>
                                            <Link to={{
                                                state: residence, area: area,
                                                pathname: '/Residence-details'
                                            }}>
                                                <button className='card-btn'>
                                                    Residence Details
                                                </button>
                                            </Link>
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
    );
}

export default Residences;