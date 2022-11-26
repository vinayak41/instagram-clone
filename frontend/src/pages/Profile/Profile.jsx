import React, { useEffect, useState } from "react";
import Header from "@components/Profile/Header";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { USER_API } from "../../utils/api";
import "./profile.scss";
import Post from "@components/Profile/Post";

const Profile = () => {
  const { username } = useParams();
  const { data: profile } = useFetch(`${USER_API}/profile/${username}`);

  return (
    <>
      {profile && (
        <div className="profile">
          <Header {...profile} />
          <div className="posts-wrapper" >
            {profile.posts.map((post) => (
              <Post {...post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
