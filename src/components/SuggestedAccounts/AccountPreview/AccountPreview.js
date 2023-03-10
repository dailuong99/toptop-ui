import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1676095200&x-signature=xJxJ8DBy38UAETUn%2Fs%2BMrtoZFog%3D"
          alt="theanh28"
        />
        <Button primary>Follow</Button>
      </div>

      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>theanh28entertainment</strong>
          <FontAwesomeIcon
            className={cx("check")}
            icon={faCheckCircle}
          ></FontAwesomeIcon>
        </p>
        <p className={cx("name")}>Theanh28 Entertainment</p>
        <p className={cx("anylytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Follower</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
