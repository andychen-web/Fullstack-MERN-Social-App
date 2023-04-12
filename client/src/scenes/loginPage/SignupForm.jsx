import React, { useState } from "react";
import { Box, FormControl, Button, Input } from "@mui/material";

// Form handles form input and submission.
const SignupForm = ({ isLargeScreen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [uploadImg, setUploadImg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      location,
      occupation,
      email,
      password,
      uploadImg,
    };
    try {
      const res = await fetch("/api/loginForm", {
        body: JSON.stringify(formData),
        method: "POST",
      });
      const data = res.json();
      console.log(data);
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
          "& input": { py: ".5rem", fontSize: ".7rem" },
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Input
            type="text"
            disableUnderline={true}
            sx={{
              outline: "1px solid lightgrey",
              borderRadius: "5px",
              height: "2rem",
              my: ".2rem",
              width: "47%",
            }}
            placeholder=" first name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <Input
            type="text"
            disableUnderline={true}
            sx={{
              outline: "1px solid lightgrey",
              borderRadius: "5px",
              height: "2rem",
              my: ".2rem",
              width: "47%",
            }}
            placeholder=" last name"
            onChange={(e) => {
              setLastName(e.target.value);
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
            my: ".2rem",
          }}
          placeholder=" Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <Input
          type="text"
          disableUnderline={true}
          sx={{
            outline: "1px solid lightgrey",
            borderRadius: "5px",
            height: "2rem",
            my: ".2rem",
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
            outline: "1px solid lightgrey",
            height: "2rem",
            mt: ".2rem",
            mb: "-10px",
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
          sx={{ mt: ".3rem", bgcolor: "#42a5f5" }}
        >
          Sign up
        </Button>
      </FormControl>
    </Box>
  );
};

export default SignupForm;
