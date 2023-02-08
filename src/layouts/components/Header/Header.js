import classNames from "classnames/bind";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faEllipsisVertical,
  faGear,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import Button from "~/components/Button/Button";
import Menu from "~/components/Popper/Menu";
import {
  faCircleQuestion,
  faEarthAsia,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import "tippy.js/dist/tippy.css";
import { UploadIcon, MessageIcon, InboxIcon } from "~/components/Icons/icons";
import Image from "~/components/Image/Image";
import Search from "../Search";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "FeedBack and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard Short Cut",
  },
];

function Header() {
  const currentUser = true;

  //const handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo-link")}>
          <Link to={config.routes.home} className={cx('logo-link')}>
            <img src={images.logo} alt="Logo Tiktok" />
          </Link>
        </div>

        <Search></Search>

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy content="Upload Video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://yt3.ggpht.com/yti/AHXOFjV80YpBsolCZlEvtkhf-3MWa1qPmZJIFo396g=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="luong tand ai"
                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
