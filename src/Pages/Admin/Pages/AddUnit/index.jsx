import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './addUnit.css';
import AdminDashHeader from '../../Components/AdminDashHeader';


function AddUnit() {

    const [typeOfUnitDropdown, setTypeOfUnitDropdown] = useState(false)
    const [singleSharedDropdown, setSingleSharedDropdown] = useState(false)
    const [rentSaleDropdown, setRentSaleDropdown] = useState(false)

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
                            <div className='add-unit-input'>
                                <input
                                    type="text"
                                    onClick={() => setTypeOfUnitDropdown(prevState => !prevState)} />
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
                            <div className='add-unit-input'>
                                <input type="text" onClick={() => setSingleSharedDropdown(prevState => !prevState)} />
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
                                <input type="text" maxlength={6} /> People
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
                            <div className='add-unit-input'>
                                <input
                                    type="text"
                                    onClick={() => setRentSaleDropdown(prevState => !prevState)} />
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
                            <div className='add-unit-input'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Bathrooms</div>
                            <div className='add-unit-input'>
                                <input type="text" maxlength={2} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>In Unit Kitchen</div>
                            <div className='add-unit-input'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Kitchen</div>
                            <div className='add-unit-input'>
                                <input type="text" maxlength={2} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}

export default AddUnit;