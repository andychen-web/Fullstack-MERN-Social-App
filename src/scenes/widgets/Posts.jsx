import { Box } from "@mui/system";
import FlexBetween from "components/FlexBetween";
import UserImg from "components/UserImg";
import WidgetContainer from "components/WidgetContainer";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import React from "react";
import { setFriends } from "state";
import { store } from "state";

const Posts = () => {
  const addFriend = () => {
    store.dispatch(setFriends({ name: "jack" }));
    console.log(store.getState());
    // save user info (name etc.) in state, use that state in friendlist widgets
  };

  return (
    <WidgetContainer>
      <FlexBetween>
        <Box display={"flex"}>
          <UserImg />
          <Box pl=".8rem">friendName</Box>
        </Box>
        <PersonRemoveIcon
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
    </WidgetContainer>
  );
};

export default Posts;
