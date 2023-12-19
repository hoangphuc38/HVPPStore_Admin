import React, { useEffect, useState } from "react";
import styles from './Login.module.scss';
import classNames from "classnames/bind";
import userAPI from "../../api/userAPI";
import { PasswordLoginIcon, UserNameLoginIcon } from "../../components/Icons";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            navigate("/home");
        }
    }, []);

    const HandleLogin = async () => {
        if (!email || !password) {
            return;
        }
        setLoading(true);
        let res = await userAPI.login(email, password);
        console.log("check login: ", res);

        if (res && res.data.access_token) {
            console.log("check login: ", res);
            localStorage.setItem("token", 'Bearer ' + res.data.access_token);
            navigate('/home');
        } else {
            console.log("không có res ");
        }
        setLoading(false);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <h1>Đăng nhập</h1>
                <form className={cx('login-form')}>
                    <div>
                        <label htmlFor="user-name"
                            className={cx('icon')}>
                            <UserNameLoginIcon width={30} height={30} />
                        </label>
                        <input type="email"
                            id="user-name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập email đăng nhập" />
                    </div>

                    <div>
                        <label htmlFor="password"
                            className={cx('icon')}>
                            <PasswordLoginIcon width={30} height={30} />
                        </label>
                        <input type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập mật khẩu" />
                    </div>

                    <button
                        className={cx('login-btn')}
                        onClick={() => HandleLogin()}>
                        {loading && <i class="fa-solid fa-rotate fa-spin"></i>}
                        &nbsp;Đăng nhập</button>
                </form>

            </div>
        </div>
    );
}

export default Login;