import { Box, Button, Divider, FormControl, TextField } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImg from "components/UserImg";
import WidgetContainer from "components/WidgetContainer";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "state";

const MyPost = ({ picturePath }) => {
  const [postText, setPostText] = useState("");
  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handlePost = async () => {
    if (!postText) {
      alert("Please enter some text before posting.");
      return;
    }

    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", postText);
    const response = await fetch(
      "https://social-app-backend-3j7e.onrender.com/posts",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      }
    );
    const posts = await response.json();
    console.log(posts);
    // 將從後端取得的posts 使用setPosts更新，以actions的形式傳到Redux store
    dispatch(setPosts({ posts }));
    // 送出後，清空圖片和貼文欄位的內容
    setPostText("");
  };

  return (
    <Box>
      <FormControl component="form" onSubmit={handlePost}>
        <WidgetContainer>
          <FlexBetween>
            <UserImg imgURL={picturePath} />
            <TextField
              placeholder="Share your ideas"
              sx={{
                height: "2rem",
                overflow: "hidden",
                background: "#F3F3F3",
                borderRadius: "1rem",
              }}
              InputProps={{
                style: { fontSize: ".8rem", padding: ".5rem" },
              }}
              variant="standard"
              onChange={(e) => setPostText(e.target.value)}
              value={postText}
            />
          </FlexBetween>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              cursor: "pointer",
            }}
          >
            <Button
              onClick={handlePost}
              variant="contained"
              sx={{ borderRadius: "1rem", fontSize: ".5rem" }}
            >
              POST
            </Button>
          </Box>
        </WidgetContainer>
      </FormControl>
    </Box>
  );
};

export default MyPost;
