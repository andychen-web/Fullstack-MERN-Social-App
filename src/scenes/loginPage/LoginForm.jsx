import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, Button, Input } from "@mui/material";
// Form handles form input and submission.
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

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
    // auth test
    setIsAuth(true);
    // if successful auth, navigate to homepage
    if (isAuth) {
      navigate("/home");
    }
  };
  return (
    <Box display="flex" flexDirection="column" px="2rem">
      {/* component="form" means that children components will be wrapped in an HTML <form> element */}
      {/* use "& childElement" syntax in MUI to select child elements */}
      <FormControl
        component="form"
        onSubmit={handleSubmit}
        sx={{ "& input": { py: ".5rem" } }}
      >
        <Input
          type="email"
          disableUnderline={true}
          sx={{
            outline: "1px solid lightgrey",
            borderRadius: "5px",
            my: "1rem",
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
          Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
