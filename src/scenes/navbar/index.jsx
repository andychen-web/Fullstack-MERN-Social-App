import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
// try simple navbar first, see the difference at the end
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ bgcolor: "white" }}>
          <Typography variant="h5" sx={{ color: "#42a5f5" }} fontWeight="bold">
            FriendSphere
          </Typography>
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>

      </AppBar>
    </>
  );
};

export default Navbar;
