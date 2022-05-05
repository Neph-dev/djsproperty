import React, { useState } from 'react';

import { API } from "aws-amplify";
import * as mutations from '../../../../graphql/mutations';

import { ImCancelCircle } from 'react-icons/im';

import './addNotification.css';


function AddNotification({ setAddNotification }) {

    const [messageInput, setMessageInput] = useState('')
    const [titleInput, setTitleInput] = useState('')

    let day;
    let month;

    const now = new Date();

    // eslint-disable-next-line default-case
    switch (now.getDay()) {
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        case 7:
            day = 'Sunday'
            break;
    }
    // eslint-disable-next-line default-case
    switch (now.getMonth()) {
        case 0:
            month = 'January'
            break;
        case 1:
            month = 'February'
            break;
        case 2:
            month = 'March'
            break;
        case 3:
            month = 'April'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'June'
            break;
        case 6:
            month = 'July'
            break;
        case 7:
            month = 'August'
            break;
        case 8:
            month = 'September'
            break;
        case 9:
            month = 'October'
            break;
        case 10:
            month = 'November'
            break;
        case 11:
            month = 'December'
            break;
    }


    const current = day + ' ' + now.getDate() + ' ' + month + ' ' + now.getHours() + ':' + now.getMinutes();
    console.log(current)

    /*const createNotification = async () => {
        const notificationDetails = {
            title: 'Power Outrage',
            description: 'Please not that level 2 has started',
            lastUpdated: current
        };
        const newNotification = await API.graphql({
            query: mutations.createNotification,
            variables: { input: notificationDetails }
        });
    }*/

    return (
        <div id="add-notification">
            <div>

                <ImCancelCircle
                    onClick={() => setAddNotification(false)}
                    size={25}
                    className='add-notif-ImCancelCircle' />

                <div className="add-notification-title">Add a notification</div>
                <div className="add-notification-input">
                    <input
                        onChange={(e) => setTitleInput(e.target.value)}
                        maxLength={30}
                        type="text"
                        placeholder='Notification Title' />
                </div>
                <div>
                    <textarea
                        onChange={(e) => setMessageInput(e.target.value)}
                        name="message"
                        type="text"
                        placeholder="Type a description here."
                        maxLength={100}
                        className='add-notification-description' />
                    {messageInput.length < 10
                        ? `0${messageInput.length}`
                        : messageInput.length}/100
                </div>

                <button className="add-natification-btn">
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddNotification;