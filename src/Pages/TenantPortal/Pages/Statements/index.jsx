import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Auth, Storage } from "aws-amplify";

import { FcDownload } from 'react-icons/fc'

import './statements.css';
import TenantDashHeader from '../../Components/TenantDashHeader';


function Statements() {

    const activeTab = 'statements'

    const [files, setFiles] = useState([])

    const baseS3URL = 'https://bucketdjsproperty73500-dev.s3.amazonaws.com/public/'

    const [folderName, setFolderName] = useState('');

    useEffect(() => {
        //automatically scroll to top
        window.scrollTo(0, 0);
        try {
            const fetch = async () => {
                const currentUserInfo = await Auth.currentUserInfo()
                const roomNumber = currentUserInfo.attributes['custom:roomNumber']
                const name = currentUserInfo.attributes.name
                setFolderName(name + roomNumber)
            }
            fetch()
        } catch (err) {
            console.log('error fetching user info: ', err);
        }
    }, []);

    useEffect(() => {

        // Fetch files
        async function fetchFiles() {
            Storage.list(`${folderName}/`)
                .then(result => {
                    setFiles(result)
                })
                .catch(err => console.log(err));
        }
        fetchFiles()
    });



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
                {files.map((mapFile) => (
                    <div>
                        <div className='tenant-statement-month-label'>
                            {mapFile.key}
                        </div>
                        <a key={mapFile.key}
                            href={`${baseS3URL}${mapFile.key}`}
                            target='_blank' rel='noreferrer'>

                            <div
                                className='tenant-statement-card'
                                title='Click to download this document.'>
                                <div>
                                    <FcDownload
                                        size={50}
                                        className='tenant-statement-FcDownload' />
                                    <div className='tenant-statement-doc-name'>
                                        {mapFile.key}
                                    </div>
                                    <div className='tenant-statement-doc-update'>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Statements;