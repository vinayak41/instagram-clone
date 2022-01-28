import React from "react";
import "./post.scss";
import { FaRegComment, FaUserAlt, FaRegBookmark } from "react-icons/fa";
import { IMAGE_API } from "../../../utils/api";
import { FiHeart, FiSend } from "react-icons/fi";
import { useState } from "react";

const Post = ({ post }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <div className="post">
      <div className="header">
        <div className="username-and-image-wrapper">
          <FaUserAlt className="default-user-icon" size={26} />
          <span>{post.postBy.username}</span>
        </div>
      </div>
      {!isImageLoaded ? <div className="imageSkeleton"></div> : null }
      <img
        src={`${IMAGE_API}/${post.images[0]}`}
        alt="post"
        onLoad={handleImageLoad}
      />
      <div className="buttons">
        <div>
          <FiHeart size={23} />
          <FaRegComment size={23} />
          <FiSend size={23} />
        </div>
        <div>
          <FaRegBookmark size={23} />
        </div>
      </div>
      <div className="footer"></div>
      <div className="writeComment"></div>
    </div>
  );
};

export default Post;
