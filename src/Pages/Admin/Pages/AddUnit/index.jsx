import React, { useState, useEffect } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';

//import aws api and components.
import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';

import './addUnit.css';
import AdminDashHeader from '../../Components/AdminDashHeader';


function AddUnit() {

    const location = useLocation()
    const area = location.state.area
    const residenceDetails = location.state

    const [typeOfUnitDropdown, setTypeOfUnitDropdown] = useState(false)
    const [singleSharedDropdown, setSingleSharedDropdown] = useState(false)
    const [rentSaleDropdown, setRentSaleDropdown] = useState(false)
    const [bathroomDropdown, setBathroomDropdown] = useState(false)
    const [kitchenDropdown, setKitchenDropdown] = useState(false)
    const [parkingDropdown, setParkingDropdown] = useState(false)

    const [messageInput, setMessageInput] = useState('')

    // Unit States
    const [unitTypeInput, setUnitTypeInput] = useState('')
    const [unitStyleInput, setUnitStyleInput] = useState('')
    const [unitCapacityInput, setUnitCapacityInput] = useState('')
    const [unitDimensionsInput, setUnitDimensionsInput] = useState('')
    const [unitNumberInput, setUnitNumberInput] = useState('')
    const [unitRentSaleInput, setUnitRentSaleInput] = useState('')
    const [unitPriceInput, setUnitPriceInput] = useState('')
    const [unitDepositInput, setUnitDepositInput] = useState('')
    const [unitDescriptionInput, setUnitDescriptionInput] = useState('')
    const [unitImageInput, setUnitImageInput] = useState('')
    const [unitFeaturesInput, setUnitFeaturesInput] = useState([])

    const [createdUnit, setCreatedUnit] = useState(false)

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // This Function is used to create a new area(Neighborhood)
    // then reload the page.
    const createNewUnit = async () => {
        const unitDetails = {
            type: unitTypeInput,
            style: unitStyleInput,
            capacity: unitCapacityInput,
            dimensions: unitDimensionsInput,
            unitNumber: unitNumberInput,
            rent_sale: unitRentSaleInput,
            price: unitPriceInput,
            deposit: unitDepositInput,
            description: unitDescriptionInput,
            image: unitImageInput,
            feature: unitFeaturesInput,

            residenceID: residenceDetails.id

        };
        const newUnit = await API.graphql({
            query: mutations.createUnit,
            variables: { input: unitDetails }
        });

        setCreatedUnit(true)
    }

    if (createdUnit) {
        return <Redirect to={{ state: residenceDetails, area, pathname: '/units-tenants' }} />
    }

    return (
        <div id='add-unit'>

            <div className='add-unit-content'>

                <AdminDashHeader />

                <Link to={{ state: residenceDetails, area, pathname: '/units-tenants' }}>
                    <BiArrowBack size={35} className='us-ts-BiArrowBack' />
                </Link>

                <div>
                    <div className='add-unit-title'>Add a unit in <b>{residenceDetails.name}</b></div>
                </div>

                <div className='add-unit-inputs-container'>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Type of unit</div>
                            <div
                                onClick={() => {
                                    setTypeOfUnitDropdown(prevState => !prevState)
                                    setSingleSharedDropdown(false)
                                }}
                                className='add-unit-input'>
                                <input
                                    value={unitTypeInput}
                                    onChange={(e) => setUnitTypeInput(e.target.value)}
                                    type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                typeOfUnitDropdown && (
                                    <div
                                        onClick={() => {
                                            setTypeOfUnitDropdown(prevState => !prevState)
                                        }}
                                        className='add-unit-dropdown' >
                                        <div
                                            onClick={() => { setUnitTypeInput('Bachelor') }}
                                            className='add-unit-dropdown-el'>Bachelor</div>
                                        <div
                                            onClick={() => { setUnitTypeInput('Room') }}
                                            className='add-unit-dropdown-el'>Room</div>
                                        <div
                                            onClick={() => { setUnitTypeInput('1 Bedroom') }}
                                            className='add-unit-dropdown-el'>1 Bedroom</div>
                                        <div
                                            onClick={() => { setUnitTypeInput('2 Bedroom') }}
                                            className='add-unit-dropdown-el'>2 Bedroom</div>
                                        <div
                                            onClick={() => { setUnitTypeInput('3 Bedroom') }}
                                            className='add-unit-dropdown-el'>3 Bedroom</div>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Shared / Single unit</div>
                            <div
                                onClick={() => {
                                    setSingleSharedDropdown(prevState => !prevState)
                                }}
                                className='add-unit-input'>
                                <input
                                    value={unitStyleInput}
                                    onChange={(e) => setUnitStyleInput(e.target.value)}
                                    type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                singleSharedDropdown && (
                                    <div
                                        onClick={() => { setSingleSharedDropdown(prevState => !prevState) }}
                                        className='add-unit-dropdown'>
                                        <div
                                            onClick={() => setUnitStyleInput('Shared')}
                                            className='add-unit-dropdown-el'>Shared</div>
                                        <div
                                            onClick={() => setUnitStyleInput('Single')}
                                            className='add-unit-dropdown-el'>Single</div>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Capacity</div>
                            <div className='add-unit-input'>
                                <input
                                    value={unitCapacityInput}
                                    onChange={(e) => setUnitCapacityInput(e.target.value)}
                                    type="text"
                                    maxLength={6} /> People
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Dimemsion</div>
                            <div className='add-unit-input'>
                                <input
                                    value={unitDimensionsInput}
                                    onChange={(e) => setUnitDimensionsInput(e.target.value)}
                                    type="text"
                                    maxLength={10} /> m2
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Unit Number</div>
                            <div className='add-unit-input'>
                                <input
                                    value={unitNumberInput}
                                    onChange={(e) => setUnitNumberInput(e.target.value)}
                                    type="text"
                                    maxLength={5} />
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
                                    value={unitRentSaleInput}
                                    onChange={(e) => setUnitRentSaleInput(e.target.value)}
                                    type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                rentSaleDropdown && (
                                    <div
                                        onClick={() => setRentSaleDropdown(prevState => !prevState)}
                                        className='add-unit-dropdown'>
                                        <div
                                            onClick={() => setUnitRentSaleInput('Rent')}
                                            className='add-unit-dropdown-el'>Rent</div>
                                        <div
                                            onClick={() => setUnitRentSaleInput('Sale')}
                                            className='add-unit-dropdown-el'>Sale</div>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Price:</div>
                            <div className='add-unit-input'>
                                R <input
                                    value={unitPriceInput}
                                    onChange={(e) => setUnitPriceInput(e.target.value)}
                                    type="text"
                                    maxLength={10} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Deposit:</div>
                            <div className='add-unit-input'>
                                R <input
                                    value={unitDepositInput}
                                    onChange={(e) => setUnitDepositInput(e.target.value)}
                                    type="text"
                                    maxLength={10} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Image URL:</div>
                            <div className='add-unit-input'>
                                <input
                                    value={unitImageInput}
                                    onChange={(e) => setUnitImageInput(e.target.value)}
                                    type="text"
                                    maxLength={100} />
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
                                    value={unitDescriptionInput}
                                    onChange={(e) => setUnitDescriptionInput(e.target.value)}
                                    name="message"
                                    type="text"
                                    placeholder="Type a description here."
                                    maxLength={500}
                                    className='nei-description' />
                                {unitDescriptionInput.length < 10
                                    ? `0${unitDescriptionInput.length}`
                                    : unitDescriptionInput.length}/500
                            </div>
                        </div>
                    </div>

                    <div className='features-label'>Features</div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>In Unit Bath</div>
                            <div
                                onClick={() => {
                                    setBathroomDropdown(prevState => !prevState)
                                    setKitchenDropdown(false)
                                    setParkingDropdown(false)
                                }}
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
                                onClick={() => {
                                    setKitchenDropdown(prevState => !prevState)
                                    setParkingDropdown(false)
                                }} >
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
                                <input type="text" maxLength={15} />
                            </div>
                            <button>Add feature</button>
                        </div>
                    </div>

                    <div>
                        <button
                            className={
                                unitTypeInput !== ''
                                    && unitStyleInput !== ''
                                    && unitCapacityInput !== ''
                                    && unitDimensionsInput !== ''
                                    && unitNumberInput !== ''
                                    && unitPriceInput !== ''
                                    && unitDepositInput !== ''
                                    && unitImageInput !== ''
                                    && unitDescriptionInput !== ''
                                    && unitRentSaleInput !== '' ?
                                    'addResidence-add-nei-btn-act'
                                    : 'addResidence-add-nei-btn'
                            }
                            disabled={
                                unitTypeInput !== ''
                                    && unitStyleInput !== ''
                                    && unitCapacityInput !== ''
                                    && unitDimensionsInput !== ''
                                    && unitNumberInput !== ''
                                    && unitPriceInput !== ''
                                    && unitDepositInput !== ''
                                    && unitImageInput !== ''
                                    && unitDescriptionInput !== ''
                                    && unitRentSaleInput !== '' ?
                                    false : true}
                            onClick={createNewUnit}>
                            Add Unit
                        </button>
                    </div>

                </div>

            </div>
        </div >
    );
}

export default AddUnit;