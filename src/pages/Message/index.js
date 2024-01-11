import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import UserMessageItem from '../../components/UserMessageItem';
import { ExitMessageIcon, NoChatMessageIcon } from '../../components/Icons';
import { useEffect, useState } from 'react';
import CurrentUserItem from '../../components/CurrentUserItem';
import camera from '../../images/Camera.png';
import send from '../../images/EmailSend.png';
import MessageSearchBar from '../../components/SearchBar/MessageSearchBar';
import customerAPI from '../../api/customerAPI';
import messageAPI from '../../api/messageAPI';
import { HubConnectionBuilder } from '@microsoft/signalr'

const cx = classNames.bind(styles);

function Message() {
    const [userList, setUserList] = useState([]);
    const [customerID, setCustomerID] = useState("");
    const [messages, setMessages] = useState([]);
    const [file, setFile] = useState(null);
    const [connection, setConnection] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [currentMessage, setCurrentMessage] = useState({});
    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await customerAPI.getAll()
                    .then((response) => {
                        setUserList(response);
                    });
                console.log("Success: ", response);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, [])

    useEffect(() => {
        const connect = new HubConnectionBuilder()
            .withUrl('https://localhost:7030/chathub')
            .withAutomaticReconnect()
            .build()

        setConnection(connect)
    }, [])

    useEffect(() => {
        if (connection) {
            connection
                .start()
                .then(() => {
                    console.log('SignalR connected');
                    connection.on('ReceiveMessage', (message) => {
                        console.log('message:', message)
                        //setMessages((prev) => [...prev, message])
                    })
                })
                .catch((error) => {
                    console.error('Error starting SignalR connection:', error)
                })
            // connection.invoke('Connect', user.id)
        }
    }, [connection])

    const showMessage = async (user) => {
        setIsShow(true);
        let activeUser = userList;
        activeUser = activeUser.filter(item => item.id === user.id);
        setCurrentMessage(activeUser);
        return await messageAPI.getMessage(user.id)
            .then((res) => {
                setConversation(res);
                setCustomerID(user.id);
            })
            .catch((error) => console.log(error));
    }

    const HandleSendMessage = async () => {
        return await messageAPI.sendMessage(customerID, messages, file, false)
            .then(() => {
                setIsLoading(true);
            })
            .catch((error) => console.log(error));
    }

    const closeMessage = () => {
        setIsShow(false);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('chat-list-container')}>
                <MessageSearchBar placeholder="Tìm kiếm ai đó ..." />

                <p className={cx('title')}>Tin nhắn</p>

                <div className={cx('user-list')}>
                    {
                        userList.map((user, key) => {
                            return (
                                <UserMessageItem data={user}
                                    key={user.id}
                                    onClick={() => showMessage(user)}
                                    isActive={
                                        Object.keys(currentMessage).length === 0
                                            ? false
                                            : (
                                                user.id === currentMessage[0].id ? true : false
                                            )
                                    } />
                            )
                        })
                    }
                </div>


            </div>
            {
                isShow
                    ? <div className={cx('message-content-container')}>
                        <div className={cx('message-header')}>
                            {
                                currentMessage.map((user) => {
                                    return (
                                        <CurrentUserItem data={user} />
                                    )
                                })
                            }

                            <div className={cx('exit-btn')} onClick={closeMessage}>
                                <ExitMessageIcon />
                            </div>
                        </div>
                        <div className={cx('message-content')}>
                            {
                                conversation.map((message) => {
                                    return (
                                        <div className={message.isCustomerSend ? cx('other') : cx('owner')}>
                                            {
                                                message.media &&
                                                <div className={cx('image-wrapper')}>
                                                    <img src={message.media}
                                                        className={cx('image')}
                                                        alt='message' />
                                                </div>


                                            }
                                            {
                                                message.content &&
                                                <div className={cx('text-wrapper')}>
                                                    {message.content}
                                                </div>
                                            }

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={cx('message-input')}>
                            <div className={cx('photo-button')}>
                                <input type='file' id='file' className={cx('input-file')} />
                                <label htmlFor='file' className={cx('camera-icon')}>
                                    <img src={camera} alt='camera' />
                                </label>
                            </div>
                            <div className={cx('input-content')}>
                                <input type='text'
                                    placeholder='Aa'
                                    onChange={(e) => setMessages(e.target.value)}
                                    value={messages} />
                                <img src={send}
                                    alt='send-message'
                                    className={cx('send-button')}
                                    onClick={HandleSendMessage} />
                            </div>
                        </div>
                    </div>

                    : <div className={cx('no-message-content-container')}>
                        <div className={cx('no-chat-message-notification')}>
                            <NoChatMessageIcon />
                            <span className={cx('notification-text')}>Chưa có đoạn hội thoại nào hiển thị</span>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Message;