import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';

import './statements.css';
import TenantDashHeader from '../../Components/TenantDashHeader';
import TenantDocuments from '../../Components/Documents';


function Statements() {

    const activeTab = 'statements'

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="statements">

            <Helmet>
                <title>DJS PROPERTIES | TENANT PORTAL</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/tenant-portal-statements' />
            </Helmet>

            <div className='statements-content'>
                <TenantDashHeader activeTab={activeTab} />

                <div className='tenant-tab-name'>Statments</div>

                <TenantDocuments />
            </div>

        </div>
    );
}

export default Statements;