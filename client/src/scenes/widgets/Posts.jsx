import React, { useEffect } from "react";
import { setPosts } from "state";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";

const Posts = ({ userId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const posts = useSelector((state) => state.posts);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        // test 後端是否把資料存在localhost? api 改成localhost
        // `https://social-app-backend-3j7e.onrender.com/posts/${userId}`,
        `https://social-app-backend-3j7e.onrender.com/posts`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // test 是否redux store 和 fetch 資料衝突，否
      // const posts = await response.json();
      const data = await response.json();
      dispatch(setPosts(data));

      // change  to this get no result
      // dispatch(setPosts({ posts: data }));
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
            picturePath,
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
              picturePath={picturePath}
              likes={likes}
              comments={comments}
            />
          )
        )}
    </>
  );
};

export default Posts;
