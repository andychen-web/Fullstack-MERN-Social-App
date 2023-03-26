import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import UserImg from "components/UserImg";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import WidgetContainer from "components/WidgetContainer";
import EditIcon from "@mui/icons-material/Edit";
import FlexBetween from "components/FlexBetween";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
const User = () => {
  const addFriend = () => {
    alert("add");
  };
  const handleEdit = () => {
    alert("edit");
  };

  return (
    <WidgetContainer>
      <FlexBetween>
        <Box display={"flex"}>
          <UserImg />
          <Box pl=".8rem">userName</Box>
        </Box>
        <PersonAddIcon
          sx={{ fontSize: "1.3rem", color: "grey" }}
          onClick={addFriend}
        />
      </FlexBetween>
      <Divider />

      <Box>
        <Box display="flex" alignItems="center" pt=".5rem">
          <LocationOnIcon
            sx={{ fontSize: "1.3rem", color: "grey", pr: ".8rem" }}
          />
          Location
        </Box>
        <Box display="flex" alignItems="center" py=".5rem">
          <ApartmentIcon
            sx={{ fontSize: "1.3rem", color: "grey", pr: ".8rem" }}
          />
          Company
        </Box>
      </Box>
      <Divider />

      <Box pt=".5rem">
        <Typography variant="subtitle2">Social Profiles </Typography>
        <FlexBetween>
          <Box display="flex">
            <img height={"20px"} src="/assets/twitter.png" alt="" />
            <Box pl="1rem">Twitter</Box>
          </Box>
          <EditIcon
            onClick={handleEdit}
            sx={{ color: "grey", fontSize: "1rem" }}
          />
        </FlexBetween>
        <FlexBetween>
          <Box display="flex">
            <img height={"20px"} src="/assets/linkedin.png" alt="" />
            <Box pl="1rem">LinkedIn</Box>
          </Box>
          <EditIcon
            onClick={handleEdit}
            sx={{ color: "grey", fontSize: "1rem" }}
          />
        </FlexBetween>
      </Box>
      <Divider />
    </WidgetContainer>
  );
};

export default User;