import { Box, Typography } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetContainer from "components/WidgetContainer";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";
import { useEffect } from "react";
import FriendRow from "components/FriendRow";

const FriendList = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const userId = useSelector((state) => state.user._id);

  const getFriends = async () => {
    const response = await fetch(
      `https://social-app-backend-3j7e.onrender.com/users/${userId}/friends`,
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
      <Typography variant="subtitle2" fontWeight="500" pb="10px">
        Friend List
      </Typography>
      <FriendRow />
    </WidgetContainer>
  );
};

export default FriendList;
