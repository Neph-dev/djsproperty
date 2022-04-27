import React, { useEffect, useState } from 'react';

import { Auth, Storage } from "aws-amplify";

import { BsCloudDownloadFill } from 'react-icons/bs';

import './Document.css';


function TenantDocuments() {
    const [files, setFiles] = useState([])

    const [folderName, setFolderName] = useState('');

    const [isLoading, setIsLoading] = useState(false)

    const baseS3URL = 'https://bucketdjsproperty73500-dev.s3.amazonaws.com/public/'

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

    // Fetch files
    useEffect(() => {
        async function fetchFiles() {
            Storage.list(`${folderName}/`)
                .then(result => {
                    setFiles(result)
                })
                .catch(err => {
                    console.log(err)
                });
        }
        fetchFiles()
    });

    return (
        <div>
            {isLoading ?
                <div className='loader-container'>
                    <div className='loader' />
                </div>
                :
                files.map((mapFile) => (
                    <div>
                        <div className='Document-title'>
                            {mapFile.key}
                        </div>
                        <a key={mapFile.key}
                            href={`${baseS3URL}${mapFile.key}`}
                            target='_blank' rel='noreferrer'>

                            <div
                                className='Document-card'
                                title='Click to download this document.'>
                                <div>
                                    <BsCloudDownloadFill
                                        size={40}
                                        color={'#eae0c8'}
                                        className='Document-BsCloudDownloadFill' />
                                    <div className='Document-card-title'>
                                        {mapFile.key}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    );
}

export default TenantDocuments;