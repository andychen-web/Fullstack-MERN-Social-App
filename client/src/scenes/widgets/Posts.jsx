import React, { useEffect } from "react";
import { setPosts } from "state";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const posts = useSelector((state) => state.posts);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://social-app-backend-3j7e.onrender.com/posts",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      dispatch(setPosts(data));
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  return (
    <>
      {Array.isArray(posts) &&
        posts.map(
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            userPicturePath,
            comments,
            likes,
          }) => (
            <Post
              postUserId={userId}
              key={_id}
              postId={_id}
              name={firstName + lastName}
              location={location}
              description={description}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
            />
          )
        )}
    </>
  );
};

export default Posts;
