import React, { useEffect, useState } from 'react';

//import aws api and components.
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listNotifications } from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

//icons
import { RiNotification2Fill } from 'react-icons/ri';
import { BiCommentAdd } from 'react-icons/bi';
import ConfirmDelete from '../ConfirmDelete';


function Notifications({
    setShowNotification,
    notificationRef,
    showNotification,
    setAddNotification }) {

    const [userGroup, setUserGroup] = useState('')
    const [userSub, setUserSub] = useState('')

    const [notifications, setNotifications] = useState([])
    const [notificationID, setNotificationID] = useState([])
    const [hasRead, setHasRead] = useState([])
    const [markAsReact, setMarkAsReact] = useState(false)

    const [deleted, setDeleted] = useState(false)

    const [deleting, setDeleting] = useState(false)

    useEffect(() => {

        Auth.currentAuthenticatedUser({
            bypassCache: false
        }).then(user => {
            setUserGroup(user.signInUserSession.accessToken.payload['cognito:groups'][0])
            setUserSub(user.attributes.sub)
        })

        const fetchNotifications = async () => {
            try {
                const notificationResults = await API.graphql(
                    graphqlOperation(listNotifications)
                )
                let notifications = notificationResults.data.listNotifications.items

                setNotifications(notifications !== undefined ? notifications : [])
            }
            catch (error) {
                console.log(error)
            }
        }

        fetchNotifications()

    }, [])

    // This Function is used to delete a Unit
    // then reload the page.
    const handleDelete = async () => {
        const notificationDetail = {
            id: notificationID,
        };
        const deleteNotification = await API.graphql({
            query: mutations.deleteNotification,
            variables: { input: notificationDetail }
        });
        setDeleted(true)

        window.location.reload(false)
    }
    return (
        <div ref={notificationRef}>

            <div className="notificationBell-container">
                {userGroup !== 'admin' ?
                    <div>
                        {notifications.length}
                    </div>
                    : []
                }
                <RiNotification2Fill
                    onClick={() =>
                        setShowNotification((prevState) => !prevState)
                    }
                    size={30}
                    title='Notifications'
                    className='RiNotification2Fill' />
            </div>

            {
                showNotification && (
                    <div className='showNotification-dropdown' >

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
                            {
                                notifications.map((notification) => (
                                    <div key={notification.id} className='notification-el'>
                                        <div className='notification-title'>
                                            {notification.title}
                                        </div>
                                        <div className='notification-description'>
                                            {notification.description}
                                        </div>
                                        <div className='notification-date'>
                                            • Updated: {notification.lastUpdated}
                                        </div>
                                        {userGroup !== 'admin' ?
                                            <button
                                                onClick={() => {
                                                    setHasRead(notification.hasRead);
                                                    setMarkAsReact(true)
                                                }}
                                                className='notification-markAsRead'>
                                                Mark as read.
                                            </button>
                                            :
                                            <button
                                                onClick={() => {
                                                    setHasRead(notification.hasRead)
                                                    setNotificationID(notification.id)
                                                    setMarkAsReact(true)
                                                    setDeleting(true)
                                                }}
                                                className='notification-markAsRead'>
                                                Delete
                                            </button>}
                                    </div>
                                ))
                            }
                            {
                                deleting && (
                                    <ConfirmDelete
                                        handleDelete={handleDelete}
                                        setDeleting={setDeleting} />)
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Notifications;