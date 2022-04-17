import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './addUnit.css';
import AdminDashHeader from '../../Components/AdminDashHeader';


function AddUnit() {

    const [typeOfUnitDropdown, setTypeOfUnitDropdown] = useState(false)
    const [singleSharedDropdown, setSingleSharedDropdown] = useState(false)
    const [rentSaleDropdown, setRentSaleDropdown] = useState(false)
    const [bathroomDropdown, setBathroomDropdown] = useState(false)
    const [kitchenDropdown, setKitchenDropdown] = useState(false)
    const [parkingDropdown, setParkingDropdown] = useState(false)

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='add-unit'>

            <div className='add-unit-content'>

                <AdminDashHeader />

                <Link to='/units-tenants'>
                    <BiArrowBack size={35} className='us-ts-BiArrowBack' />
                </Link>

                <div>
                    <div className='add-unit-title'>Add a unit in <b>Berario Palms</b></div>
                </div>

                <div className='add-unit-inputs-container'>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Type of unit</div>
                            <div
                                onClick={() => setTypeOfUnitDropdown(prevState => !prevState)}
                                className='add-unit-input'>
                                <input
                                    type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                typeOfUnitDropdown && (
                                    <div
                                        onClick={() => setTypeOfUnitDropdown(prevState => !prevState)}
                                        className='add-unit-dropdown' >
                                        <div className='add-unit-dropdown-el'>Bachelor</div>
                                        <div className='add-unit-dropdown-el'>Room</div>
                                        <div className='add-unit-dropdown-el'>1 Bedroom</div>
                                        <div className='add-unit-dropdown-el'>2 Bedroom</div>
                                        <div className='add-unit-dropdown-el'>3 Bedroom</div>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Shared / Single unit</div>
                            <div
                                onClick={() => setSingleSharedDropdown(prevState => !prevState)}
                                className='add-unit-input'>
                                <input
                                    type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                singleSharedDropdown && (
                                    <div
                                        onClick={() => setSingleSharedDropdown(prevState => !prevState)}
                                        className='add-unit-dropdown'>
                                        <div className='add-unit-dropdown-el'>Shared</div>
                                        <div className='add-unit-dropdown-el'>Single</div>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Capacity</div>
                            <div className='add-unit-input'>
                                <input
                                    type="text"
                                    maxlength={6} /> People
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Dimemsion</div>
                            <div className='add-unit-input'>
                                <input type="text" maxlength={10} /> m2
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Unit Number</div>
                            <div className='add-unit-input'>
                                <input type="text" maxlength={5} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Rent / Sale</div>
                            <div
                                onClick={() => setRentSaleDropdown(prevState => !prevState)}
                                className='add-unit-input'>
                                <input
                                    type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                rentSaleDropdown && (
                                    <div
                                        onClick={() => setRentSaleDropdown(prevState => !prevState)}
                                        className='add-unit-dropdown'>
                                        <div className='add-unit-dropdown-el'>Rent</div>
                                        <div className='add-unit-dropdown-el'>Sale</div>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Price:</div>
                            <div className='add-unit-input'>
                                R <input type="text" maxlength={10} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Deposit:</div>
                            <div className='add-unit-input'>
                                R <input type="text" maxlength={10} />
                            </div>
                        </div>
                    </div>

                    <div className='features-label'>Features</div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>In Unit Bath</div>
                            <div
                                onClick={() => setBathroomDropdown(prevState => !prevState)}
                                className='add-unit-input'>
                                <input type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                bathroomDropdown && (
                                    <div
                                        onClick={() => setBathroomDropdown(prevState => !prevState)}
                                        className='add-unit-dropdown'>
                                        <div className='add-unit-dropdown-el'>No In unit Bath</div>
                                        <div className='add-unit-dropdown-el'>1 Bath</div>
                                        <div className='add-unit-dropdown-el'>1.5 Bath</div>
                                        <div className='add-unit-dropdown-el'>2 Bath</div>
                                        <div className='add-unit-dropdown-el'>2.5 Bath</div>
                                        <div className='add-unit-dropdown-el'>3 Bath</div>
                                        <div className='add-unit-dropdown-el'>3.5 Bath</div>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>In Unit Kitchen</div>
                            <div
                                className='add-unit-input'
                                onClick={() => setKitchenDropdown(prevState => !prevState)} >
                                <input type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                kitchenDropdown && (
                                    <div
                                        onClick={() => setKitchenDropdown(prevState => !prevState)}
                                        className='add-unit-dropdown'>
                                        <div className='add-unit-dropdown-el'>No In unit Kitchen</div>
                                        <div className='add-unit-dropdown-el'>1 Kitchen</div>
                                        <div className='add-unit-dropdown-el'>2 Kitchen</div>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Paking</div>
                            <div
                                className='add-unit-input'
                                onClick={() => setParkingDropdown(prevState => !prevState)} >
                                <input type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                parkingDropdown && (
                                    <div
                                        onClick={() => setParkingDropdown(prevState => !prevState)}
                                        className='add-unit-dropdown'>
                                        <div className='add-unit-dropdown-el'>No parking space</div>
                                        <div className='add-unit-dropdown-el'>1 parking space</div>
                                        <div className='add-unit-dropdown-el'>2 parking space</div>
                                        <div className='add-unit-dropdown-el'>3 parking space</div>
                                        <div className='add-unit-dropdown-el'>4 parking space</div>
                                    </div>)
                            }
                        </div>
                    </div>
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
                            <input type='checkbox' />Furnished
                        </div>
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
                            <input type='checkbox' />balcony
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
                            Save Unit
                        </button>
                    </div>

                </div>

            </div>
        </div >
    );
}

export default AddUnit;