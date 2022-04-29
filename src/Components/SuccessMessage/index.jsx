import React from 'react';

import { TiTick } from 'react-icons/ti';


function SuccessMessage() {
    return (
        <div id="message-sent">
            <div>
                <TiTick color={'#00ff00'} className='TiTick' />
                <div className='message-sent-text'>Operation successful.</div>
            </div>
        </div>
    );
}

export default SuccessMessage;