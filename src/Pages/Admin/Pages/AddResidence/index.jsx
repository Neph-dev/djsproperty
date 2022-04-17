import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BiArrowBack } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './addResidence.css';
import AdminDashHeader from '../../Components/AdminDashHeader';


function AddResidence() {

    const [neighborhoodDropdown, setNeighborhoodDropdown] = useState(false)

    const [messageInput, setMessageInput] = useState('')

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='add-residence'>

            <Helmet>
                <title>DJS PROPERTIES | ADMIN DASHBOARD</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Add-residence' />
            </Helmet>


            <div className='add-unit-content'>

                <AdminDashHeader />

                <Link to='/Admin-dashboard'>
                    <BiArrowBack size={35} className='us-ts-BiArrowBack' />
                </Link>

                <div>
                    <div className='add-unit-title'>Add a Residence</div>
                </div>

                <div className='add-unit-inputs-container'>

                    <div className='features-label'>Neighborhood Information</div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Select or add neighborhood</div>
                            <div
                                onClick={() => {
                                    setNeighborhoodDropdown(prevState => !prevState)
                                }}
                                className='add-unit-input'>
                                <input
                                    type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                neighborhoodDropdown && (
                                    <div
                                        onClick={() => {
                                            setNeighborhoodDropdown(prevState => !prevState)
                                        }}
                                        className='add-unit-dropdown' >
                                        <div className='add-unit-dropdown-el'>
                                            + Add a new neighborhood
                                        </div>
                                        <div className='add-unit-dropdown-el'>Berario</div>
                                    </div>)
                            }
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Name of the neighborhood</div>
                            <div className='add-unit-input'>
                                <input
                                    type="text"
                                    maxlength={15} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>
                                Description (This will appear on your website.)
                            </div>
                            <div>
                                <textarea
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    name="message"
                                    type="text"
                                    placeholder="Type a description here."
                                    maxlength={500}
                                    className='nei-description' />
                                {messageInput.length < 10 ? `0${messageInput.length}` : messageInput.length}/500
                            </div>
                        </div>
                    </div>

                    <div className='features-label'>Residence Information</div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Residence Name</div>
                            <div className='add-unit-input'>
                                <input
                                    type="text"
                                    maxlength={15} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Residence Address</div>
                            <div className='add-unit-input'>
                                <input
                                    type="text"
                                    maxlength={15} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Total units in Residence</div>
                            <div className='add-unit-input'>
                                <input
                                    type="text"
                                    maxlength={15} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Total Residence capacity</div>
                            <div className='add-unit-input'>
                                <input
                                    type="text"
                                    maxlength={4} />People
                            </div>
                        </div>
                    </div>

                    <div className='features-label'>Features</div>

                    <div
                        className='add-unit-input-container'
                        style={{
                            marginTop: 30,
                            marginBottom: 30,
                            width: '50%',
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>
                        <div
                            className='add-unit-input-label'
                            style={{ marginTop: 5, marginBottom: 5, fontSize: 16 }}>
                            <input type='checkbox' />Wifi
                        </div>
                        <div
                            className='add-unit-input-label'
                            style={{ marginTop: 5, marginBottom: 5, fontSize: 16 }}>
                            <input type='checkbox' />Gym
                        </div>
                        <div
                            className='add-unit-input-label'
                            style={{ marginTop: 5, marginBottom: 5, fontSize: 16 }}>
                            <input type='checkbox' />Laundry
                        </div>
                        <div
                            className='add-unit-input-label'
                            style={{ marginTop: 5, marginBottom: 5, fontSize: 16 }}>
                            <input type='checkbox' />Pool
                        </div>
                        <div
                            className='add-unit-input-label'
                            style={{ marginTop: 5, marginBottom: 5, fontSize: 16 }}>
                            <input type='checkbox' />Roof desk
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Add a feature</div>
                            <div className='add-unit-input'>
                                <input type="text" maxlength={15} />
                            </div>
                            <button>Add feature</button>
                        </div>
                    </div>

                    <div>
                        <button
                            className='save-btn'
                            onClick={() => ''}>
                            Save Residence
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddResidence;