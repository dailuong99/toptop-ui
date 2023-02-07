import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Layout/components/Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem({ user }) {

  return (
    <Link to={`/${user.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={user.avatar} alt={user.full_name} />
      <div className={cx("info")}>
        <p className={cx("name")}>
          {user.full_name}
          {user.tick && (
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          )}
        </p>
        <span className={cx("username")}>{user.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
