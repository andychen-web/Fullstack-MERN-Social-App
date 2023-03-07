import { useState } from "react";

import { Search, Notifications, Help } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

const Navbar = () => {
  const black = "#292e36";
  return (
    <>
      <AppBar>
        {/* Mobile Navbar */}

        {/* Desktop Navbar */}
        <Toolbar
          sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <>
            <Typography
              variant="h6"
              sx={{ color: "#42a5f5" }}
              fontWeight="bold"
            >
              FriendSphere
            </Typography>
            <TextField
              sx={{ margin: ".5rem", fontSize: "1.5rem" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search sx={{ color: black }} />
                  </InputAdornment>
                ),
              }}
            />
          </>
          <Notifications sx={{ fontSize: "1.5rem", color: black }} />
          <Help sx={{ fontSize: "1.5rem", color: black }} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
