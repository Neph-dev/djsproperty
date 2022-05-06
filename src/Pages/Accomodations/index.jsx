import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet-async';

//import aws api and components.
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listAreas, listUnits } from '../../graphql/queries';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './accomodations.css';

import NavigationBar from '../../Components/NavigationBar';
import Map from '../../Components/Map';


function Accomodations() {

    const [activeTab, setActiveTab] = useState('accomodations')

    const [stateListArea, setStateListArea] = useState([])
    const [stateListUnits, setStateListUnits] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 2000 })
    })

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);

        const fetchAreas = async () => {
            try {
                setIsLoading(true)
                // Areas
                const areaResults = await API.graphql({
                    query: listAreas,
                    authMode: 'AWS_IAM',
                })
                let area = areaResults.data.listAreas.items
                console.log(area)
                setStateListArea(area)

                // units
                const unitResults = await API.graphql({
                    query: listUnits,
                    authMode: 'AWS_IAM',
                })
                let unit = unitResults.data.listUnits.items
                setStateListUnits(unit)

                setIsLoading(false)

            }
            catch (error) {
                console.log(error)
                setIsLoading(false)
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
                        {
                            isLoading ?
                                <div className='loader-container'>
                                    <div className='loader' />
                                </div>
                                :
                                stateListUnits.map((unit) => (
                                    <div key={unit.id} className='accomodation-card'>
                                        <div>
                                            <img
                                                src={unit.image}
                                                alt=''
                                                className='accomodation-card-img' />
                                            <div className='accomodation-card-details'>
                                                <div className='accomodation-card-location'>
                                                    <b>{unit.residence.name}</b>
                                                </div>
                                                <div className='accomodation-card-type'>
                                                    {unit.type} Unit
                                                </div>
                                                <div className='accomodation-card-price'>
                                                    Price: R {unit.price} pm
                                                </div>
                                                <div className='accomodation-card-view'>
                                                    <Link
                                                        to={{
                                                            state: unit,
                                                            pathname: '/View-unit'
                                                        }}>
                                                        View Unit
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
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
                                <div key={area.id} className='neighborhood-card'>
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