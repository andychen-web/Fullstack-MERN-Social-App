import { Box, Button, Divider, FormControl, TextField } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImg from "components/UserImg";
import WidgetContainer from "components/WidgetContainer";
import ImageIcon from "@mui/icons-material/Image";
import React, { useRef, useState } from "react";

const MyPost = () => {
  const [uploadImg, setUploadImg] = useState(null);
  const fileInputRef = useRef(null);

  const handlePost = () => {
    // send props to the posts widget, need to send to backend or not?
  };
  return (
    <Box>
      <FormControl component="form" onSubmit={handlePost}>
        <WidgetContainer>
          <FlexBetween>
            <UserImg />
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
              Image
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
