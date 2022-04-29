import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { API, Auth, graphqlOperation } from 'aws-amplify';
import { listUnits } from '../../../../graphql/queries';

import './TenantList.css';
import MissingData from '../../../../Components/MissingData';


function TenantList({ area, residenceDetails }) {

    const [isLoading, setIsLoading] = useState(false)

    const [units, setUnits] = useState([])
    const [tenants, setTenants] = useState([])

    let nextToken;

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);

        const fetchUnits = async (limit) => {
            try {
                setIsLoading(true)

                // Units
                const unitResult = await API.graphql(
                    graphqlOperation(listUnits)
                )
                let units = unitResult.data.listUnits.items
                setUnits(units)

                // Users
                let apiName = 'AdminQueries';
                let path = '/listUsersInGroup';
                let myInit = {
                    queryStringParameters: {
                        "groupname": "tenant",
                        "limit": limit,
                        "token": nextToken
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
                    }
                }
                const { NextToken, ...rest } = await API.get(apiName, path, myInit);
                nextToken = NextToken;

                setIsLoading(false);

                setTenants(rest.Users);

                // Users response index: 

                //tenant.Attributes[0] : sub
                //tenant.Attributes[1] : address
                //tenant.Attributes[2] : email_verified
                //tenant.Attributes[3] : gender
                //tenant.Attributes[4] : custom:unitNumber
                //tenant.Attributes[5] : custom:residence
                //tenant.Attributes[6] : phone_number_verified
                //tenant.Attributes[7] : name
                //tenant.Attributes[8] : phone_number
                //tenant.Attributes[9] : custom:roomNumber
                //tenant.Attributes[10] : family_name 
                //tenant.Attributes[11] : email
            }
            catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }

        fetchUnits()
    }, []);


    return (
        <>
            {isLoading ?
                <div className='loader-container'>
                    <div className='loader' />
                </div>
                :
                units.map((unit) => (
                    residenceDetails.id === unit.residenceID ?
                        <div key={unit.id}>
                            <div className='tenants-unit-title'>
                                Unit {unit.unitNumber}
                            </div>
                            <div className='tenant-cards-list'>
                                {
                                    tenants.map((tenant) => (
                                        unit.unitNumber === tenant.Attributes[4].Value
                                            &&
                                            unit.residence.name === tenant.Attributes[5].Value
                                            ?
                                            <div key={tenant.id} className='tenant-card'>
                                                <div className='tenant-card-unit-number'>
                                                    {tenant.Attributes[9].Value}
                                                </div>
                                                <div className='tenant-card-el'>
                                                    {tenant.Attributes[7].Value} {tenant.Attributes[10].Value}
                                                </div>
                                                <div className='tenant-card-el'>
                                                    {tenant.Attributes[11].Value}
                                                </div>
                                                <div className='tenant-card-el'>
                                                    {tenant.Attributes[8].Value}
                                                </div>
                                                <button className='tenant-card-btn'>
                                                    <Link to={{
                                                        state: residenceDetails,
                                                        area,
                                                        tenant,
                                                        pathname: '/Tenant-details'
                                                    }}>
                                                        Tenants details
                                                    </Link>
                                                </button>
                                            </div>
                                            :
                                            <MissingData />
                                    ))
                                }
                            </div>
                        </div>
                        : <MissingData />
                ))
            }

        </>
    );
}

export default TenantList;