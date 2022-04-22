import React, { useState } from 'react';

import { ImCancelCircle } from 'react-icons/im';

import './contactAgent.css';


function ContactAgent({ setShowContact, setMessageSent }) {

    const [fullNameInput, setFullNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [phoneNumberInput, setPhoneNumberInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

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
                <div className="contact-inputs">
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

export default ContactAgent;