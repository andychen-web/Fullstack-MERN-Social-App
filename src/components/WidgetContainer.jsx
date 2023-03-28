import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const WidgetContainer = ({ children }) => {
  const isLargeScreen = useMediaQuery("(min-width: 700px)");

  return (
    <Box
      width={isLargeScreen ? "25vw" : "65vw"}
      sx={{
        maxHeight: "65vh",
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
