import classNames from "classnames/bind";
import styles from './ProductSearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import Wrapper from "../../Popper";
import productAPI from "../../../api/productAPI";

const cx = classNames.bind(styles);

function ProductSearchBar({ placeholder, href }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        if (!searchValue) {
            return;  //Xử lý trường hợp trường q của api bắt buộc khác ''
        }

        const fetchAPI = async () => {
            try {
                const params = { name: searchValue }
                const response = await productAPI.searchProduct(params);
                console.log("Success: ", response);
                setSearchResult(response);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();

    }, [searchValue])

    console.log("kết quả: ", searchResult);

    const HandleHideResult = () => {
        setShowResult(false);
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
                                    <div className={cx('result-wrapper')} key={result.id}>
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
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>

    );
}

export default ProductSearchBar;