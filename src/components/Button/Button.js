import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  small = false,
  large = false,
  disabled = false,
  rounded = false,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
  passProps,
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
    to : PropTypes.string,
    href : PropTypes.string,
    primary : PropTypes.bool,
    outline : PropTypes.bool,
    text : PropTypes.bool,
    rounded : PropTypes.bool,
    disabled : PropTypes.bool,
    small : PropTypes.bool,
    large : PropTypes.bool,
    className : PropTypes.string,
    children : PropTypes.node.isRequired,
    leftIcon : PropTypes.node,
    rightIcon : PropTypes.node,
    onClick : PropTypes.func,
};

export default Button;
