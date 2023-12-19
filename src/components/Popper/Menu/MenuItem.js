import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from "../../Button";
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const navigate = useNavigate();

    const HandleLogout = (title) => {
        if (title === 'Đăng xuất') {
            localStorage.removeItem("token");
            navigate("/login");
        }
    }
    return (
        <Button className={cx('sortbar-item')}
            leftIcon={data.icon}
            to={data.to}
            onClick={() => HandleLogout(data.title)}>
            {data.title}
        </Button>
    );
}

export default MenuItem;