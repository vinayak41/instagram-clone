import React from "react";
import avatar from "@assets/images/user.jpg";
import { IoMdSettings } from "react-icons/io";
import "./header.scss";

const Header = ({ user, post_count }) => {
  return (
    <div className="header">
      <div className="avatar-container">
        <div className="avatar-wrapper">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
      <div className="user-details">
        <div>
          <h3>{user.username}</h3>
          <button className="edit-profile-button">Edit Profile</button>
          <IoMdSettings size={20} />
        </div>
        <div>
          <p>{post_count} posts</p>
          <p>0 followers</p>
          <p>0 following</p>
        </div>
        <div className="fullname">{user.fullname}</div>
      </div>
    </div>
  );
};

export default Header;
