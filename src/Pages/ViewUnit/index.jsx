import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css';

import NavigationBar from '../../Components/NavigationBar';
import ContactAgent from './Components/ContactAgent';

import './viewUnit.css';
import SentMessage from '../../Components/SentMessage';


function ViewUnit() {

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
                    <div className='view-unit-img' />
                    <div
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        className='view-unit-details'>
                        <div className='view-unit-details-location'>Richmond, Johannesburg</div>
                        <div className='view-unit-details-type'>Bachelor Unit</div>

                        <div className='view-unit-details-address'>
                            Empire Road Richmond, Johannesburg
                        </div>

                        <div className='view-unit-details-price'>
                            <div>
                                <div>Price</div>
                                <div>R 3,729.36 pm</div>
                            </div>
                            <div>
                                <div>Features</div>
                                <div>16 sqm </div>
                                <div> 1 Bath</div>
                                <div>1 Kitchen</div>
                            </div>
                        </div>

                        <div className='view-unit-description'>
                            Bachelor unit to let on Empire Road in Richmond, Johannesburg.
                            Close to UJ (University of Johannesburg), Wits and SABC. Within
                            walking distance to shops and other amenities.

                            The bachelor flat is a single room, suitable for a double
                            bed, with built in cupboards and a small kitchenette. Bathroom
                            consists of shower, basin and toilet, no bath.
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