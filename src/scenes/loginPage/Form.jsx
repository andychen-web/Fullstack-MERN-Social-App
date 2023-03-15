import React from "react";
import { Box, FormControl, Button, Input } from "@mui/material";

const Form = ({ isLargeScreen }) => {
  return (
    <Box display="flex" flexDirection="column" px="2rem">
      {/* use "& childElement" syntax in MUI to select child elements */}
      <FormControl sx={{ "& input": { py: ".5rem" } }}>
        <Input
          type="text"
          disableUnderline={true}
          sx={{
            outline: "1px solid lightgrey",
            borderRadius: "5px",
            my: "1rem",
          }}
          placeholder=" Email"
        />
        <Input
          type="text"
          disableUnderline={true}
          sx={{ outline: "1px solid lightgrey", borderRadius: "5px" }}
          placeholder=" Password"
        />
      </FormControl>
      <Button variant="contained" sx={{ mt: "1rem", bgcolor: "#42a5f5" }}>
        Login
      </Button>
    </Box>
  );
};

export default Form;
