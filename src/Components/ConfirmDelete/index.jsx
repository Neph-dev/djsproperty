import React from 'react';

import './ConfirmDelete.css';


function ConfirmDelete({ handleDelete, setDeleting }) {
    return (
        <div id='ConfirmDelete'>
            <div>
                <div className='con_del-first-text'>Are you sure you want to delete this ?</div>
                <div className='con_del-second-text'>This action cannot be undone.</div>

                <div className='con_del-btns'>
                    <button
                        onClick={handleDelete}
                        className='con_del-delete'>
                        Delete
                    </button>
                    <button
                        onClick={() => setDeleting(false)}
                        className='con_del-cancel'>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDelete;