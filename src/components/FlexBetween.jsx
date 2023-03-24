import { Box } from "@mui/material";
import React from "react";

const FlexBetween = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        py: ".5rem",
      }}
    >
      {children}
    </Box>
  );
};

export default FlexBetween;
