import React from "react";
import { IMAGE_API } from "@utils/api";
import styles from  "./post.module.scss"

const Post = ({ images, comments, caption, likes }) => {
  return (
    <div className={styles.post} >
      <img src={`${IMAGE_API}/${images[0]}`} />
    </div>
  );
};

export default Post;
