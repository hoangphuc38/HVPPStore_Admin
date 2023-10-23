import classNames from "classnames/bind";
import styles from './SearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function SearchBar() {
    return (
        <div className={cx('search')}>
            <input placeholder='Tìm kiếm' spellCheck={false} />
            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default SearchBar;