import React, { useState, UseEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { FileUploader } from "react-drag-drop-files";

import TenantDashHeader from '../../Components/TenantDashHeader';

import './upload.css';


const fileTypes = ["JPEG", "PNG", "GIF", "PDF"];


function TenantUpload() {

    const activeTab = 'upload'

    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    return (
        <div>

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

                <div className='tenant-tab-name'>Upload</div>

                <div className='fileUploader'>
                    <div>

                        <FileUploader
                            multiple={true}
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                            style={{ width: '10rem', display: 'flex', justifyContent: 'center', margin: 'auto' }}
                        />
                        <p className='fileUploader-label'>
                            {file ? `File name: ${file[0].name}` : "no file uploaded yet"}
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default TenantUpload;