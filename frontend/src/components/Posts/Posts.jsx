import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import "./posts.scss"

const Posts = () => {
  const { allPosts } = useSelector((state) => state.posts);
  return (
    <div className="posts">
      {allPosts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
