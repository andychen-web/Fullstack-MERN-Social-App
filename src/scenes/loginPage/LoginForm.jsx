import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, Button, Input } from "@mui/material";
import AuthContext from "context/AuthContext";

const LoginForm = ({ isLargeScreen }) => {
  // extract only the isLoggedIn property from the context object
  const { getIsLoggedIn, isLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    try {
      const res = await fetch("/api/loginForm", {
        body: JSON.stringify(formData),
        method: "POST",
      });
      const data = await res.json();
      console.log(data);

      await getIsLoggedIn;

      if (isLoggedIn) {
        navigate("/home");
      } else {
        alert("Login failed, please try again");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      px={isLargeScreen ? "2rem" : "1rem"}
    >
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
