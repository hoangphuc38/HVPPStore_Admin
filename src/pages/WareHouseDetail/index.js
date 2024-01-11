import classNames from "classnames/bind";
import styles from './WareHouseDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import WareHouseDetailForm from "../../components/WareHouseDetailForm";

const cx = classNames.bind(styles);

function WareHouseDetail() {
    const importInfo = [
        {
            quantity: 7,
            sizeS: 1,
            sizeL: 2,
            sizeM: 3,
            sizeXL: 1,
            unit: 'áo',
            price: 3000000,
            importFrom: 'Sport Center',
            contact: '0123456789',
            importDate: '25/06/2023',
        },
        {
            quantity: 7,
            sizeS: 1,
            sizeL: 2,
            sizeM: 3,
            sizeXL: 1,
            unit: 'áo',
            price: 3000000,
            importFrom: 'Sport Center',
            contact: '0123456789',
            importDate: '25/06/2023',
        },
    ]

    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [detailInfo, setDetailInfo] = useState({});

    const HandleOpenDialog = (result) => {
        setDetailInfo(result)
        setOpenDialog(true);
    }

    const HandleCloseDialog = () => {
        setOpenDialog(false);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <span>CHI TIẾT NHẬP KHO:</span>
                <span className={cx('name-product')}>Real Madrid</span>
            </div>

            <div className={cx('import-table-wrapper')}>
                <div className={cx('table-content')}>
                    <div className={cx('header-title')}>
                        <span>Số lượng</span>
                        <span>Đơn vị</span>
                        <span>Giá nhập</span>
                        <span>Ngày nhập</span>
                    </div>

                    {
                        loading ? <FontAwesomeIcon icon={faRotate} spin />
                            :
                            <div className={cx('detail-infos')}>
                                {
                                    importInfo.map((val, key) => {
                                        return (
                                            <div className={cx('info-wrapper')} onClick={() => HandleOpenDialog(val)}>
                                                <span className={cx('id')}>{val.quantity}</span>
                                                <span className={cx('name')}>{val.unit}</span>
                                                <span className={cx('time')}>{val.price}</span>
                                                <span className={cx('value')}>{val.importDate}</span>
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
                    <WareHouseDetailForm closeDialog={HandleCloseDialog} data={detailInfo} />
                )
            }

        </div>
    );
}

export default WareHouseDetail;