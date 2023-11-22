import classNames from 'classnames/bind';
import styles from './EditQuantitySizeForm.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function EditQuantitySizeForm({ closeDialog, data }) {
    const getQuantitySize = (data, size) => {
        let productSize = [...data].filter(item => item.size === size);
        if (Array.isArray(productSize) && productSize.length > 0) {
            return productSize[0].quantity;
        }
        else return 0;
    }

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
                            <span>Size XXL:   </span>
                        </div>
                        <div className={cx('content-edit')}>
                            <input className={cx('input-edit')} type="text" value={getQuantitySize(data, 'S')} />
                            <input className={cx('input-edit')} type="text" value={getQuantitySize(data, 'M')} />
                            <input className={cx('input-edit')} type="text" value={getQuantitySize(data, 'L')} />
                            <input className={cx('input-edit')} type="text" value={getQuantitySize(data, 'XL')} />
                            <input className={cx('input-edit')} type="text" value={getQuantitySize(data, 'XXL')} />
                        </div>
                    </div>


                    <div className={cx('buttons')}>
                        <Button className={cx('button-detail')} orange>Lưu</Button>
                        <Button className={cx('button-detail')} onClick={closeDialog} red>Hủy</Button>
                    </div>

                </main>
            </div>

        </>
    )
}

export default EditQuantitySizeForm;