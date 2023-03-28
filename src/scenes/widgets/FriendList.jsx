import { Box, Typography } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetContainer from "components/WidgetContainer";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import React, { useState } from "react";

const FriendList = () => {
  // Example code. Modify it after get friends data from database
  const [friends, setFriends] = useState([
    {
      name: "jack",
      job: "doctor",
    },
    {
      name: "jack",
      job: "doctor",
    },
  ]);

  return (
    <WidgetContainer>
      <Typography variant="subtitle2" sx={"fontWeight:500"} pb="10px">
        Friend List
      </Typography>
      {/* friend row */}
      {friends.map((friend) => (
        <FriendRow key={friend.name} friend={friend} />
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
