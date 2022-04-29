import React, { useEffect, useState } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//import aws api and components.
import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';

import { BiArrowBack } from 'react-icons/bi';

import './residenceDetails.css';
import AdminDashHeader from '../../Components/AdminDashHeader';
import SuccessMessage from '../../../../Components/SuccessMessage';
import ConfirmDelete from '../../../../Components/ConfirmDelete';


function ResidenceDetails() {

    const location = useLocation()

    const [succeeded, setSucceeded] = useState(false)

    const areaDetails = location.state.area
    const residenceDetails = location.state

    const [edit, setEdit] = useState(false)

    const [updated, setUpdated] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const [deleting, setDeleting] = useState(false)

    // Residence States
    const [residenceNameInput, setResidenceNameInput] = useState(residenceDetails.name)
    const [residenceAddressInput, setResidenceAddressInput] = useState(residenceDetails.address)
    const [residenceCityInput, setResidenceCityInput] = useState(residenceDetails.city)
    const [residencePostalInput, setResidencePostalInput] = useState(residenceDetails.postalCode)
    const [residenceTotalUnitsInput, setResidenceTotalUnitsInput] = useState(residenceDetails.totalUnits)
    const [residenceTotalCapacityInput, setResidenceTotalCapacityInput] = useState(residenceDetails.totalCapacity)
    const [residenceImageInput, setResidenceImageInput] = useState(residenceDetails.image)
    const [residenceFeaturesInput, setResidenceFeaturesInput] = useState([])


    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // This Function is used to delete a residence
    // then reload the page.
    const handleDelete = async () => {
        const residenceDetail = {
            id: residenceDetails.id,
        };
        const deleteResidence = await API.graphql({
            query: mutations.deleteResidence,
            variables: { input: residenceDetail }
        });
        setSucceeded(true)

        setDeleted(true)
    }
    if (succeeded === true) {
        setTimeout(() => {
            setSucceeded(false);
            window.location.reload(false);
        }, 2000);
    }
    if (deleted) {
        return <Redirect to='/Admin-dashboard' />
    }

    // This Function is used to update a residence
    // then reload the page.
    const updateResidence = async () => {
        const residenceDetail = {

            id: residenceDetails.id,
            name: residenceNameInput,
            address: residenceAddressInput,
            city: residenceCityInput,
            postalCode: residencePostalInput,
            image: residenceImageInput,
            totalUnits: residenceTotalUnitsInput,
            totalCapacity: residenceTotalCapacityInput,
            feature: residenceFeaturesInput,

            areaID: areaDetails.id
        };
        const updateResidence = await API.graphql({
            query: mutations.updateResidence,
            variables: { input: residenceDetail }
        });

        setSucceeded(true)

        setUpdated(true)
    }

    if (updated) {
        return <Redirect to='/Admin-dashboard' />
    }

    return (
        <div id='residence-details'>

            <Helmet>
                <title>DJS PROPERTIES | ADMIN DASHBOARD</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Residence-details' />
            </Helmet>

            <div className='residence-details-content'>

                <AdminDashHeader />

                <Link to='/Admin-dashboard'>
                    <BiArrowBack size={35} className='BiArrowBack' />
                </Link>

                {succeeded && (<SuccessMessage />)}

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='add-unit-title'>Residence <b>Berario Palms</b> Details</div>
                    <div
                        onClick={() => setEdit(true)}
                        style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                        Edit
                    </div>
                </div>

                <div className='add-unit-inputs-container'>

                    <div className='features-label'>Neighborhood Information</div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Name of the neighborhood</div>
                            <div className='add-unit-input'>
                                <input
                                    value={areaDetails.name}
                                    type="text"
                                    maxLength={15}
                                    readOnly={true} />
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
                                    value={areaDetails.description}
                                    name="message"
                                    type="text"
                                    placeholder="Type a description here."
                                    maxLength={500}
                                    className='nei-description' readOnly={true} />
                            </div>
                        </div>
                    </div>

                    <div className='features-label'>Residence Information</div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Residence Name</div>
                            <div className='add-unit-input'>
                                <input
                                    value={residenceNameInput}
                                    onChange={(e) => setResidenceNameInput(e.target.value)}
                                    type="text"
                                    maxLength={15}
                                    readOnly={edit ? false : true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Residence Address</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceAddressInput(e.target.value)}
                                    value={residenceAddressInput}
                                    type="text"
                                    maxLength={40}
                                    readOnly={edit ? false : true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>City</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceCityInput(e.target.value)}
                                    value={residenceCityInput}
                                    type="text"
                                    maxLength={40}
                                    readOnly={edit ? false : true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Postal Code</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidencePostalInput(e.target.value)}
                                    value={residencePostalInput}
                                    type="text"
                                    maxLength={5}
                                    readOnly={edit ? false : true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Image URL</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceImageInput(e.target.value)}
                                    value={residenceImageInput}
                                    type="text"
                                    maxLength={5}
                                    readOnly={edit ? false : true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Total units in Residence</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceTotalUnitsInput(e.target.value)}
                                    value={residenceTotalUnitsInput}
                                    type="text"
                                    maxLength={15}
                                    readOnly={edit ? false : true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Total Residence capacity</div>
                            <div className='add-unit-input'>
                                <input
                                    onChange={(e) => setResidenceTotalCapacityInput(e.target.value)}
                                    value={residenceTotalCapacityInput}
                                    type="text"
                                    maxLength={4}
                                    readOnly={edit ? false : true} />People
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
                                <input type="text" maxLength={15} />
                            </div>
                            <button>Add feature</button>
                        </div>
                    </div>

                    <div>
                        <button
                            className={
                                edit === true ?
                                    'addResidence-add-nei-btn-act'
                                    : 'addResidence-add-nei-btn'
                            }
                            onClick={updateResidence}
                            disabled={edit === false ? true : false}>
                            Save Residence
                        </button>
                        <button
                            className='residence-delete-btn'
                            onClick={() => setDeleting(true)}>
                            Delete Residence
                        </button>
                    </div>

                    {
                        deleting && (
                            <ConfirmDelete
                                handleDelete={handleDelete}
                                setDeleting={setDeleting} />)
                    }

                </div>

            </div>

        </div>
    );
}

export default ResidenceDetails;