import useElementOnScreen from "@hooks/useIntersectionObserver";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../components/Posts/Posts";
import { getPosts } from "../../redux/actions/postActions";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { feed, loading } = useSelector((state) => state.posts);
  const { isAuthenticated } = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  const { elementRef: feedLoaderRef, isOnScreen: isFeedLoaderOnScreen } =
    useElementOnScreen({ root: null, rootMargin: "0px", threshold: 0 });

  useEffect(() => {
    if (isAuthenticated) {
      if (feed?.page !== page) {
        dispatch(getPosts({ page }));
      }
    }
  }, [isAuthenticated, page]);

  useEffect(() => {
    if (isFeedLoaderOnScreen && !loading) {
      setPage((prevValue) => prevValue + 1);
    }
  }, [isFeedLoaderOnScreen]);


  return (
    <div className="home">
      <div className="main">
        <Posts posts={feed.posts} />
        <span ref={feedLoaderRef}></span>
      </div>
    </div>
  );
};

export default Home;
