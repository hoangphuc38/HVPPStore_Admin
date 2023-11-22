import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import UserMessageItem from '../../components/UserMessageItem';
import { ExitMessageIcon, NoChatMessageIcon } from '../../components/Icons';
import { useState } from 'react';
import CurrentUserItem from '../../components/CurrentUserItem';
import camera from '../../images/Camera.png';
import send from '../../images/EmailSend.png';

const cx = classNames.bind(styles);

function Message() {
    const USER_INFOS = [
        {
            id: '1',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nameUser: 'Hoàng Phúc',
            lastMessage: 'Mặt hàng này còn không ạ',
            timeMessage: '10p',
            lastSeen: '30 phút',
        },
        {
            id: '2',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nameUser: 'Lê Hoài Hải',
            lastMessage: 'Mặt hàng này còn không ạ',
            timeMessage: '10p',
            lastSeen: '30 phút',
        },
        {
            id: '3',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nameUser: 'Lê Văn Phú',
            lastMessage: 'Mặt hàng này còn không ạ djhaddsadsadákhdkahsdkuasjdkadks',
            timeMessage: '10p',
            lastSeen: '30 phút',
        },
        {
            id: '4',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nameUser: 'Trần Tuấn Vũ',
            lastMessage: 'Mặt hàng này còn không ạ',
            timeMessage: '10p',
            lastSeen: '30 phút',
        },
    ]

    const [isShow, setIsShow] = useState(false);
    const [currentMessage, setCurrentMessage] = useState({});

    const showMessage = (user) => {
        setIsShow(true);
        let activeUser = USER_INFOS;
        activeUser = activeUser.filter(item => item.id === user.id);
        setCurrentMessage(activeUser);
    }

    const closeMessage = () => {
        setIsShow(false);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('chat-list-container')}>
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input type="search" placeholder="Tìm kiếm ai đó ..." spellCheck={false} />
                </div>

                <p className={cx('title')}>Tin nhắn</p>

                <div className={cx('user-list')}>
                    {
                        USER_INFOS.map((user, key) => {
                            return (
                                <UserMessageItem data={user} key={user.id} onClick={() => showMessage(user)} />
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

                        </div>
                        <div className={cx('message-input')}>
                            <div className={cx('photo-button')}>
                                <img src={camera} alt='camera' />
                            </div>
                            <div className={cx('input-content')}>
                                <input type='text' placeholder='Aa' />
                                <img src={send} alt='send-message' className={cx('send-button')} />
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