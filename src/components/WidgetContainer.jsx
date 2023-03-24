import { Box } from "@mui/system";
import React from "react";

const WidgetContainer = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "10rem",
        padding: "1.5rem 1.5rem 1rem 1rem",
        backgroundColor: "white",
        borderRadius: "0.75rem",
        fontSize: ".7rem",
        position: "relative",
        top: "100px",
        left: "10px",
      }}
    >
      {children}
    </Box>
  );
};

export default WidgetContainer;
