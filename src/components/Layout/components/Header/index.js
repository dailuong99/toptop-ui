import classNames from "classnames/bind";
import images from "~/assets/images";
import styles from './Header.module.scss';

import { Wrapper as PopperWrapper } from "../../Popper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCloudUpload, faCoins, faEllipsisVertical, faGear, faMagnifyingGlass, faSignOut, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react";
import { useEffect, useState } from "react";
import AccountItem from "~/components/AccountItem/item";
import Button from '../Button/index';
import Menu from '~/components/Layout/Popper/Menu/'
import { faCircleQuestion, faEarthAsia, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: "language",
            data: [
                {
                    code: 'en',
                    title: "English",
                },
                {
                    code: 'vi',
                    title: "Tiếng Việt",
                },
            ]
        }
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
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, [])

    //const handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'View profile',
            to: "/@hoaa"
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: "/coin"
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: "/settings"
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: "/logout",
            separate: true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>

            <div className={cx('logo-link')}>
                <img src={images.logo} alt="Logo Tiktok" />
            </div>
            <HeadlessTippy
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
            </HeadlessTippy>

            <div className={cx('actions')}>
                {
                    currentUser ? (
                        <Tippy content="Upload Video"
                            placement="bottom"
                        >
                            <button>
                                <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                            </button>

                        </Tippy>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>


                        </>
                    )
                }

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {
                        currentUser ? (
                            <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1675843200&x-signature=H%2B6blRJ%2FcDzNF1GIPtXBgdJgrgo%3D" className={cx('user-avatar')} alt="luong tand ai" />
                        ) : (
                            <button className={cx('more-btn')} >
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )
                    }

                </Menu>
            </div>

        </div >
    </header >;
}

export default Header;