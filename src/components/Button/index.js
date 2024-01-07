import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({ to, href, children, primary, orange, red, green, leftIcon, rightIcon, className, onClick, type }) {
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
        orange,
        red,
        green,
    })

    return (
        <Comp className={classes} href={href} onClick={onClick} to={to} type={type}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;