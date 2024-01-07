import React, { useState } from "react";
import styles from './Warehouse.module.scss';
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import WareHouseSearchBar from "../../components/SearchBar/WareHouseSearchBar";
import { AddIcon } from "../../components/Icons";
import WareHouseForm from "../../components/WareHouseForm";

const cx = classNames.bind(styles);

function WareHouse() {
    const importInfo = [
        {
            id: 1,
            nameProduct: 'Real Madrid',
            available: 4,
            unit: 'áo',
            note: '',
        },
        {
            id: 2,
            nameProduct: 'Liverpool',
            available: 4,
            unit: 'áo',
            note: '',
        },
    ]

    const [loading, setLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const HandleOpenDialog = () => {
        setOpenDialog(true);
    }

    const HandleCloseDialog = () => {
        setOpenDialog(false);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('search-and-buttons')}>
                <WareHouseSearchBar placeholder="Tìm kiếm phiếu nhập theo tên sản phẩm" />
                <div className={cx('buttons')}>
                    <Button primary >Xuất file</Button>
                    <Button primary
                        leftIcon={<AddIcon width={30} height={30} />}
                        onClick={HandleOpenDialog}>Phiếu nhập mới</Button>
                </div>
            </div>

            <div className={cx('import-table-wrapper')}>
                <div className={cx('table-content')}>
                    <div className={cx('header-title')}>
                        <span>Tên sản phẩm</span>
                        <span>Tồn dư</span>
                        <span>Đơn vị</span>
                        <span>Ghi chú</span>
                    </div>

                    {
                        loading ? <FontAwesomeIcon icon={faRotate} spin />
                            :
                            <div className={cx('detail-infos')}>
                                {
                                    importInfo.map((val, key) => {
                                        return (
                                            <div className={cx('info-wrapper')}>
                                                <Link className={cx('info')} to={`/warehouse/${val.id}`}>
                                                    <span className={cx('id')}>{val.nameProduct}</span>
                                                    <span className={cx('name')}>{val.available}</span>
                                                    <span className={cx('time')}>{val.unit}</span>
                                                    <span className={cx('value')}>{val.note !== '' ? val.available : 'trống'}</span>
                                                </Link>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                    }


                </div>

            </div>

            {
                openDialog &&
                (
                    <WareHouseForm closeDialog={HandleCloseDialog} />
                )
            }
        </div>
    );
}

export default WareHouse;