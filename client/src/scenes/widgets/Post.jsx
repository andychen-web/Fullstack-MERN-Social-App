import { Box } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImg from "components/UserImg";
import WidgetContainer from "components/WidgetContainer";
import React from "react";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const Post = ({
  postId,
  location,
  name,
  description,
  userPicturePath,
  likes,
  comments,
  postUserId,
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);
  const friends = useSelector((state) => state.friends);
  const isFriendPresent = friends.some((friend) => friend._id === postUserId);

  const addRemoveFriend = async () => {
    try {
      // Make the PATCH request to the API endpoint
      const response = await fetch(
        `https://social-app-backend-3j7e.onrender.com/users/${_id}/${postUserId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      dispatch(setFriends({ friends: data }));
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };

  return (
    <WidgetContainer>
      <FlexBetween>
        <Box display={"flex"} alignItems={"center"}>
          <UserImg imgURL={userPicturePath} />
          <Box pl=".8rem" fontSize={".9rem"}>
            {name}
            <Box fontSize={".8rem"} color="grey">
              {location}
            </Box>
          </Box>
        </Box>
        {isFriendPresent ? (
          <PersonRemoveIcon
            onClick={addRemoveFriend}
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
        ) : (
          <PersonAddIcon
            onClick={addRemoveFriend}
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
        )}
      </FlexBetween>
      <Box pb={".5rem"}>{description}</Box>
    </WidgetContainer>
  );
};

export default Post;
