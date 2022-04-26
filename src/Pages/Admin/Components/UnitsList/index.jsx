import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//import aws api and components.
import { API, graphqlOperation } from "aws-amplify";
import { listUnits } from '../../../../graphql/queries';

import { MdPeopleAlt } from 'react-icons/md';

import './UnitsList.css';


function UnitsList({ residenceDetails, area }) {

    const [isLoading, setIsLoading] = useState(false)

    const [units, setUnits] = useState([])

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
                setUnits(unit)

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
        <div className='cards-list'>
            {
                isLoading ?
                    <div className='loader-container'>
                        <div className='loader' />
                    </div>
                    :
                    units.map((unit) => (
                        unit.residenceID === residenceDetails.id ?
                            <div key={unit.id} className='card'>
                                <div>
                                    <img src={unit.image} alt='' className='card-img' />
                                    <div className='card-details-container'>
                                        <div className='card-top-text'>
                                            <b>{unit.type} / {unit.style} Unit / {unit.unitNumber}</b>
                                        </div>

                                        <div className='card-features-icons'>
                                            <div
                                                className='card-features-element'
                                                title='Capacity'>
                                                <div>{unit.capacity}</div>
                                                <MdPeopleAlt size={20} className='card-features-icon' />
                                            </div>
                                        </div>

                                        <Link
                                            to={{
                                                state: residenceDetails,
                                                area,
                                                unit,
                                                pathname: '/Unit-details'
                                            }}>
                                            <button className='card-btn'>
                                                Unit Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            : []
                    ))
            }

        </div>
    );
}

export default UnitsList;