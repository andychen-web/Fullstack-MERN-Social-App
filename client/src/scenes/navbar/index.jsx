import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Message, Notifications, MoreVert } from "@mui/icons-material";

import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { setLogout } from "state";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLargeScreen }) => {
  const black = "#292e36";

  // useSelector hook extracts the state from Redux store and get a slice of that state
  const user = useSelector((state) => state.user);
  const fullName = user.firstName + user.lastName;
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const logOut = () => {
    dispatch(setLogout(true));
    navigate("/");
  };

  return (
    <>
      <AppBar
        sx={{
          bgcolor: "white",
        }}
      >
        <Toolbar
          sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", width: "90%" }}>
            <Typography
              variant={isLargeScreen ? "h6" : "caption"}
              fontWeight="500"
              color="#42a5f5"
            >
              FriendSphere
            </Typography>
          </Box>
          {/* Nav Items */}
          <Box display="flex" alignItems="center">
            <Message
              sx={{
                fontSize: isLargeScreen ? "1.5rem" : "1rem",
                color: black,
                paddingTop: "2px",
                cursor: "pointer",
              }}
            />
            <Notifications
              sx={{
                fontSize: isLargeScreen ? "1.5rem" : "1rem",
                color: black,
                paddingX: ".7rem",
                cursor: "pointer",
              }}
            />

            <IconButton onClick={handleMenuClick}>
              <MoreVert
                sx={{
                  fontSize: isLargeScreen ? "1.5rem" : "1rem",
                  color: "black",
                }}
              />
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
                transform: isLargeScreen
                  ? "translate(0,-25vh)"
                  : "translate(0,-35vh)",
              }}
              id="menu"
              open={menuOpen}
              onClose={handleMenuClick}
            >
              <MenuItem value={fullName} onClick={handleMenuClick}>
                <Typography
                  sx={{
                    fontSize: ".8rem",
                  }}
                >
                  {fullName}
                </Typography>
              </MenuItem>
              <MenuItem sx={{ fontSize: ".8rem" }} onClick={handleMenuClick}>
                <Box onClick={logOut}>Logout</Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
