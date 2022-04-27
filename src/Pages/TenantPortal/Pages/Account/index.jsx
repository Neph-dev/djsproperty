import React, { useEffect, useState } from 'react';

import { Auth } from "aws-amplify";

import { Helmet } from 'react-helmet-async';

import './account.css';
import TenantDashHeader from '../../Components/TenantDashHeader';


function Account() {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [residence, setResidence] = useState('')
    const [unitNumber, setUnitNumber] = useState('')
    const [roomNumber, setRoomNumber] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const activeTab = 'account'

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);

        try {
            Auth.currentAuthenticatedUser({
                // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
                bypassCache: false
            }).then(user => {
                setFirstName(user.attributes.name)
                setLastName(user.attributes.family_name)
                setEmail(user.attributes.email)
                setPhoneNumber(user.attributes.phone_number)
                setAddress(user.attributes.address)
                setGender(user.attributes.gender)
                setResidence(user.attributes['custom:residence'])
                setUnitNumber(user.attributes['custom:unitNumber'])
                setRoomNumber(user.attributes['custom:roomNumber'])
                // TBD
            }).catch(err => console.log(err));
        }
        catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <div id="tennant-account">

            <Helmet>
                <title>DJS PROPERTIES | TENANT PORTAL</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/tenant-portal-account' />
            </Helmet>

            <div className='tennant-account-content'>
                <TenantDashHeader activeTab={activeTab} />

                <div className='tenant-tab-name'>Account</div>

                <div className='add-unit-inputs-container'>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Full Name</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="text"
                                    value={firstName + ' ' + lastName}
                                    maxLength={100} disabled={true} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Email</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="email"
                                    value={email}
                                    maxLength={30} disabled={true} />
                            </div>
                        </div>
                    </div>
                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Phone Number</div>
                            <div className='tenant-account-input'>
                                <input
                                    value={phoneNumber}
                                    type="text"
                                    maxLength={15} disabled={true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Residence Name</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="text"
                                    value={residence}
                                    maxLength={100} disabled={true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Address</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="text"
                                    value={address}
                                    maxLength={100} disabled={true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Unit number</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="text"
                                    value={unitNumber}
                                    maxLength={100} disabled={true} />
                            </div>
                        </div>
                    </div>

                    <div className='add-unit-input-container'>
                        <div>
                            <div className='add-unit-input-label'>Room number</div>
                            <div className='tenant-account-input'>
                                <input
                                    type="text"
                                    value={roomNumber}
                                    maxLength={100} disabled={true} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Account;