import React from 'react';

import { TiTick } from 'react-icons/ti';

import './sentMessage.css';


function SentMessage() {
    return (
        <div id="message-sent">
            <div>
                <TiTick color={'#00ff00'} className='TiTick' />
                <div className='message-sent-text'>Message Sent Successfully</div>
            </div>
        </div>
    );
}

export default SentMessage;