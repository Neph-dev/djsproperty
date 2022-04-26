import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

//import aws api and components.
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listAreas } from '../../../../graphql/queries';
import * as mutations from '../../../../graphql/mutations';

// Import icons.
import { BiArrowBack } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';

// Import styling components
import './addResidence.css';

import AdminDashHeader from '../../Components/AdminDashHeader';


function AddResidence() {

    const [neighborhoodDropdown, setNeighborhoodDropdown] = useState(false)

    // Area States
    const [selectedArea, setSelectedArea] = useState(false)
    const [addArea, setAddArea] = useState(false)
    const [areaID, setAreaID] = useState('')
    const [stateListArea, setStateListArea] = useState([])
    const [areaNameInput, setAreaNameInput] = useState('')
    const [areaDescriptionInput, setAreaDescriptionInput] = useState('')
    const [areaImageInput, setAreaImageInput] = useState('')

    // Residence States
    const [residenceNameInput, setResidenceNameInput] = useState('')
    const [residenceAddressInput, setResidenceAddressInput] = useState('')
    const [residenceCityInput, setResidenceCityInput] = useState('')
    const [residencePostalInput, setResidencePostalInput] = useState('')
    const [residenceTotalUnitsInput, setResidenceTotalUnitsInput] = useState('')
    const [residenceTotalCapacityInput, setResidenceTotalCapacityInput] = useState('')
    const [residenceImageInput, setResidenceImageInput] = useState('')
    const [residenceFeaturesInput, setResidenceFeaturesInput] = useState([])

    // This Function is used to create a new area(Neighborhood)
    // then reload the page.
    const createNewArea = async () => {
        if (
            addArea === true
            && areaNameInput !== ''
            && areaDescriptionInput !== ''
            && areaImageInput !== '') {
            const areaDetails = {
                name: areaNameInput,
                description: areaDescriptionInput,
                image: areaImageInput,
            };
            const newArea = await API.graphql({
                query: mutations.createArea,
                variables: { input: areaDetails }
            });

            window.location.reload(false);
        }
    }

    // This Function is used to create a new residence
    // then reload the page.
    const createNewResidence = async () => {
        const residenceDetails = {
            name: residenceNameInput,
            address: residenceAddressInput,
            city: residenceCityInput,
            postalCode: residencePostalInput,
            image: residenceImageInput,
            totalUnits: residenceTotalUnitsInput,
            totalCapacity: residenceTotalCapacityInput,
            feature: residenceFeaturesInput,

            areaID: areaID
        };
        const newResidence = await API.graphql({
            query: mutations.createResidence,
            variables: { input: residenceDetails }
        });

        window.location.reload(false);
    }

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);

        const fetchAreas = async () => {
            try {
                // Areas
                const areaResults = await API.graphql(
                    graphqlOperation(listAreas)
                )
                let area = areaResults.data.listAreas.items
                setStateListArea(area)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchAreas();
    }, [])

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
                    <BiArrowBack size={30} className='BiArrowBack' />
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
                                <input type="text" />
                                <MdKeyboardArrowDown size={25} />
                            </div>
                            {
                                neighborhoodDropdown && (
                                    <div
                                        onClick={() => {
                                            setNeighborhoodDropdown(prevState => !prevState)
                                        }}
                                        className='add-unit-dropdown' >
                                        <div
                                            onClick={() => {
                                                setAddArea(true)
                                                setAreaNameInput('')
                                                setAreaImageInput('')
                                                setAreaDescriptionInput('')
                                            }}
                                            className='add-unit-dropdown-el'>
                                            + Add a new neighborhood
                                        </div>
                                        {
                                            stateListArea.map((area) => (
                                                <div
                                                    key={area.key}
                                                    onClick={() => {
                                                        setSelectedArea(true)
                                                        setAddArea(false)
                                                        setAreaNameInput(area.name)
                                                        setAreaImageInput(area.image)
                                                        setAreaDescriptionInput(area.description)
                                                        setAreaID(area.id)
                                                    }}
                                                    className='add-unit-dropdown-el'>
                                                    {area.name}
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Name of the neighborhood</div>
                            <div className='add-unit-input'>
                                <input
                                    value={areaNameInput}
                                    onChange={(e) => setAreaNameInput(e.target.value)}
                                    type="text"
                                    maxLength={30}
                                    disabled={addArea ? false : true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Image URL</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setAreaImageInput(e.target.value)}
                                    value={areaImageInput}
                                    type="text"
                                    maxLength={200}
                                    disabled={addArea ? false : true} />
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
                                    value={areaDescriptionInput}
                                    onChange={(e) => setAreaDescriptionInput(e.target.value)}
                                    name="message"
                                    type="text"
                                    placeholder="Type a description here."
                                    maxLength={500}
                                    className='nei-description'
                                    disabled={addArea ? false : true} />
                                {
                                    areaDescriptionInput.length < 10
                                        ? `0${areaDescriptionInput.length}`
                                        : areaDescriptionInput.length
                                }/500
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            className={
                                addArea
                                    && areaNameInput !== ''
                                    && areaDescriptionInput !== ''
                                    && areaImageInput !== '' ?
                                    'addResidence-add-nei-btn-act'
                                    : 'addResidence-add-nei-btn'
                            }
                            onClick={createNewArea}
                            disabled={
                                addArea
                                    && areaNameInput !== ''
                                    && areaDescriptionInput !== ''
                                    && areaImageInput !== '' ?
                                    false : true}>
                            Add Area
                        </button>
                    </div>

                    <div className='features-label'>Residence Information</div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Residence Name</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceNameInput(e.target.value)}
                                    type="text"
                                    maxLength={30} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Residence Address</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceAddressInput(e.target.value)}
                                    type="text"
                                    maxLength={100} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>City</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceCityInput(e.target.value)}
                                    type="text"
                                    maxLength={100} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Postal Code</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidencePostalInput(e.target.value)}
                                    type="text"
                                    maxLength={100} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Image URL</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceImageInput(e.target.value)}
                                    type="text"
                                    maxLength={100} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Total units in Residence</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceTotalUnitsInput(e.target.value)}
                                    type="text"
                                    placeholder="Enter numbers only."
                                    maxLength={4} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Total Residence capacity</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceTotalCapacityInput(e.target.value)}
                                    type="text"
                                    placeholder="Enter numbers only."
                                    maxLength={4} />People
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
                            <input
                                value='Wifi'
                                type='checkbox' />Wifi
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
                                <input type="text" maxLength={15} />
                            </div>
                            <button>Add feature</button>
                        </div>
                    </div>

                    <div>
                        <button
                            className={
                                selectedArea
                                    && residenceNameInput !== ''
                                    && residenceAddressInput !== ''
                                    && residenceImageInput !== ''
                                    && residenceTotalUnitsInput !== ''
                                    && residenceTotalCapacityInput !== ''
                                    && areaImageInput !== '' ?
                                    'addResidence-add-nei-btn-act'
                                    : 'addResidence-add-nei-btn'
                            }
                            disabled={
                                selectedArea
                                    && residenceNameInput !== ''
                                    && residenceAddressInput !== ''
                                    && residenceCityInput !== ''
                                    && residencePostalInput !== ''
                                    && residenceImageInput !== ''
                                    && residenceTotalUnitsInput !== ''
                                    && residenceTotalCapacityInput !== ''
                                    && areaImageInput !== '' ?
                                    false : true}
                            onClick={createNewResidence}>
                            Save Residence
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddResidence;