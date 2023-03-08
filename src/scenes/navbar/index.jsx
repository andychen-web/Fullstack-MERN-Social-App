import { useState } from "react";

import {
  Search,
  Message,
  Notifications,
  Help,
  MoreVert,
} from "@mui/icons-material";

import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";

const Navbar = () => {
  const black = "#292e36";
  const beige = "#F3F3F3";

  const [menuOpen, setMenuOpen] = useState(false);
  const handleUserClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar sx={{ overflow: "hidden", background: "white" }}>
        {/* Mobile Navbar */}

        {/* Desktop Navbar */}
        <Toolbar
          sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
          }}
        >
          {/* LOGO and Search Bar */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{ color: "#42a5f5" }}
              fontWeight="bold"
            >
              FriendSphere
            </Typography>
            <TextField
              sx={{
                margin: ".5rem",
                fontSize: "1rem",
                borderRadius: ".5rem",
                overflow: "hidden",
                background: beige,
              }}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search sx={{ color: black }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {/* Nav Items */}
          <Box sx={{ display: "flex" }}>
            <Message
              sx={{ fontSize: "1.5rem", color: black, paddingTop: "2px" }}
            />
            <Notifications
              sx={{ fontSize: "1.5rem", color: black, paddingX: ".7rem" }}
            />
            <Help sx={{ fontSize: "1.5rem", color: black }} />

            <IconButton onClick={handleUserClick}>
              <MoreVert sx={{ fontSize: "1.5rem", color: "black" }} />
            </IconButton>
            <Menu
              sx={{
                width: "150px",
                position: "absolute",
                right: "0",
                top: "0",
                left: "unset",
                transform: "translateX(90vw)",
                transform: "translateY(-63vh)",
              }}
              id="menu"
              open={menuOpen}
              onClose={handleUserClick}
            >
              <MenuItem sx={{ fontSize: ".8rem" }} onClick={handleUserClick}>
                User
              </MenuItem>
              <MenuItem sx={{ fontSize: ".8rem" }} onClick={handleUserClick}>
                My account
              </MenuItem>
              <MenuItem sx={{ fontSize: ".8rem" }} onClick={handleUserClick}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
