import React, { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import UserImg from "components/UserImg";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import WidgetContainer from "components/WidgetContainer";
import EditIcon from "@mui/icons-material/Edit";
import FlexBetween from "components/FlexBetween";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const User = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await fetch("/api/user", { method: "GET" });
      const data = await res.json();
      const userName = data.name;
      setUser(userName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleEdit = () => {
    alert("edit");
  };

  return (
    <WidgetContainer>
      <FlexBetween>
        <Box display={"flex"}>
          <UserImg />
          <Box pl=".8rem">{user}</Box>
        </Box>
        <ManageAccountsIcon
          sx={{ fontSize: "1.3rem", color: "grey" }}
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
            <TwitterIcon sx={{ fontSize: "1.3rem", color: "grey" }} />
            <Box pl="1rem">Twitter</Box>
          </Box>
          <EditIcon
            onClick={handleEdit}
            sx={{ color: "grey", fontSize: "1rem" }}
          />
        </FlexBetween>
        <FlexBetween>
          <Box display="flex">
            <LinkedInIcon sx={{ fontSize: "1.3rem", color: "grey" }} />
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
