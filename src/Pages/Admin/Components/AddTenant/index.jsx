import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { BiArrowBack } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

import AdminDashHeader from '../../Components/AdminDashHeader';


function AddTenant() {

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
                <link rel='canonical' href='/Add-tenant' />
            </Helmet>

            <AdminDashHeader />

            <Link to='/Manage-tenants'>
                <BiArrowBack size={35} className='us-ts-BiArrowBack' />
            </Link>

            <div>
                <div className='add-unit-title'>Add New Tenant</div>
            </div>


            <div className='add-unit-inputs-container'>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Full Name</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                maxlength={100} />
                        </div>
                    </div>
                </div>
                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Email</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                maxlength={30} />
                        </div>
                    </div>
                </div>
                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Phone Number</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                maxlength={15} />
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
                                maxlength={50} />
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
                                maxlength={100} />
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

                <div>
                    <button
                        className='save-btn'
                        onClick={() => ''}>
                        Save
                    </button>
                </div>

            </div>

        </div>
    );
}

export default AddTenant;