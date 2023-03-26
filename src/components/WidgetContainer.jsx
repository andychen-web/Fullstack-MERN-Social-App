import { Box } from "@mui/system";
import React from "react";

const WidgetContainer = ({ children }) => {
  return (
    <Box
      sx={{
        padding: "1rem",
        paddingBottom: ".5rem",
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
