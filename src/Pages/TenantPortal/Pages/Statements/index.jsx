import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';

import { Auth } from "aws-amplify";

import './statements.css';
import TenantDashHeader from '../../Components/TenantDashHeader';
import TenantDocuments from '../../Components/Documents';


function Statements() {

    const activeTab = 'statements'

    const [isLoading, setIsLoading] = useState(false)
    const [folderName, setFolderName] = useState('');

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);
    }, []);

    // Current user details
    useEffect(() => {
        try {
            const fetch = async () => {
                setIsLoading(true)
                const currentUserInfo = await Auth.currentUserInfo()
                const roomNumber = currentUserInfo.attributes['custom:roomNumber']
                const name = currentUserInfo.attributes.name
                setFolderName(name + roomNumber)
                setIsLoading(false)
            }

            fetch()

        } catch (err) {
            console.log('error fetching user info: ', err);
            setIsLoading(false)
        }
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

                <TenantDocuments isLoading={isLoading} folderName={folderName} />
            </div>

        </div>
    );
}

export default Statements;