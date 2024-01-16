import classNames from "classnames/bind";
import styles from './WareHouseDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import WareHouseDetailForm from "../../components/WareHouseDetailForm";
import productAPI from "../../api/productAPI";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function WareHouseDetail() {
    const param = useParams();
    console.log("param: ", param);

    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [detailInfo, setDetailInfo] = useState({});
    const [importInfo, setImportInfo] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                let productID = param.id;
                const response = await productAPI.getDetailImport(productID)
                console.log("Success: ", response);
                setImportInfo(response);

            } catch (error) {
                console.log("Xảy ra lỗi: ", error);
            }
        }

        fetchAPI();
    }, [])

    const HandleOpenDialog = (result) => {
        setDetailInfo(result)
        setOpenDialog(true);
    }

    const HandleCloseDialog = () => {
        setOpenDialog(false);
    }

    const formatDate = (date) => {
        const inputDate = new Date(date);

        const year = inputDate.getUTCFullYear();
        const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
        const day = inputDate.getDate().toString().padStart(2, "0");
        const time = inputDate.getHours().toString().padStart(2, "0")
            + ':'
            + inputDate.getMinutes().toString().padStart(2, "0");

        const formattedDate = `${time} ` + `${day}/${month}/${year}`;
        console.log("ngày gốc: ", inputDate);
        console.log("ngày: ", day);
        console.log("tháng: ", month);
        console.log("năm: ", year);
        console.log(formattedDate);
        return formattedDate;
    }

    return (
        <div className={cx('container')}>
            <div className={cx('title')}>
                <span>CHI TIẾT NHẬP KHO:</span>
                <span className={cx('name-product')}>{importInfo.name}</span>
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
                                                <span className={cx('id')}>{val.sizeS + val.sizeM + val.sizeL + val.sizeXL}</span>
                                                <span className={cx('name')}>áo</span>
                                                <span className={cx('time')}>{val.price}</span>
                                                <span className={cx('value')}>{formatDate(val.dateIn)}</span>
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