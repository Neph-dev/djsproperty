import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { BiArrowBack } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './tenantDetails.css';
import AdminDashHeader from '../../Components/AdminDashHeader';


function TenantDetails() {

    const location = useLocation()

    const area = location.state.area
    const residenceDetails = location.state

    const [addStatement, setAddStatement] = useState(false)

    const [residenceDropdown, setResidenceDropdown] = useState(false)

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <div className='add-unit-input-label'>Full Name</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                maxLength={100} />
                        </div>
                    </div>
                </div>
                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Email</div>
                        <div className='add-unit-input'>
                            <input
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
                        <div className='add-unit-input-label'>Residence Address</div>
                        <div className='add-unit-input'>
                            <input
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
                        onClick={() => ''}>
                        Delete
                    </button>
                </div>

            </div>

        </div>
    );
}

export default TenantDetails;