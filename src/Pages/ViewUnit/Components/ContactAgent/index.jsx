import React, { useState, useRef } from 'react';

import { ImCancelCircle } from 'react-icons/im';

//Handles the email on application submission.
import emailjs from '@emailjs/browser';

import './contactAgent.css';


function ContactAgent({ setShowContact, setMessageSent }) {

    const [fullNameInput, setFullNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [phoneNumberInput, setPhoneNumberInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

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

    return (
        <div id='contact-agent'>
            <ImCancelCircle
                onClick={() => setShowContact(false)}
                size={30}
                className='ImCancelCircle' />

            <div className='contact-agent-content'>
                <div
                    data-aos="fade-in"
                    data-aos-duration="1500"
                    className='contact-agent-content-title'>
                    Contact An Agent
                </div>
                <form className="contact-inputs" ref={form} onSubmit={handleSend}>
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

export default ContactAgent;