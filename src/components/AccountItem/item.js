import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ec05f419045cef4002a4c338433154cb~c5_100x100.jpeg?x-expires=1675526400&x-signature=4HUPiXBxBwE2KH%2FHe21BZCYzMU4%3D" alt="" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    Luong Tan Dai
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>luongtandai</span>
            </div>
        </div>
    );
}

export default AccountItem;