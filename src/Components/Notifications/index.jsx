import React, { useEffect, useState } from 'react';

import { Auth } from 'aws-amplify';

//icons
import { RiNotification2Fill } from 'react-icons/ri';
import { BiCommentAdd } from 'react-icons/bi';


function Notifications({
    setShowNotification,
    notificationRef,
    showNotification,
    setAddNotification }) {

    const [userGroup, setUserGroup] = useState('')

    useEffect(() => {
        Auth.currentAuthenticatedUser({
            bypassCache: false
        }).then(user => {
            setUserGroup(user.signInUserSession.accessToken.payload['cognito:groups'][0])
        })
    }, [])

    return (
        <div ref={notificationRef}>
            <RiNotification2Fill
                onClick={() =>
                    setShowNotification((prevState) => !prevState)
                }
                size={30}
                title='notification'
                className='RiNotification2Fill' />

            {
                showNotification && (
                    <div
                        onClick={() =>
                            setShowNotification((prevState) => !prevState)
                        }
                        className='showNotification-dropdown'>


                        <div className='notification-dropdown'>
                            <div className='notification-header-title'>
                                Notifications
                            </div>

                            {userGroup === 'admin' ?
                                <BiCommentAdd
                                    onClick={() => setAddNotification(true)}
                                    className='notif-BiCommentAdd'
                                    title='Add a new notification.'
                                    size={30} />
                                : []
                            }
                            <div className='notification-el'>
                                <div className='notification-title'>
                                    This is a title
                                </div>
                                <div className='notification-description'>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining
                                    essentially unchanged.
                                </div>
                                <div className='notification-date'>
                                    • 1 hour ago
                                </div>
                            </div>
                            <div className='notification-el'>
                                <div className='notification-title'>
                                    This is a title
                                </div>
                                <div className='notification-description'>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining
                                    essentially unchanged.
                                </div>
                                <div className='notification-date'>
                                    • 1 hour ago
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Notifications;