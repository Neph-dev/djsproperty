import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './accomodations.css';

import NavigationBar from '../../Components/NavigationBar';


function Accomodations() {

    const [activeTab, setActiveTab] = useState('accomodations')

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 })
    })

    return (
        <div id="accomodations">

            <Helmet>
                <title>Accomodations | DJS PROPERTIES</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Accomodations' />
            </Helmet>


            <NavigationBar activeTab={activeTab} />

            <div className='home-background' />

            <div className='accomodations-content'>
                <section id='featured-appartments'>
                    <div
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        className='featured-appartments-title'>
                        Featured Appartments
                    </div>

                    <div className='accomodation-cards-container'>
                        <div className='accomodation-card'>
                            <div>
                                <div className='accomodation-card-img' />
                                <div className='accomodation-card-details'>
                                    <div className='accomodation-card-location'>
                                        <b>Richmond</b>, Johannesburg
                                    </div>
                                    <div className='accomodation-card-type'>
                                        Bachelor Unit
                                    </div>
                                    <div className='accomodation-card-price'>
                                        Price: R 3729.36 pm
                                    </div>
                                    <div className='accomodation-card-view'>
                                        <Link to='/View-unit'>View Unit</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id='neighborhoods'>
                    <div
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        className='neighborhoods-appartments-title'>
                        Neighborhoods
                    </div>

                    <div className='neighborhoods-cards-container'>
                        <div className='neighborhood-card'>
                            <div>
                                <div className='neighborhood-card-img' />
                                <div className='neighborhood-card-details'>
                                    <div className='neighborhood-card-location'>
                                        Berario
                                    </div>
                                    <div className='neighborhood-card-description'>
                                        Berario is a suburb of Johannesburg, in the
                                        South African province of Gauteng. It is
                                        located in Region 4. It is located just
                                        below Northcliff Hill and close to Cresta
                                        Shopping Centre, one of the biggest malls
                                        in South Africa.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id='map'>

                </section>

            </div>

        </div>
    );
}

export default Accomodations;