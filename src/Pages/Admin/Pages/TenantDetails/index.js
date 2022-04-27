import React, { useEffect, useState } from 'react';

import { Link, useLocation, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { FileUploader } from "react-drag-drop-files";

//import aws api and components.
import { API, Storage, Auth } from "aws-amplify";

import { BiArrowBack } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './tenantDetails.css';
import AdminDashHeader from '../../Components/AdminDashHeader';


function TenantDetails() {

    const location = useLocation()

    const fileTypes = ["JPEG", "PNG", "GIF", "PDF"];
    const [file, setFile] = useState();
    const [files, setFiles] = useState([]);
    const [deleteFile, setDeleteFile] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const area = location.state.area
    const residenceDetails = location.state
    const tenant = location.tenant
    const tenantUsername = location.tenant.Username

    const [deleted, setDeleted] = useState(false)

    // Teant response index: 

    //tenant.Attributes[0] : sub
    //tenant.Attributes[1] : address
    //tenant.Attributes[2] : email_verified
    //tenant.Attributes[3] : gender
    //tenant.Attributes[4] : custom:unitNumber
    //tenant.Attributes[5] : custom:residence
    //tenant.Attributes[6] : phone_number_verified
    //tenant.Attributes[7] : name
    //tenant.Attributes[8] : phone_number
    //tenant.Attributes[9] : custom:roomNumber
    //tenant.Attributes[10] : family_name 
    //tenant.Attributes[11] : email

    let folderName = tenant.Attributes[7].Value + tenant.Attributes[9].Value

    const baseS3URL = 'https://bucketdjsproperty73500-dev.s3.amazonaws.com/public/'

    const [residenceDropdown, setResidenceDropdown] = useState(false)

    useEffect(() => {
        // Fetch files
        async function fetchFiles() {
            Storage.list(`${folderName}/`) // for listing ALL files without prefix, pass '' instead
                .then(result => {
                    setFiles(result)
                })
                .catch(err => console.log(err));
        }
        fetchFiles()
    });

    async function deleteUser() {
        try {

            setIsLoading(true);

            // disable user
            let apiName = 'AdminQueries';
            let path = '/disableUser';
            let myInit = {
                body: {
                    "username": tenantUsername
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
                }
            }
            await API.post(apiName, path, myInit);

            setIsLoading(false);

            setDeleted(true);

        } catch (error) {
            console.log('error signing up:', error);
            setIsLoading(false);
        }

    }
    if (deleted === true) {
        return <Redirect to={{ state: residenceDetails, area, pathname: '/Tenants' }} />
    }

    // Upload Files
    async function handleUploadFile(file) {
        setFile(file);

        setIsLoading(true)

        await Storage.put(`${folderName}/${file[0].name}`, file[0], { contentType: 'application/pdf' })

        setIsLoading(false)

        console.log('uploaded')
    }
    // Remove Files
    async function handleRemoveFile() {
        setIsLoading(true)

        await Storage.remove(deleteFile);
        setIsLoading(false)
        
        console.log('removed')
    }

    return (
        <div>

            <Helmet>
                <title>DJS PROPERTIES | ADMIN DASHBOARD</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Tenant-details' />
            </Helmet>

            <AdminDashHeader />

            <Link to={{ state: residenceDetails, area, pathname: '/Tenants' }}>
                <BiArrowBack
                    size={30}
                    className='BiArrowBack' />
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='add-unit-title'>Tenant Details</div>
                <div style={{ textDecoration: 'underline', cursor: 'pointer' }}>Edit</div>
            </div>


            <div className='add-unit-inputs-container'>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>First name</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                value={tenant.Attributes[7].Value}
                                maxLength={100} readOnly={true} />
                        </div>
                    </div>
                </div>
                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Last name</div>
                        <div className='add-unit-input'>
                            <input
                                type="text"
                                value={tenant.Attributes[10].Value}
                                maxLength={100} readOnly={true} />
                        </div>
                    </div>
                </div>
                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Email</div>
                        <div className='add-unit-input'>
                            <input
                                value={tenant.Attributes[11].Value}
                                type="text"
                                maxLength={30} readOnly={true} />
                        </div>
                    </div>
                </div>
                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Phone Number</div>
                        <div className='add-unit-input'>
                            <input
                                value={tenant.Attributes[8].Value}
                                type="text"
                                maxLength={15} readOnly={true} />
                        </div>
                    </div>
                </div>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Residence</div>
                        <div
                            onClick={() => setResidenceDropdown(prevState => !prevState)}
                            className='add-unit-input'>
                            <input
                                value={tenant.Attributes[5].Value}
                                type="text"
                                maxLength={50} readOnly={true} />
                            <MdKeyboardArrowDown size={25} />
                        </div>
                        {
                            residenceDropdown && (
                                <div
                                    onClick={() => setResidenceDropdown(prevState => !prevState)}
                                    className='add-unit-dropdown'>
                                    <div className='add-unit-dropdown-el'>Berario Palms</div>
                                </div>)
                        }
                    </div>
                </div>

                <div className='add-unit-input-container'>
                    <div>
                        <div className='add-unit-input-label'>Address</div>
                        <div className='add-unit-input'>
                            <input
                                value={tenant.Attributes[1].Value}
                                type="text"
                                maxLength={100} readOnly={true} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='features-label'>Statements</div>
                </div>

                <div className='fileUploader'>
                    <div style={{ marginTop: '2rem' }}>
                        <FileUploader
                            multiple={true}
                            handleChange={handleUploadFile}
                            name="file"
                            types={fileTypes}
                            className='FileUploader'
                        />
                        <p className='fileUploader-label'>
                            {file ? `File name: ${file[0].name}` : "no files uploaded yet"}
                        </p>
                    </div>
                </div>
                
                <div className='tenantDetails-doc-container'>
                    <div>
                    {files.map((mapFile) => (
                        <div>
                            <a key={mapFile.key}
                                onMouseEnter={() => setDeleteFile(mapFile.key)}
                                href={`${baseS3URL}${mapFile.key}`}
                                target='_blank' rel='noreferrer'>
                                
                                <div className='tenantDetails-doc-label'>
                                    {mapFile.key}
                                </div>
                                {/* <div className='tenantDetails-doc'>
                                    <div>

                                    </div>
                                </div> */}
                            </a>
                            <div 
                                onClick={handleRemoveFile}
                                className='tenantDetails-doc-delete'>
                                delete
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

                <div>
                    <button
                        className='save-btn'
                        onClick={() => ''}>
                        Save
                    </button>
                    <button
                        className='delete-btn'
                        onClick={deleteUser}>
                        Disable
                    </button>
                </div>

            </div>

        </div>
    );
}

export default TenantDetails;