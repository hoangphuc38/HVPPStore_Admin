import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import UserMessageItem from '../../components/UserMessageItem';
import { ExitMessageIcon, NoChatMessageIcon } from '../../components/Icons';
import { useState } from 'react';
import CurrentUserItem from '../../components/CurrentUserItem';
import camera from '../../images/Camera.png';
import send from '../../images/EmailSend.png';
import MessageSearchBar from '../../components/SearchBar/MessageSearchBar';

const cx = classNames.bind(styles);

function Message() {
    const USER_ID = '002';

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

    const CONVERSATION = [
        {
            idUser: '001',
            timeMessage: '23/11/2023 6:50',
            textMessage: 'Alo alo',
            imageMessage: '',
            videoMessage: '',
        },
        {
            idUser: '002',
            timeMessage: '23/11/2023 6:51',
            textMessage: '',
            imageMessage: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
            videoMessage: '',
        },
        {
            idUser: '001',
            timeMessage: '23/11/2023 6:51',
            textMessage: 'Mặt hàng này còn không sốp',
            imageMessage: '',
            videoMessage: '',
        },
        {
            idUser: '001',
            timeMessage: '23/11/2023 6:51',
            textMessage: '',
            imageMessage: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dwe19c4448/images/large/701225698001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit',
            videoMessage: '',
        },
        {
            idUser: '002',
            timeMessage: '23/11/2023 6:52',
            textMessage: 'Check inbox',
            imageMessage: '',
            videoMessage: '',
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
                <MessageSearchBar placeholder="Tìm kiếm ai đó ..." />

                <p className={cx('title')}>Tin nhắn</p>

                <div className={cx('user-list')}>
                    {
                        USER_INFOS.map((user, key) => {
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
                                CONVERSATION.map((message) => {
                                    return (
                                        <div className={message.idUser === USER_ID ? cx('owner') : cx('other')}>
                                            {
                                                message.imageMessage &&
                                                <div className={cx('image-wrapper')}>
                                                    <img src={message.imageMessage}
                                                        className={cx('image')}
                                                        alt='message' />
                                                </div>


                                            }
                                            {
                                                message.textMessage &&
                                                <div className={cx('text-wrapper')}>
                                                    {message.textMessage}
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