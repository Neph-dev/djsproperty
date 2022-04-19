import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet-async';

//import aws api and components.
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listAreas } from '../../graphql/queries';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './accomodations.css';

import NavigationBar from '../../Components/NavigationBar';
import Map from '../../Components/Map';


function Accomodations() {

    const [activeTab, setActiveTab] = useState('accomodations')

    const [stateListArea, setStateListArea] = useState([])

    useEffect(() => {
        AOS.init({ duration: 2000 })
    })

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
                console.log(area)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchAreas();
    }, [])

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
                        {
                            stateListArea.map((area) => (
                                <div className='neighborhood-card'>
                                    <div>
                                        <img src={area.image} alt='' className='neighborhood-card-img' />
                                        <div className='neighborhood-card-details'>
                                            <div className='neighborhood-card-location'>
                                                {area.name}
                                            </div>
                                            <div className='neighborhood-card-description'>
                                                {area.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </section>

                {/* <section id="map">
                    <div
                        data-aos="fade-in"
                        data-aos-duration="1500"
                        className='map-appartments-title'>
                        Map
                    </div>

                    <Map />

                </section> */}

            </div>

        </div>
    );
}

export default Accomodations;