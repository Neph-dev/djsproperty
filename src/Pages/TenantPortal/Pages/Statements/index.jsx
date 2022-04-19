import React from 'react';
import { Helmet } from 'react-helmet-async';

import { FcDownload } from 'react-icons/fc'

import './statements.css';
import TenantDashHeader from '../../Components/TenantDashHeader';




function Statements() {

    const activeTab = 'statements'

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
                <div>
                    <div className='tenant-statement-month-label'>
                        March 2022
                    </div>
                    <div
                        className='tenant-statement-card'
                        title='Click to download this document.'>
                        <div>
                            <FcDownload
                                size={50}
                                className='tenant-statement-FcDownload' />
                            <div className='tenant-statement-doc-name'>
                                document_name.txt
                            </div>
                            <div className='tenant-statement-doc-update'>
                                updated on 00/00/0000
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Statements;