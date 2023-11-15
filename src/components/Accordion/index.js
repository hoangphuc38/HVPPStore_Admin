import styles from './Accordion.module.scss'
import classNames from 'classnames/bind'
import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
function Accordion({ item }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const secondSectionRef = useRef(null)

    const handleClick = () => {
        setIsExpanded((prev) => !prev)
    }

    useEffect(() => {
        if (isExpanded) {
            secondSectionRef.current.style.height = `${secondSectionRef.current.scrollHeight + 10}px`
        } else {
            secondSectionRef.current.style.height = '0px'
        }
    }, [isExpanded])

    return (
        <div className={cx('accordion')}>
            <div className={cx('first')} onClick={handleClick}>
                <div className={cx('title')}>
                    <div className={cx('icon-product-list')}></div>
                    <span className={cx('text-title')}>DANH SÁCH SẢN PHẨM</span>
                </div>
                <FontAwesomeIcon className={cx('arrow-icon')} icon={isExpanded ? faAngleUp : faAngleDown} />
            </div>
            <div className={cx('second', { expanded: isExpanded })} ref={secondSectionRef}>
                {item}
            </div>
        </div>
    )
}

export default Accordion;