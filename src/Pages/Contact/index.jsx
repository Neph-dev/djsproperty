import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './contact.css';

import NavigationBar from '../../Components/NavigationBar';
import SentMessage from '../../Components/SentMessage';


function Contact() {

    const [activeTab, setActiveTab] = useState('contact')
    const [messageSent, setMessageSent] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 2000 })
    })

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (messageSent === true) {
        setTimeout(() => {
            setMessageSent(false);
            window.location.reload(false);
        }, 2000);
    }

    return (
        <div id='contact'>

            <Helmet>
                <title>CONTACT AN AGENT | DJS PROPERTIES</title>
                <meta
                    name="description"
                    content=""
                    data-rh="true"
                />
                <link rel='canonical' href='/Accomodations' />
            </Helmet>

            <NavigationBar activeTab={activeTab} />

            {messageSent && (<SentMessage />)}

            <div className='home-background'>
                <div
                    data-aos="fade-in"
                    data-aos-duration="1500"
                    className='contact-content-title'>
                    Contact An Agent
                </div>
                <div className="contact-inputs">
                    <div>
                        <div style={{ marginTop: '1rem' }}>
                            <input
                                placeholder='Name'
                                type="text"
                                className="contact-input" />
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <input
                                placeholder='Phone Number'
                                type="text"
                                className="contact-input" />
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <input
                                placeholder='Email Address'
                                type="email"
                                className="contact-input" />
                        </div>

                        <div style={{ display: 'block' }}>
                            <textarea
                                name="message"
                                type="text"
                                placeholder="Type your message here."
                                maxlength={500}
                                className='contact-input-msg' />
                            0/500
                            <div>
                                <button
                                    onClick={() => setMessageSent(true)}
                                    type="submit"
                                    value="Send"
                                    className='contact-submit-btn'>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;