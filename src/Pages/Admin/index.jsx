import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import './admin.css';

import AdminDashHeader from './Components/AdminDashHeader';
import Residences from './Pages/Residences';


function Admin() {

    return (
        <div id='admin'>

            <Helmet>
                <title>DJS PROPERTIES | ADMIN DASHBOARD</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Admin-dashboard' />
            </Helmet>

            <div className="admin-content">

                <AdminDashHeader />

                <Residences />
            </div>

        </div>
    );
}

export default Admin;