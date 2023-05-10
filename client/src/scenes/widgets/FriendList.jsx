import { Box, Typography } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetContainer from "components/WidgetContainer";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import { useEffect } from "react";

const FriendList = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  const userId = useSelector((state) => state.user._id);
  console.log(friends);

  const getFriends = async () => {
    const response = await fetch(
      `https://social-app-backend-3j7e.onrender.com/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <WidgetContainer>
      <Typography variant="subtitle2" sx={"fontWeight:500"} pb="10px">
        Friend List
      </Typography>
      {/* friend row */}
      {friends.map((friend) => (
        <FriendRow name={friend.name} friend={friend} />
      ))}
    </WidgetContainer>
  );
};

const FriendRow = ({ friend }) => {
  return (
    <FlexBetween>
      <Box height="1.5rem" display="flex" alignItems="center">
        <img src="" alt="friend-pic" />
        <Box display="flex" flexDirection="column" pl="1rem">
          <Typography variant="subtitle1" fontWeight={500}>
            {friend.name}
            Fox
          </Typography>
          <Typography variant="subtitle2" color="grey">
            {friend.job}
          </Typography>
        </Box>
      </Box>
      <PersonRemoveIcon
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
  );
};

export default FriendList;
