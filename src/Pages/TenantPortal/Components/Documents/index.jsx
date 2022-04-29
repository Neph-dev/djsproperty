import React, { useEffect, useState } from 'react';

import { Storage } from "aws-amplify";

import { BsCloudDownloadFill } from 'react-icons/bs';

import './Document.css';


function TenantDocuments({ folderName, isLoading }) {
    const [files, setFiles] = useState([])

    const [error, setError] = useState(null);

    const baseS3URL = 'https://bucketdjsproperty73500-dev.s3.amazonaws.com/public/'


    useEffect(() => {
        const fetchFiles = async () => {
            try {
                // Fetch files
                Storage.list(`${folderName}`).then(result => {
                    return setFiles(result)
                })
            }
            catch (error) {
                setError(error)
                console.log(error)
            }
        }
        fetchFiles()
    }, []);

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