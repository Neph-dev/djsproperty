import React from 'react';

import { ImCancelCircle } from 'react-icons/im';

import './contactAgent.css';


function ContactAgent({ setShowContact, setMessageSent }) {
    return (
        <div id='contact-agent'>
            <ImCancelCircle
                onClick={() => setShowContact(false)}
                color={'#000'}
                size={30}
                className='ImCancelCircle' />

            <div className='contact-agent-content'>
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

export default ContactAgent;