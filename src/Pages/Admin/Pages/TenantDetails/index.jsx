import React, { useEffect, useState } from 'react';

import { Link, useLocation, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//import aws api and components.
import { API, graphqlOperation, Auth } from "aws-amplify";

import { BiArrowBack } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './tenantDetails.css';
import AdminDashHeader from '../../Components/AdminDashHeader';


function TenantDetails() {

    const location = useLocation()

    const [isLoading, setIsLoading] = useState(false)

    const area = location.state.area
    const residenceDetails = location.state
    const tenant = location.tenant
    const tenantUsername = location.tenant.Username

    const [deleted, setDeleted] = useState(false)

    // Teant response index: 

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

    const [addStatement, setAddStatement] = useState(false)

    const [residenceDropdown, setResidenceDropdown] = useState(false)

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    async function deleteUser() {
        try {

            setIsLoading(true);

            // disable user
            let apiName = 'AdminQueries';
            let path = '/disableUser';
            let myInit = {
                body: {
                    "username": tenantUsername
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
                }
            }
            await API.post(apiName, path, myInit);

            setIsLoading(false);

            setDeleted(true);

        } catch (error) {
            console.log('error signing up:', error);
            setIsLoading(false);
        }

    }

    if (deleted === true) {
        return <Redirect to={{ state: residenceDetails, area, pathname: '/Manage-tenants' }} />
    }

    return (
        <div>

            <Helmet>
                <title>DJS PROPERTIES | ADMIN DASHBOARD</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Tenant-details' />
            </Helmet>

            <AdminDashHeader />

            <Link to={{ state: residenceDetails, area, pathname: '/Manage-tenants' }}>
                <BiArrowBack
                    size={35}
                    className='us-ts-BiArrowBack' />
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='add-unit-title'>Tenant Details</div>
                <div style={{ textDecoration: 'underline', cursor: 'pointer' }}>Edit</div>
            </div>


            <div className='add-unit-inputs-container'>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>First name</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                value={tenant.Attributes[7].Value}
                                maxLength={100} />
                        </div>
                    </div>
                </div>
                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Last name</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                value={tenant.Attributes[10].Value}
                                maxLength={100} />
                        </div>
                    </div>
                </div>
                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Email</div>
                        <div className='add-unit-input'>
                            <input
                                value={tenant.Attributes[11].Value}
                                type="text"
                                maxLength={30} />
                        </div>
                    </div>
                </div>
                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Phone Number</div>
                        <div className='add-unit-input'>
                            <input
                                value={tenant.Attributes[8].Value}
                                type="text"
                                maxLength={15} />
                        </div>
                    </div>
                </div>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Residence</div>
                        <div
                            onClick={() => setResidenceDropdown(prevState => !prevState)}
                            className='add-unit-input'>
                            <input
                                value={tenant.Attributes[5].Value}
                                type="text"
                                maxLength={50} />
                            <MdKeyboardArrowDown size={25} />
                        </div>
                        {
                            residenceDropdown && (
                                <div
                                    onClick={() => setResidenceDropdown(prevState => !prevState)}
                                    className='add-unit-dropdown'>
                                    <div className='add-unit-dropdown-el'>Berario Palms</div>
                                </div>)
                        }
                    </div>
                </div>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Address</div>
                        <div className='add-unit-input'>
                            <input
                                value={tenant.Attributes[1].Value}
                                type="text"
                                maxLength={100} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='features-label'>Statements</div>

                    <AiOutlinePlusCircle
                        title='Add a statement.'
                        onClick={() => setAddStatement(true)}
                        size={40}
                        className='AiOutlinePlusCircle' />
                </div>

                <div className='tenantDetails-doc-container'>
                    <div>
                        <div className='tenantDetails-doc-label'>February 2022</div>
                        <div className='tenantDetails-doc'>
                            <div>

                            </div>
                        </div>
                        <div className='tenantDetails-doc-delete'>
                            delete
                        </div>
                    </div>
                </div>

                <div className='tenantDetails-doc-container'>
                    <div>
                        <div className='tenantDetails-doc-label'>January 2022</div>
                        <div className='tenantDetails-doc'>
                            <div>

                            </div>
                        </div>
                        <div className='tenantDetails-doc-delete'>
                            delete
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        className='save-btn'
                        onClick={() => ''}>
                        Save
                    </button>
                    <button
                        className='delete-btn'
                        onClick={deleteUser}>
                        Disable
                    </button>
                </div>

            </div>

        </div>
    );
}

export default TenantDetails;