import React from "react";
import instaLogo from "../../assets/Instagram-Wordmark-Black-Logo.wine.png";
import "./navbar.scss";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { IoIosCompass } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import CreatePost from "../CreatePost/CreatePost";

const Navabr = () => {
  return (
    <div className="navbar">
      <div className="navbarcontainer">
        <div className="logoWrapper">
          <img src={instaLogo} alt="instagram" />
        </div>
        <div className="searchWrapper">
          <input type="text" className="search" placeholder="Search" />
        </div>
        <div className="buttons">
          <AiFillHome className="button" size={26} />
          {/* <MdOutlineAddBox size={26} /> */}
          <CreatePost />
          <IoIosCompass className="button" size={26} />
          <FiHeart className="button" size={26} />
          <FaUserAlt  className="default-user-icon button" size={26} />
        </div>
      </div>
    </div>
  );
};

export default Navabr;
