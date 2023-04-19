import React, { useState } from "react";
import { Box, FormControl, Button, Input, TextField } from "@mui/material";

// Form handles form input and submission.
const SignupForm = ({ isLargeScreen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [uploadImg, setUploadImg] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      location,
      occupation,
      email,
      password,
      // uploadImg,
    };
    const stringifiedData = JSON.stringify(formData);
    try {
      const res = await fetch("http://localhost:3001/auth/register", {
        body: stringifiedData,
        method: "POST",
      });
      const data = await res.json();
      if (res.ok) {
        // successful registration, redirect to root page
        window.location.href = "/";
      } else {
        // failled registration, display error message near the btn
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" px="2rem">
      {/* component="form" means that children components will be wrapped in an HTML <form> element */}
      {/* use "& childElement" syntax in MUI to select child elements */}
      <FormControl
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& input": { py: ".8rem", fontSize: ".7rem" },
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <TextField
            type="text"
            disableUnderline={true}
            sx={{
              outline: "1px solid lightgrey",
              borderRadius: "5px",
              width: "47%",
              mt: ".3rem",
            }}
            placeholder=" first name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            type="text"
            disableUnderline={true}
            sx={{
              outline: "1px solid lightgrey",
              borderRadius: "5px",
              width: "47%",
              mt: ".3rem",
            }}
            placeholder=" last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Box>
        <TextField
          type="text"
          disableUnderline={true}
          sx={{
            outline: "1px solid lightgrey",
            borderRadius: "5px",
            mt: ".3rem",
          }}
          placeholder=" Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <TextField
          type="text"
          disableUnderline={true}
          sx={{
            outline: "1px solid lightgrey",
            borderRadius: "5px",
            mt: ".3rem",
          }}
          placeholder=" Occupation"
          onChange={(e) => {
            setOccupation(e.target.value);
          }}
        />
        <Button
          variant="standard"
          component="label"
          sx={{
            mt: ".3rem",
            outline: "1px solid lightgrey",
          }}
        >
          Upload Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              setUploadImg(e.target.files[0]);
            }}
          />
        </Button>

        <TextField
          type="email"
          disableUnderline={true}
          sx={{
            outline: "1px solid lightgrey",
            borderRadius: "5px",
            mt: ".3rem",
          }}
          placeholder=" Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          type="password"
          disableUnderline={true}
          sx={{
            outline: "1px solid lightgrey",
            borderRadius: "5px",
            mt: ".3rem",
          }}
          placeholder=" Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ mt: ".3rem", bgcolor: "#42a5f5" }}
        >
          Sign up
        </Button>
      </FormControl>
    </Box>
  );
};

// export default SignupForm;
