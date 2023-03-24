import { useState } from "react";
import { useSelector } from "react-redux";

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

const Navbar = ({ isLargeScreen }) => {
  const black = "#292e36";
  const beige = "#F3F3F3";

  // useSelector hook extracts the state from Redux store and get a slice of that state
  const user = useSelector((state) => state.user);
  // const fullName = `${user.firstName} ${user.lastName}`;
  const fullName = "exampleName";
  const [menuOpen, setMenuOpen] = useState(false);
  const handleUserClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar
        sx={{
          bgcolor: "white",
        }}
      >
        {isLargeScreen ? (
          <Toolbar
            sx={{
              bgcolor: "white",
              justifyContent: "space-between",
              width: "95%",
            }}
          >
            {/* Large Screen: LOGO and Search Bar */}
            <Box display="flex" alignItems="center" width="90%">
              <Typography variant="h6" color="#42a5f5">
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
                      <Search
                        sx={{ color: "black", cursor: "pointer" }}
                        onClick={() => {
                          alert("do search feature");
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            {/* Nav Items */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Message
                sx={{
                  fontSize: "1.5rem",
                  color: black,
                  paddingTop: "2px",
                  cursor: "pointer",
                }}
              />

              <Notifications
                sx={{
                  fontSize: "1.5rem",
                  color: black,
                  paddingX: ".7rem",
                  cursor: "pointer",
                }}
              />
              <Help
                sx={{ fontSize: "1.5rem", color: black, cursor: "pointer" }}
              />

              <IconButton onClick={handleUserClick}>
                <MoreVert sx={{ fontSize: "1.5rem", color: "black" }} />
              </IconButton>
              <Menu
                sx={{
                  width: "150px",
                  minHeight: "190px",
                  position: "absolute",
                  marginY: "50px",
                  right: "0",
                  left: "unset",
                  top: "-30vh",
                  transform: "translateX(90vw)",
                  transform: "translateY(-40vh)",
                }}
                id="menu"
                open={menuOpen}
                onClose={handleUserClick}
              >
                <MenuItem value={fullName} onClick={handleUserClick}>
                  <Typography sx={{ fontSize: ".8rem" }}>{fullName}</Typography>
                </MenuItem>
                <MenuItem sx={{ fontSize: ".8rem" }} onClick={handleUserClick}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        ) : (
          <Toolbar
            sx={{
              bgcolor: "white",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Smaller Screen: LOGO and Search Bar */}
            <Box sx={{ display: "flex", alignItems: "center", width: "90%" }}>
              <Typography fontWeight="500" color="#42a5f5">
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
                      <Search sx={{ color: black, cursor: "pointer" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            {/* Nav Items */}
            <Box display="flex" alignItems="center">
              <Message
                sx={{
                  fontSize: "1rem",
                  color: black,
                  paddingTop: "2px",
                  cursor: "pointer",
                }}
              />
              <Notifications
                sx={{
                  fontSize: "1rem",
                  color: black,
                  paddingX: ".7rem",
                  cursor: "pointer",
                }}
              />
              <Help
                sx={{ fontSize: "1rem", color: black, cursor: "pointer" }}
              />

              <IconButton onClick={handleUserClick}>
                <MoreVert sx={{ fontSize: "1rem", color: "black" }} />
              </IconButton>
              <Menu
                sx={{
                  width: "150px",
                  minHeight: "190px",
                  position: "absolute",
                  marginY: "50px",
                  right: "0",
                  left: "unset",
                  top: "-48vh",
                  transform: "translateX(0)",
                  transform: "translateY(-40vh)",
                }}
                id="menu"
                open={menuOpen}
                onClose={handleUserClick}
              >
                <MenuItem value={fullName} onClick={handleUserClick}>
                  <Typography sx={{ fontSize: ".8rem" }}>{fullName}</Typography>
                </MenuItem>
                <MenuItem sx={{ fontSize: ".8rem" }} onClick={handleUserClick}>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        )}
      </AppBar>
    </>
  );
};

export default Navbar;
