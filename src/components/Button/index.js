import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({ to, href, children, primary, leftIcon, className, onClick }) {
    let Comp = 'button';

    const props = {
        onClick,
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
    })

    return (
        <Comp className={classes} href={href}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;