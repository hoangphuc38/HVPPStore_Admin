import classNames from "classnames/bind";
import styles from "./UserMessageItem.module.scss";

const cx = classNames.bind(styles);

function UserMessageItem({ data, onClick, isActive }) {
  return (
    <div
      className={isActive ? cx("wrapper-active") : cx("wrapper")}
      onClick={onClick}
    >
      <div className={cx("avatar-wrapper")}>
        <img className={cx("avatar")} src={data.avatar} alt="avatar" />
      </div>

      <div className={cx("info")}>
        <div className={cx("name")}>
          <span>{data.name}</span>
        </div>
        <div className={cx("message")}>
          {/* <span className={cx('text')}>{data.lastMessage}</span>
                    <span>{data.timeMessage}</span> */}
        </div>
      </div>
    </div>
  );
}

export default UserMessageItem;
