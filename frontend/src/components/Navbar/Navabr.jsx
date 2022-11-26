import React from "react";
import instaLogo from "../../assets/Instagram-Wordmark-Black-Logo.wine.png";
import styles from "./navbar.module.scss";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { IoIosCompass } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import CreatePost from "../CreatePost/CreatePost";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navabr = () => {
  const { isAuthenticated, username } = useSelector((state) => state.user);
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarcontainer}>
        <div className={styles.logoWrapper}>
          <img src={instaLogo} alt="instagram" />
        </div>
        <div className={styles.searchWrapper}>
          <input type="text" className={styles.search} placeholder="Search" />
        </div>
        {isAuthenticated && (
          <div className={styles.buttons}>
            <Link to="/">
              <AiFillHome color="black" className={styles.button} size={26} />
            </Link>
            {/* <MdOutlineAddBox size={26} /> */}
            <CreatePost />
            <IoIosCompass className={styles.button} size={26} />
            <FiHeart className={styles.button} size={26} />
            <Link to={`/${username}`}>
              <FaUserAlt
                className={`${styles["default-user-icon"]} ${styles.button}`}
                size={26}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navabr;
