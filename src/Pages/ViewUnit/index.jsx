import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css';

import NavigationBar from '../../Components/NavigationBar';
import ContactAgent from './Components/ContactAgent';

import './viewUnit.css';
import SentMessage from '../../Components/SentMessage';


function ViewUnit() {

    const location = useLocation()

    const unitDetails = location.state

    const [activeTab, setActiveTab] = useState('accomodations')
    const [showContact, setShowContact] = useState(false)
    const [messageSent, setMessageSent] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 2000 })
    })

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (messageSent === true) {
        setTimeout(() => {
            setMessageSent(false);
            window.location.reload(false);
        }, 2000);
    }

    return (
        <div id='viewUnit'>
            <Helmet>
                <title>VIEW UNIT | DJS PROPERTIES</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/View-unit' />
            </Helmet>

            <NavigationBar activeTab={activeTab} />

            <div className='home-background' />

            <div className='view-unit-content'>
                <div className='view-unit-details-container'>

                    {messageSent && (<SentMessage />)}

                    {
                        showContact && (
                            <ContactAgent
                                setMessageSent={setMessageSent}
                                setShowContact={setShowContact} />
                        )
                    }
                    <img src={unitDetails.image} alt='' className='view-unit-img' />
                    <div
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        className='view-unit-details'>
                        <div className='view-unit-details-location'>
                            {unitDetails.residence.name}
                        </div>
                        <div className='view-unit-details-type'>{unitDetails.type} Unit</div>

                        <div className='view-unit-details-address'>
                            {unitDetails.residence.address}, {unitDetails.residence.city}
                        </div>

                        <div className='view-unit-details-price'>
                            <div>
                                <div>Price</div>
                                <div>R {unitDetails.price} pm</div>
                            </div>
                            <div>
                                <div>Features</div>
                                <div>16 sqm </div>
                                <div> 1 Bath</div>
                                <div>1 Kitchen</div>
                            </div>
                        </div>

                        <div className='view-unit-description'>
                            {unitDetails.description}
                        </div>

                        <div
                            onClick={() => setShowContact(true)}
                            className='view-unit-contact'>
                            Contact An Agent
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ViewUnit;