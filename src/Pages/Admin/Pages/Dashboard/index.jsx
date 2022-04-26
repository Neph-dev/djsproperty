import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet-async';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import './AdminDash.css';

import AdminDashHeader from '../../Components/AdminDashHeader';
import Residences from '../../Components/Residences';


function AdminDashboard() {

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id='Page-container'>

            <Helmet>
                <title>DJS PROPERTIES | ADMIN DASHBOARD</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Admin-dashboard' />
            </Helmet>

            <div className="Page-content">

                <AdminDashHeader />

                <div className='AdminDash-title'>
                    Areas & Residences
                </div>

                <Link to='/Add-residence'>
                    <AiOutlinePlusCircle
                        title='Add a residence | area.'
                        size={40}
                        className='AiOutlinePlusCircle' />
                </Link>

                <Residences />

            </div>

        </div>
    );
}

export default AdminDashboard;