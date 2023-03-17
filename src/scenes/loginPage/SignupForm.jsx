import React, { useState } from "react";
import { Box, FormControl, Button, Input } from "@mui/material";

// Form handles form input and submission.
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    // make AJAX request to server
    fetch("/api/loginForm", {
      body: JSON.stringify(formData),
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box display="flex" flexDirection="column" px="2rem">
      {/* component="form" means that children components will be wrapped in an HTML <form> element */}
      {/* use "& childElement" syntax in MUI to select child elements */}
      <FormControl
        component="form"
        // onSubmit={handleSubmit}
        sx={{ "& input": { py: ".5rem", fontSize: ".7rem" } }}
      >
        <Box display="flex" justifyContent="space-between">
          <Input
            type="text"
            disableUnderline={true}
            sx={{
              outline: "1px solid lightgrey",
              borderRadius: "5px",
              height: "2rem",
              my: ".3rem",
              width: "47%",
            }}
            placeholder=" first name"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="text"
            disableUnderline={true}
            sx={{
              outline: "1px solid lightgrey",
              borderRadius: "5px",
              height: "2rem",
              my: ".3rem",
              width: "47%",
            }}
            placeholder=" last name"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Box>
        <Input
          type="text"
          disableUnderline={true}
          sx={{
            outline: "1px solid lightgrey",
            borderRadius: "5px",
            height: "2rem",
            my: ".3rem",
          }}
          placeholder=" Location"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="text"
          disableUnderline={true}
          sx={{
            outline: "1px solid lightgrey",
            borderRadius: "5px",
            height: "2rem",
            my: ".3rem",
          }}
          placeholder=" Occupation"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          type="email"
          disableUnderline={true}
          sx={{
            outline: "1px solid lightgrey",
            borderRadius: "5px",
            height: "2rem",
            my: ".3rem",
          }}
          placeholder=" Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          disableUnderline={true}
          sx={{ outline: "1px solid lightgrey", borderRadius: "5px" }}
          placeholder=" Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ mt: "1rem", bgcolor: "#42a5f5" }}
        >
          Sign up
        </Button>
      </FormControl>
    </Box>
  );
};

export default SignupForm;
