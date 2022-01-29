import React from "react";
import "./post.scss";
import { FaRegComment, FaUserAlt, FaRegBookmark } from "react-icons/fa";
import { IMAGE_API } from "../../../utils/api";
import { FiHeart, FiSend } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dislikePost,
  likePost,
  postComment,
} from "../../../redux/actions/postActions";

const Post = ({ post }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  const handleLikePost = () => {
    dispatch(likePost(post._id));
  };
  const handelDislikePost = () => {
    dispatch(dislikePost(post._id));
  };
  const handleCommentChange = (evnet) => {
    setNewComment(event.target.value);
  };
  const handleCommentPost = (event) => {
    event.preventDefault();
    if (newComment) {
      dispatch(postComment({ postId: post._id, text: newComment }));
      setNewComment("");
    }
  };
  const handleShowComments = () => {
    setShowComments(true);
  };
  const handleHideComments = () => {
    setShowComments(false)
  }
  return (
    <div className="post">
      <div className="header">
        <div className="username-and-image-wrapper">
          <FaUserAlt className="default-user-icon" size={26} />
          <span>{post.postBy.username}</span>
        </div>
      </div>
      {!isImageLoaded ? <div className="imageSkeleton"></div> : null}
      <img
        src={`${IMAGE_API}/${post.images[0]}`}
        alt="post"
        onLoad={handleImageLoad}
      />
      <div className="buttons">
        <div>
          {post.likes.includes(user.id) ? (
            <FaHeart
              className="liked-button"
              size={23}
              onClick={handelDislikePost}
            />
          ) : (
            <FiHeart size={23} onClick={handleLikePost} />
          )}
          <FaRegComment size={23} />
          <FiSend size={23} />
        </div>
        <div>
          <FaRegBookmark size={23} />
        </div>
      </div>
      <div className="footer">
        <p className="likes-count">{post.likes.length} likes</p>
        {post.caption ? (
          <p className="caption">
            <span>{post.postBy.username}</span>
            &nbsp; {post.caption}
          </p>
        ) : null}
        {post.comments.length > 0  ? (
          <>
            {" "}
            <p className="comments-count" onClick={handleShowComments}>
              View all {post.comments.length} comments
            </p>
            {showComments ? (
              <div className="comments">
                <p className="hide-comments" onClick={handleHideComments}>Hide Comments</p>{" "}
                {post.comments.map((comment) => (
                  <p className="comment">
                    <span>{comment.commentBy.username}</span>
                    {comment.text}
                  </p>
                ))}{" "}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
      <form className="writeComment" onSubmit={handleCommentPost}>
        <textarea
          value={newComment}
          name="comment"
          placeholder="Add a comment..."
          rows={1}
          onChange={handleCommentChange}
        />
        <button type="submit" className="post-comment-btn">
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
