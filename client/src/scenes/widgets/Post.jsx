import { Box } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImg from "components/UserImg";
import WidgetContainer from "components/WidgetContainer";
import React from "react";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Post = ({
  key,
  postId,
  name,
  description,
  userPicturePath,
  picturePath,
  likes,
  comments,
  userId,
}) => {
  const addFriend = () => {
    // refactor
  };

  return (
    <WidgetContainer>
      <FlexBetween>
        <Box display={"flex"} alignItems={"center"}>
          <UserImg imgURL={userPicturePath} />
          <Box pl=".8rem" fontSize={".9rem"}>
            {name}
          </Box>
        </Box>
        <PersonAddIcon
          onClick={addFriend}
          sx={{
            background: "hsl(200, 53%, 90%)",
            color: "hsl(210, 80%, 65%)",
            fontSize: ".8rem",
            padding: "5px",
            boxShadow: "5px",
            borderRadius: "1rem",
            cursor: "pointer",
          }}
        />
      </FlexBetween>
      <Box pb={".5rem"}>{description}</Box>
      <Box display={"flex"} justifyContent={"start"}>
        <img
          src={`https://social-app-backend-3j7e.onrender.com/assets/${picturePath}`}
          alt="postPic"
          style={{
            maxWidth: "10rem",
            maxHeight: "9rem",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </Box>
    </WidgetContainer>
  );
};

export default Post;
