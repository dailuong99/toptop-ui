import classNames from "classnames/bind";
import images from "~/assets/images";
import styles from './Header.module.scss';

import { Wrapper as PopperWrapper } from "../../Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import AccountItem from "~/components/AccountItem/item";
import Button from '../Button/index';
import Menu from '~/components/Layout/Popper/Menu/'
import { faCircleQuestion, faEarthAsia, faKeyboard } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'FeedBack and help',
        to: "/feedback"
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Short Cut',
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, [])

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>

            <div className={cx('logo-link')}>
                <img src={images.logo} alt="Logo Tiktok" />
            </div>
            <Tippy
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>

                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>
                        </PopperWrapper>
                    </div>
                )}>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>

                <Menu items={MENU_ITEMS}>
                    <button className={cx('more-btn')} >
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </div>
    </header>;
}

export default Header;