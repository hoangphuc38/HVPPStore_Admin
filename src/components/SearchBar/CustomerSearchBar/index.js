import classNames from "classnames/bind";
import styles from './CustomerSearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { useContext, useEffect, useState } from "react";
import Wrapper from "../../Popper";
import customerAPI from "../../../api/customerAPI";
import { ProductContext } from "../../../contexts/productContext";

const cx = classNames.bind(styles);

function CustomerSearchBar({ placeholder }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const { setCustomers } = useContext(ProductContext);

    useEffect(() => {
        if (!searchValue) {
            return;  //Xử lý trường hợp trường q của api bắt buộc khác ''
        }

        const fetchAPI = async () => {
            try {
                const response = await customerAPI.searchCustomer(searchValue);
                console.log("Success: ", response);
                setSearchResult(response);
            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();

    }, [searchValue])

    console.log("kết quả: ", searchResult);

    const HandleSearchClick = async () => {
        try {
            const response = await customerAPI.searchCustomer(searchValue);
            console.log("Success: ", response);
            setCustomers(response);
            setShowResult(false);
        } catch (error) {
            console.log("Xảy ra lỗi: ", error);
        }
    }

    const HandleHideResult = () => {
        setShowResult(false);
    }

    const HandleSearchOnClickItem = async (result) => {
        setShowResult(false);
        setSearchValue('');
        return await customerAPI.getbyID(result.id)
            .then((res) => {
                setCustomers([res]);
                console.log("List:", res)
            })
            .catch((error) => console.log(error));
    }

    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <Wrapper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <h4>Kết quả tìm kiếm</h4>
                        {
                            searchResult.map((result) => {
                                return (
                                    <div className={cx('result-wrapper')}
                                        key={result.id}
                                        onClick={() => HandleSearchOnClickItem(result)}>
                                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                                        <span>{result.name}</span>
                                    </div>
                                )

                            })
                        }
                    </div>
                </Wrapper>
            )}
            onClickOutside={HandleHideResult}
        >
            <div className={cx('search')}>
                <input type="search"
                    placeholder={placeholder}
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)} />
                <button className={cx('search-btn')} onClick={HandleSearchClick}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>

    );
}

export default CustomerSearchBar;