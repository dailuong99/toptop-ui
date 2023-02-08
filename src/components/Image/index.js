import classNames from "classnames";
import { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";
import PropTypes from "prop-types";

const Image = forwardRef(
  (
    { src, className, fallback: customFallback = images.noImage, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        className={classNames(styles.Wrapper, className)}
        ref={ref}
        src={fallback || src}
        {...props}
        onError={handleError}
      />
    );
  }
);

forwardRef.PropTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
