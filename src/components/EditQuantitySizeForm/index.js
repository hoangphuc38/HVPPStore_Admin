import classNames from 'classnames/bind';
import styles from './EditQuantitySizeForm.module.scss';
import Button from '../Button';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../contexts/productContext';

const cx = classNames.bind(styles);

function EditQuantitySizeForm({ closeDialog, data, onSave }) {
    const getQuantitySize = (data, size) => {
        let productSize = [...data].filter(item => item.size === size);
        if (Array.isArray(productSize) && productSize.length > 0) {
            return productSize[0].quantity;
        }
        else return 0;
    }

    const { setProductSizes } = useContext(ProductContext);

    const dataSizeS = getQuantitySize(data, "S");
    const dataSizeM = getQuantitySize(data, "M");
    const dataSizeL = getQuantitySize(data, "L");
    const dataSizeXL = getQuantitySize(data, "XL");

    const [sizeS, setSizeS] = useState(dataSizeS);
    const [sizeM, setSizeM] = useState(dataSizeM);
    const [sizeL, setSizeL] = useState(dataSizeL);
    const [sizeXL, setSizeXL] = useState(dataSizeXL);

    const HandleOnSubmit = () => {
        let productSize = [
            {
                size: 'S',
                quantity: sizeS,
            },
            {
                size: 'M',
                quantity: sizeM,
            },
            {
                size: 'L',
                quantity: sizeL,
            },
            {
                size: 'XL',
                quantity: sizeXL,
            },
        ]
        setProductSizes(productSize);
    }

    useEffect(() => {
        {
            HandleOnSubmit();
        }
    })


    return (
        <>
            <div className={cx("overlay")}></div>
            <div className={cx("modal")}>
                <header className={cx("modal__header")}>
                    <h2>Số lượng với kích cỡ tương ứng</h2>

                </header>
                <main className={cx("modal__main")}>
                    <div className={cx('main-wrapper')}>
                        <div className={cx('title-edit')}>
                            <span>Size S:   </span>
                            <span>Size M:   </span>
                            <span>Size L:   </span>
                            <span>Size XL:   </span>
                        </div>
                        <div className={cx('content-edit')}>
                            <input className={cx('input-edit')}
                                type="text"
                                value={sizeS}
                                onChange={(e) => setSizeS(e.target.value)} />
                            <input className={cx('input-edit')}
                                type="text"
                                value={sizeM}
                                onChange={(e) => setSizeM(e.target.value)} />
                            <input className={cx('input-edit')}
                                type="text"
                                value={sizeL}
                                onChange={(e) => setSizeL(e.target.value)} />
                            <input className={cx('input-edit')}
                                type="text"
                                value={sizeXL}
                                onChange={(e) => setSizeXL(e.target.value)} />
                        </div>
                    </div>


                    <div className={cx('buttons')}>
                        <Button className={cx('button-detail')} orange onClick={onSave}>Lưu</Button>
                        <Button className={cx('button-detail')} onClick={closeDialog} red>Hủy</Button>
                    </div>

                </main>
            </div>

        </>
    )
}

export default EditQuantitySizeForm;