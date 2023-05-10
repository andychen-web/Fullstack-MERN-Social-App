import { Box, Button, Divider, FormControl, TextField } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImg from "components/UserImg";
import WidgetContainer from "components/WidgetContainer";
import ImageIcon from "@mui/icons-material/Image";
import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "state";

const MyPost = ({ picturePath }) => {
  const [postText, setPostText] = useState("");
  const [uploadImg, setUploadImg] = useState(null);
  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);

  const fileInputRef = useRef(null);
  const dispatch = useDispatch();

  const handlePost = async () => {
    if (!postText && !uploadImg) {
      alert("Please enter some text before posting.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("userId", _id);
      formData.append("description", postText);
      if (uploadImg) {
        formData.append("picture", uploadImg);
        formData.append("picturePath", uploadImg.name);
      }
      const response = await fetch(
        "https://social-app-backend-3j7e.onrender.com/posts",
        // "https://social-app-backend-3j7e.onrender.com/assets/posts",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      );
      const posts = await response.json();
      // 將從後端取得的posts 使用setPosts更新，以actions的形式傳到Redux store
      dispatch(setPosts({ posts }));
      // 送出後，清空圖片和貼文欄位的內容
      setUploadImg(null);
      setPostText("");
    } catch (err) {
      alert("posting failed");
      console.log(err);
    }
  };

  return (
    <Box>
      <FormControl component="form" onSubmit={handlePost}>
        <WidgetContainer>
          <FlexBetween>
            <UserImg imgURL={picturePath} />
            <TextField
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
          <Divider />
          <FlexBetween>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                fileInputRef.current.click();
              }}
            >
              <ImageIcon sx={{ fontSize: "1.2rem", color: "grey" }}></ImageIcon>
              <label style={{ fontSize: ".3rem" }}>
                {uploadImg ? uploadImg.name : "No file selected"}
              </label>
              <input
                type="file"
                hidden
                ref={fileInputRef}
                accept="image/*"
                onChange={(e) => {
                  setUploadImg(e.target.files[0]);
                }}
              />
            </Box>
            <Button
              onClick={handlePost}
              variant="contained"
              sx={{ borderRadius: "1rem", fontSize: ".5rem" }}
            >
              POST
            </Button>
          </FlexBetween>
        </WidgetContainer>
      </FormControl>
    </Box>
  );
};

export default MyPost;
