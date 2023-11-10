import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import UserMessageItem from '../../components/UserMessageItem';
import { NoChatMessageIcon } from '../../components/Icons';
import { useState } from 'react';
import CurrentUserItem from '../../components/CurrentUserItem';

const cx = classNames.bind(styles);

function Message() {
    const USER_INFOS = [
        {
            id: '1',
            avatar: 'https://s3-alpha-sig.figma.com/img/4946/7246/df99b8b27bb55053d3dbe89de686ea45?Expires=1700438400&Signature=SV8TxLMZvJq5yhnMZ1eClHHlRWsHzJ4BQhEWkLCWHGgitltEsIAaAJ55vP4sDZghzcTf0gmApzs1I2fYJ7y2u02a1IizmXVW41rHyP672zUVevUVJZgqcabz1GHdcinSFwGVSyWXkaYXrurbPBZHw1BSm-UtsZSJDxo5gKlOx6iGlITRls-Xx1RzyYEFCZnqt4MjC4FfWbCKEyLKqkp1xGfPk94dk82mHgexqOmxyOE3YZqDVeVS9xK4wTGnaydI3~-XTjDSEw~sT6vC9CojdcoMMn0oMVjDW2kcWsiKS07bujYxWAQ8wN0NfBg-hv723m8NBXtlLjA4DsbmwLYSJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            nameUser: 'Hoàng Phúc',
            lastMessage: 'Mặt hàng này còn không ạ',
            timeMessage: '10p',
            lastSeen: '30 phút',
        },
        {
            id: '2',
            avatar: 'https://s3-alpha-sig.figma.com/img/4946/7246/df99b8b27bb55053d3dbe89de686ea45?Expires=1700438400&Signature=SV8TxLMZvJq5yhnMZ1eClHHlRWsHzJ4BQhEWkLCWHGgitltEsIAaAJ55vP4sDZghzcTf0gmApzs1I2fYJ7y2u02a1IizmXVW41rHyP672zUVevUVJZgqcabz1GHdcinSFwGVSyWXkaYXrurbPBZHw1BSm-UtsZSJDxo5gKlOx6iGlITRls-Xx1RzyYEFCZnqt4MjC4FfWbCKEyLKqkp1xGfPk94dk82mHgexqOmxyOE3YZqDVeVS9xK4wTGnaydI3~-XTjDSEw~sT6vC9CojdcoMMn0oMVjDW2kcWsiKS07bujYxWAQ8wN0NfBg-hv723m8NBXtlLjA4DsbmwLYSJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            nameUser: 'Lê Hoài Hải',
            lastMessage: 'Mặt hàng này còn không ạ',
            timeMessage: '10p',
            lastSeen: '30 phút',
        },
        {
            id: '3',
            avatar: 'https://s3-alpha-sig.figma.com/img/4946/7246/df99b8b27bb55053d3dbe89de686ea45?Expires=1700438400&Signature=SV8TxLMZvJq5yhnMZ1eClHHlRWsHzJ4BQhEWkLCWHGgitltEsIAaAJ55vP4sDZghzcTf0gmApzs1I2fYJ7y2u02a1IizmXVW41rHyP672zUVevUVJZgqcabz1GHdcinSFwGVSyWXkaYXrurbPBZHw1BSm-UtsZSJDxo5gKlOx6iGlITRls-Xx1RzyYEFCZnqt4MjC4FfWbCKEyLKqkp1xGfPk94dk82mHgexqOmxyOE3YZqDVeVS9xK4wTGnaydI3~-XTjDSEw~sT6vC9CojdcoMMn0oMVjDW2kcWsiKS07bujYxWAQ8wN0NfBg-hv723m8NBXtlLjA4DsbmwLYSJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            nameUser: 'Lê Văn Phú',
            lastMessage: 'Mặt hàng này còn không ạ djhaddsadsadákhdkahsdkuasjdkadks',
            timeMessage: '10p',
            lastSeen: '30 phút',
        },
        {
            id: '4',
            avatar: 'https://s3-alpha-sig.figma.com/img/4946/7246/df99b8b27bb55053d3dbe89de686ea45?Expires=1700438400&Signature=SV8TxLMZvJq5yhnMZ1eClHHlRWsHzJ4BQhEWkLCWHGgitltEsIAaAJ55vP4sDZghzcTf0gmApzs1I2fYJ7y2u02a1IizmXVW41rHyP672zUVevUVJZgqcabz1GHdcinSFwGVSyWXkaYXrurbPBZHw1BSm-UtsZSJDxo5gKlOx6iGlITRls-Xx1RzyYEFCZnqt4MjC4FfWbCKEyLKqkp1xGfPk94dk82mHgexqOmxyOE3YZqDVeVS9xK4wTGnaydI3~-XTjDSEw~sT6vC9CojdcoMMn0oMVjDW2kcWsiKS07bujYxWAQ8wN0NfBg-hv723m8NBXtlLjA4DsbmwLYSJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
        console.log(activeUser);
        activeUser = activeUser.filter(item => item.id === user.id);
        console.log(activeUser);
        setCurrentMessage(activeUser);
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

                            <div className={cx('exit-btn')}>

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