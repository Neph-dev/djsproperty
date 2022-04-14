import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './home.css';

import NavigationBar from '../../Components/NavigationBar';


function Home() {

    const [activeTab, setActiveTab] = useState('home')

    useEffect(() => {
        AOS.init({ duration: 2000 })
    })

    return (
        <div id='home'>

            <Helmet>
                <title>Welcome to DJS PROPERTIES</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/' />
            </Helmet>

            <NavigationBar activeTab={activeTab} />

            <div className='home-background'>
                <div
                    data-aos="fade-in"
                    data-aos-duration="1500"
                    className='welcome-text-container'>
                    <div>
                        <div className='welcome-text-title'>Welcome to DJS PROPERTIES</div>
                        <div className='welcome-text'>The Best Single & Shared Accomodation in Johannesburg</div>
                    </div>
                </div>
                <div className='apply-btn'>
                    <Link to='/Accomodations'>Accomodations</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;