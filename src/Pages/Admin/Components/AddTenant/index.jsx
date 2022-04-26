import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//import aws api and components.
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listResidences, listUnits } from '../../../../graphql/queries';

import { BiArrowBack } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

import AdminDashHeader from '../../Components/AdminDashHeader';


function AddTenant() {

    const location = useLocation()

    const area = location.state.area
    const residenceDetails = location.state

    const [addStatement, setAddStatement] = useState(false)

    const [residenceDropdown, setResidenceDropdown] = useState(false)
    const [unitDropdown, setUnitDropdown] = useState(false)

    const [residences, setResidences] = useState([])
    const [units, setUnits] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [residence, setResidence] = useState('')

    const [streetAdress, setStreetAdress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [address, setAddress] = useState('')

    const [gender, setGender] = useState('')
    const [unit, setUnit] = useState('')
    const [roomNumber, setRoomNumber] = useState('')
    const [password, setPassword] = useState('havilah1')

    let nextToken;

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);

        const fetchAreas = async (limit) => {
            try {
                setIsLoading(true);
                // Units
                const unitResults = await API.graphql(
                    graphqlOperation(listUnits)
                )
                let units = unitResults.data.listUnits.items
                setUnits(units)

                // Residence
                const residenceResults = await API.graphql(
                    graphqlOperation(listResidences)
                )
                let residence = residenceResults.data.listResidences.items
                setResidences(residence)

                setIsLoading(false);

            }
            catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }
        fetchAreas();
    }, [])

    async function signUp() {
        try {

            setIsLoading(true);

            // Sign up a new tenant
            const { user } = await Auth.signUp({
                username: email,
                password,
                attributes: {
                    name: firstName,
                    family_name: lastName,
                    email,
                    phone_number: phoneNumber,
                    gender: gender,
                    address: streetAdress + ' ' + city + ' ' + postalCode,
                    'custom:residence': residence,
                    'custom:unitNumber': unit,
                    'custom:roomNumber': roomNumber,
                }
            });

            // After sign up, add user to the "tenant" cognito user pool
            let apiName = 'AdminQueries';
            let path = '/addUserToGroup';
            let myInit = {
                body: {
                    "username": email,
                    "groupname": "tenant"
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
                }
            }
            await API.post(apiName, path, myInit);

            // After adding user to group, confirm user
            let pathConfirm = '/confirmUserSignUp';
            let myInitConfirm = {
                body: {
                    "username": email,
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
                }
            }
            await API.post(apiName, pathConfirm, myInitConfirm);

            setIsLoading(false);

            window.location.reload(false)

        } catch (error) {
            console.log('error signing up:', error);
            setIsLoading(false);
        }

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
                <link rel='canonical' href='/Add-tenant' />
            </Helmet>

            <AdminDashHeader />

            <Link to={{ state: residenceDetails, area, pathname: '/Manage-tenants' }}>
                <BiArrowBack size={35} className='us-ts-BiArrowBack' />
            </Link>

            {isLoading ?
                <div className='loader-container'>
                    <div className='loader' />
                </div> : []}

            <div>
                <div className='add-unit-title'>Add New Tenant</div>
            </div>


            <div className='add-unit-inputs-container'>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>First name</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
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
                                onChange={(e) => setLastName(e.target.value)}
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
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                maxLength={15} />
                        </div>
                    </div>
                </div>
                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Gender</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                onChange={(e) => setGender(e.target.value)}
                                maxLength={15} />
                        </div>
                    </div>
                </div>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Residence</div>
                        <div
                            onClick={() => {
                                setResidenceDropdown(prevState => !prevState)
                                setUnitDropdown(false)
                            }}
                            className='add-unit-input'>
                            <input
                                value={residence}
                                type="text"
                                maxLength={50} />
                            <MdKeyboardArrowDown size={25} />
                        </div>
                        {
                            residenceDropdown && (
                                residences.map((residence) => (
                                    <div
                                        key={residence.id}
                                        onClick={() => setResidenceDropdown(prevState => !prevState)}
                                        className='add-unit-dropdown'>
                                        <div
                                            onClick={() => {
                                                setResidence(residence.name)
                                                setStreetAdress(residence.address)
                                                setCity(residence.city)
                                                setPostalCode(residence.postalCode)
                                            }}
                                            className='add-unit-dropdown-el'>
                                            {residence.name}
                                        </div>
                                    </div>
                                )))
                        }
                    </div>
                </div>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Address</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                value={streetAdress + ' ' + city + ' ' + postalCode}
                                maxLength={100} readOnly />
                        </div>
                    </div>
                </div>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Unit Number</div>
                        <div
                            onClick={() => {
                                setUnitDropdown(prevState => !prevState)
                                setResidenceDropdown(false)
                            }}
                            className='add-unit-input'>
                            <input
                                value={unit}
                                maxLength={50} />
                            <MdKeyboardArrowDown size={25} />
                        </div>
                        {
                            unitDropdown && (
                                units.map((unit) => (
                                    <div
                                        key={unit.id}
                                        onClick={() => {
                                            setUnitDropdown(prevState => !prevState)
                                        }}
                                        className='add-unit-dropdown'>
                                        <div
                                            onClick={() => setUnit(unit.unitNumber)}
                                            className='add-unit-dropdown-el'>
                                            {unit.unitNumber}
                                        </div>
                                    </div>
                                )))
                        }
                    </div>
                </div>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Room Number</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                onChange={(e) => setRoomNumber(e.target.value)}
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

                <div>
                    <button
                        className='save-btn'
                        onClick={signUp}>
                        Save
                    </button>
                </div>

            </div>

        </div>
    );
}

export default AddTenant;