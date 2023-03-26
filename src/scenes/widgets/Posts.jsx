import { Box } from "@mui/system";
import FlexBetween from "components/FlexBetween";
import UserImg from "components/UserImg";
import WidgetContainer from "components/WidgetContainer";
import React from "react";

const Posts = () => {
  return (
    <WidgetContainer>
      <Box display={"flex"}>
        <UserImg />
        <Box pl=".8rem">postUserName</Box>
      </Box>
    </WidgetContainer>
  );
};

export default Posts;
