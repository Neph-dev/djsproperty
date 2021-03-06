import React, { useEffect, useState, useRef } from 'react';

import { Helmet } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css';

//Handles the email on application submission.
import emailjs from '@emailjs/browser';

import './contact.css';

import NavigationBar from '../../Components/NavigationBar';
import SentMessage from '../../Components/SentMessage';


function Contact() {

    const [fullNameInput, setFullNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [phoneNumberInput, setPhoneNumberInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

    const [activeTab, setActiveTab] = useState('contact')
    const [messageSent, setMessageSent] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 2000 })
    })

    //automatically scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Email JS Configuration starts
    const form = useRef();

    const handleSend = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ta03w8q', 'template_pg4bkxh', form.current, 'sk4HOWSO0tCtvspvg')
            .then((result) => {
                setMessageSent(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    // Email JS Configuration ends

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
                <form ref={form} onSubmit={handleSend} className="contact-inputs">
                    <div>
                        <div style={{ marginTop: '1rem' }}>
                            <input
                                onChange={(e) => setFullNameInput(e.target.value)}
                                placeholder='Name'
                                type="text"
                                className="contact-input" />
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <input
                                onChange={(e) => setPhoneNumberInput(e.target.value)}
                                placeholder='Phone Number'
                                type="text"
                                className="contact-input" />
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <input
                                onChange={(e) => setEmailInput(e.target.value)}
                                placeholder='Email Address'
                                type="email"
                                className="contact-input" />
                        </div>

                        <div style={{ display: 'block' }}>
                            <textarea
                                onChange={(e) => setMessageInput(e.target.value)}
                                name="message"
                                type="text"
                                placeholder="Type your message here."
                                maxLength={500}
                                className='contact-input-msg' />
                            {messageInput.length < 10 ? `0${messageInput.length}` : messageInput.length}/500
                            <div>
                                <button
                                    type="submit"
                                    value="Send"
                                    className='contact-submit-btn'>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;