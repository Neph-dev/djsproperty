import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { API, Auth, graphqlOperation } from 'aws-amplify';
import { listUnits } from '../../../../graphql/queries';

import { tenants } from '../../../../Mock';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import './manageTenants.css';

import UnitsAndTenantsTabNav from '../../Components/UnitsAndTenantsTabNav';


function ManageTenants() {

    const location = useLocation()

    const area = location.state.area
    const residenceDetails = location.state

    const activeTab = 'manage'

    const [isLoading, setIsLoading] = useState(false);
    const [units, setUnits] = useState([]);

    const [users, setUsers] = useState([]);

    let nextToken;

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);

        const fetchUnits = async (limit) => {
            try {
                setIsLoading(true)

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

                console.log(rest.Users);
                setUsers(rest.Users);

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
        <div id='unitsAndTenants'>
            <div className='us-ts-content'>

                <UnitsAndTenantsTabNav
                    residenceDetails={residenceDetails}
                    area={area}
                    activeTab={activeTab} />

                <div className='search-and-add'>
                    <div>
                        <input
                            className='search-tenant'
                            placeholder='Search by name or unit'
                            type='search'
                            maxLength={30}
                            autoFocus={true} />
                    </div>
                    <Link to={{ state: residenceDetails, area, pathname: '/Add-tenant' }} >
                        <AiOutlinePlusCircle
                            title='Add a tenant.'
                            size={40}
                            className='AiOutlinePlusCircle' />
                    </Link>
                </div>

                <div className='residence-area-name'>{residenceDetails.name}</div>
                {isLoading ?
                    <div className='loader-container'>
                        <div className='loader' />
                    </div>

                    :

                    units.map((unit) => (
                        <div key={unit.id}>
                            <div className='tenants-unit-label'>
                                Unit {unit.unitNumber}
                            </div>
                            {
                                users.map((tenant) => (
                                    <div key={tenant.id} className='residences-cards-container'>
                                        <div className='tenant-card'>
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
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ManageTenants;