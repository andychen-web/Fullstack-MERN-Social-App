import React from "react";
import { Box, FormControl, Button, Input } from "@mui/material";

const Form = () => {
  return (
    <Box display="flex" flexDirection="column" px="2rem">
      {/* use "& childElement" syntax in MUI to select child elements */}
      <FormControl sx={{ "& input": { pt: ".8rem" } }}>
        <Input type="text" sx={{ outline: "none" }} placeholder="Email" />
        <Input type="text" sx={{ outline: "none" }} placeholder="Password" />
      </FormControl>
      <Button variant="contained" sx={{ mt: ".5rem", bgcolor: "#42a5f5" }}>
        Login
      </Button>
    </Box>
  );
};

export default Form;
