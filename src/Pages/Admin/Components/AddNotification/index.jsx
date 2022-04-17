import React, { useState } from 'react';

import { ImCancelCircle } from 'react-icons/im';

import './addNotification.css';


function AddNotification({ setAddNotification }) {

    const [messageInput, setMessageInput] = useState('')

    return (
        <div id="add-notification">
            <div>

                <ImCancelCircle
                    onClick={() => setAddNotification(false)}
                    size={30}
                    className='add-notif-ImCancelCircle' />

                <div className="add-notification-title">Add a notification</div>
                <div className="add-notification-input">
                    Notification Title
                    <input maxLength={30} type="text" />
                </div>
                <div>
                    <textarea
                        onChange={(e) => setMessageInput(e.target.value)}
                        name="message"
                        type="text"
                        placeholder="Type a description here."
                        maxlength={100}
                        className='add-notification-description' />
                    {messageInput.length < 10 ? `0${messageInput.length}` : messageInput.length}/100
                </div>

                <button className="add-natification-btn">
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddNotification;