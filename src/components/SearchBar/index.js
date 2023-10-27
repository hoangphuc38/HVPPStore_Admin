import classNames from "classnames/bind";
import styles from './SearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function SearchBar({ placeholder }) {
    return (
        <div className={cx('search')}>
            <input type="search" placeholder={placeholder} spellCheck={false} />
            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default SearchBar;