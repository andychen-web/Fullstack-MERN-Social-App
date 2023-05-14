import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import UserImg from "components/UserImg";
import WidgetContainer from "components/WidgetContainer";
import FlexBetween from "components/FlexBetween";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const User = ({ userInfo }) => {
  const picturePath = userInfo.picturePath;
  const userName = userInfo.firstName + " " + userInfo.lastName;
  const location = userInfo.location;
  const occupation = userInfo.occupation;

  return (
    <WidgetContainer>
      <FlexBetween>
        <Box display={"flex"} alignItems={"center"}>
          <UserImg imgURL={picturePath} />
          <Box pl=".8rem" fontSize={".9rem"}>
            {userName}
          </Box>
        </Box>
      </FlexBetween>
      <Divider />

      <Box>
        <Box display="flex" alignItems="center" pt=".5rem">
          <LocationOnIcon
            sx={{ fontSize: "1.3rem", color: "grey", pr: ".8rem" }}
          />
          {location}
        </Box>
        <Box display="flex" alignItems="center" py=".5rem">
          <ApartmentIcon
            sx={{ fontSize: "1.3rem", color: "grey", pr: ".8rem" }}
          />
          {occupation}
        </Box>
      </Box>
      <Divider />

      <Box pt=".5rem">
        <Typography variant="subtitle2">Social Profiles </Typography>
        <FlexBetween>
          <Box display="flex">
            <TwitterIcon sx={{ fontSize: "1.3rem", color: "grey" }} />
            <Box>
              <Box sx={{ pl: "1rem", fontSize: ".8rem" }}>Twitter</Box>
            </Box>
          </Box>
        </FlexBetween>
        <FlexBetween>
          <Box display="flex">
            <LinkedInIcon sx={{ fontSize: "1.3rem", color: "grey" }} />
            <Box sx={{ pl: "1rem", fontSize: ".8rem" }}>LinkedIn</Box>
          </Box>
        </FlexBetween>
      </Box>
      <Divider />
    </WidgetContainer>
  );
};

export default User;
